import {Model} from 'sequelize-typescript';
import { OrderDetailEntity } from "../db/models/orderdetail";

export class OrderDetailsRepository{
    constructor(){
        
    }

    public async Create(model: Model<OrderDetailEntity>){
        return model.save();
    }
}
