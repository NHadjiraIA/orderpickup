import express from "express";
import  {RestaurantRepository} from './Infrastructure/repositories/RestaurantRepository'

export class RestaurantApi{
    private _restaurantRepository:any;
    constructor(){
        this._restaurantRepository = new RestaurantRepository();
    }
    
    async getAll(req: express.Request, res: express.Response){
        let restaurants = await this._restaurantRepository.Get();
        return  res.status(200).json(restaurants);
    };

}

