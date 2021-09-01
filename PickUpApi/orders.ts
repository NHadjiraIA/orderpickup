import express from "express";
import  {OrdersRepository} from './Infrastructure/repositories/OrdersRepository'

export class OrdersApi{
    private _ordersRepository:any;
    constructor(){
        this._ordersRepository = new OrdersRepository();
    }
    
    async getAll(req: express.Request, res: express.Response){
        let orders = await this._ordersRepository.Get();
        return  res.status(200).json(orders);
    };

}

