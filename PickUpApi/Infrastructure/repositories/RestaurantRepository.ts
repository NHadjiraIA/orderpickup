import { BaseRepository } from "../contracts/BaseRepository"
import { OrderEntity } from "../db/models/order";
import  {RestaurantEntity} from "../db/models/restaurant"

export class RestaurantRepository{
    constructor(){
        
    }

    public async Get(): Promise<RestaurantEntity[]>{
        let restaurants  = await RestaurantEntity.findAll({include: 'orders'});
        return restaurants;
    }

    public async GetById(id: number): Promise<RestaurantEntity | null>{
        let restaurant = await RestaurantEntity.findOne({
            where:{id: `${id}`},
            include: {all: true}
        })
        return restaurant;
    }
 
}
