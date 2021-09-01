import express from "express";
import { UserDto } from "./domain/dtos/UserDto";
import  {UserRepository} from './Infrastructure/repositories/UserRepository'
import {toEntity} from './application/mappers/userMapper'
import { LoginRequestDto } from "./domain/dtos/LoginRequestDto";
export class UserApi{
    private _userRepository:any;
    constructor(){
        this._userRepository = new UserRepository();
    }
    
    async getAll(req: express.Request, res: express.Response){
        let usersList = await this._userRepository.Get();
        return  res.status(200).json(usersList);
    };

    async getById(req: express.Request, res: express.Response){
        const idUser  = req.params.id;
        let foundUser = await this._userRepository.GetById(idUser);
        if(foundUser){
            return res.status(200).json(foundUser);
        }
        else{
            return res.status(404).send(`User with id: ${idUser} was not found.`)
        }
    }
    async getByPhone(req: express.Request, res: express.Response){
        const phoneUser  = req.params.phone;
        let foundUser = await this._userRepository.GetByPhone({tag: phoneUser}).exec();
        if(foundUser){
            return res.status(200).json(foundUser);
        }
        else{
            return res.status(404).send(`User with id: ${phoneUser} was not found.`)
        }
    }
    async create(req: express.Request, res: express.Response){
        console.log('this is the body');
        const userDto = this.getDtoFromRequest(req);
        let createdUser = await this._userRepository.Create(toEntity(userDto))
        if(createdUser){
            return res.status(201).json(createdUser);
        }else{
            return res.status(400).send("The user could not be created. Please check the provided data.")
        }
    }

    async login(req: express.Request, res: express.Response){
        const loginDto = this.getLoginDtoFromRequest(req);
        let existingUser = await this._userRepository.GetByPhone(loginDto.Phone)
        if(existingUser){
            if(existingUser.password == loginDto.Password){
                return res.status(200).json(existingUser);
            }
            return res.status(401).send("User name or password are incorrects.")
        }else{
            return res.status(404).send("No user has been found with this phone number")
        }
    }

    //#region private methods
    getDtoFromRequest(req: express.Request){
        return new UserDto(req.body.id, new Date(), req.body.name, req.body.email,
        req.body.phone, req.body.password, req.body.role);
    }
    getLoginDtoFromRequest(req: express.Request){
        return new LoginRequestDto(req.body.phone, req.body.password);
    }
    //#endregion
}

