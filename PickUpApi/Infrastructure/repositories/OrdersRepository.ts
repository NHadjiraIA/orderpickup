import { BaseRepository } from "../contracts/BaseRepository"
import  {OrderEntity} from "../db/models/order"

export class OrdersRepository{
    constructor(){
        
    }

    public async Get(): Promise<OrderEntity[]>{
        let orders  = await OrderEntity.findAll({include: 'orderdetails'});
        return orders;
    }
 
}
