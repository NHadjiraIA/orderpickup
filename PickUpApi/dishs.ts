import express from "express";
import  {DishsRepository} from './Infrastructure/repositories/DishsRepository'

export class DishsApi{
    private _dishsRepository:any;
    constructor(){
        this._dishsRepository = new DishsRepository();
    }
    
    async getAll(req: express.Request, res: express.Response){
        let dishs = await this._dishsRepository.Get();
        return  res.status(200).json(dishs);
    };
    async getByRestaurantId(req: express.Request, res: express.Response){
        const idRestaurant  = req.params.id;
        let foundDishs = await this._dishsRepository.GetDishesByRestaurantId(idRestaurant);
        if(foundDishs){
            return res.status(200).json(foundDishs);
        }
        else{
            return res.status(404).send(`User with id: ${idRestaurant} was not found.`)
        }
    }
}

