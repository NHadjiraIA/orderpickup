import { BaseRepository } from "../contracts/BaseRepository"
import  {DishEntity} from "../db/models/dish"

export class DishsRepository{
    constructor(){
        
    }

    public async Get(): Promise<DishEntity[]>{
        let dishs  = await DishEntity.findAll();
        return dishs;
    }
    public async GetDishesByRestaurantId(restaurantId): Promise<DishEntity[]>{
        let dishes  = await DishEntity.findAll({
            where: {restaurantId: `${restaurantId}`}
        });
        return dishes;
    }
}
