import { BaseRepository } from "../contracts/BaseRepository"
import  {OrderEntity} from "../db/models/order"

export class OrdersRepository{
    constructor(){
        
    }

    public async Get(): Promise<OrderEntity[]>{
        let orders  = await OrderEntity.findAll({
            include: {all: true, nested: true}
        });
        return orders;
    }

    public async GetByUserId(userId): Promise<OrderEntity[]>{
        let orders  = await OrderEntity.findAll({
            where: {userId: `${userId}`},
            include: {all:true, nested: true}
        });
        return orders;
    }
 
}
