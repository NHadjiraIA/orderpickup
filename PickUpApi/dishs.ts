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

}

