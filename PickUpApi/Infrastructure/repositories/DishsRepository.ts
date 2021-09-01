import { BaseRepository } from "../contracts/BaseRepository"
import  {DishEntity} from "../db/models/dish"

export class DishsRepository{
    constructor(){
        
    }

    public async Get(): Promise<DishEntity[]>{
        let dishs  = await DishEntity.findAll();
        return dishs;
    }
 
}
