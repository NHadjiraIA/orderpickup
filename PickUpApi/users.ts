import express from "express";
import { UserDto } from "./domain/dtos/UserDto";
import  {UserRepository} from './Infrastructure/repositories/UserRepository'
import {toEntity} from './application/mappers/userMapper'
import { EmptyResultError } from "sequelize/types";

export class UserApi{
    private _userRepository:any;
    constructor(){
        this._userRepository = new UserRepository();
    }
    
    async getAll(req: express.Request, res: express.Response){
        let usersList = await this._userRepository.Get();
        res.status(200).json(usersList);
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
    async create(req: express.Request, res: express.Response){
        console.log('this is the body');
        const userDto = this.getDtoFromRequest(req);
        let createdUser = await this._userRepository.Create(toEntity(userDto))
        if(createdUser){
            res.status(201).json(createdUser);
        }else{
            res.status(400).send("The user could not be created. Please check the provided data.")
        }
        res.status(200).send('done');
    }

    //#region private methods
    getDtoFromRequest(req: express.Request){
        return new UserDto(req.body.id, new Date(), req.body.name, req.body.email,
        req.body.phone, req.body.password, req.body.role);
    }
    //#endregion
}

