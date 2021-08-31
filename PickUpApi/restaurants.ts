import express from "express";
import { RestaurantDto } from "./domain/dtos/RestaurantDto";
import {toEntity} from './application/mappers/restaurantMapper'
 import  {RestaurantRepository} from './Infrastructure/repositories/RestaurantRepository'
 
 
import { EmptyResultError } from "sequelize/types";

export class RestaurantApi{
    private _restaurantRepository:any;
    constructor(){
        this._restaurantRepository= new RestaurantRepository();
    }
    
    async getAll(req: express.Request, res: express.Response){
        let restaurantsList = await this._restaurantRepository.Get();
        res.status(200).json(restaurantsList);
    };

    async getById(req: express.Request, res: express.Response){
        const idRestaurant  = req.params.id;
        let foundRestaurant = await this._restaurantRepository.GetById(idRestaurant);
        if(foundRestaurant){
            return res.status(200).json(foundRestaurant);
        }
        else{
            return res.status(404).send(`Restaurant with id: ${idRestaurant} was not found.`)
        }
    }
    async create(req: express.Request, res: express.Response){
        console.log('this is the body');
        const restaurantDto = this.getDtoFromRequest(req);
        let createdRestaurant = await this._restaurantRepository.Create(toEntity(restaurantDto))
        if(createdRestaurant){
            res.status(201).json(createdRestaurant);
        }else{
            res.status(400).send("The restaurant could not be created. Please check the provided data.")
        }
        res.status(200).send('done');
    }

    // #region private methods
    // getDtoFromRequest(req: express.Request){
    //     return new RestaurantDto(req.body.id, new Date(), req.body.name);
    // }
    // #endregion
}

