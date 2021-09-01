import { BaseRepository } from "../contracts/BaseRepository"
import  {RatingEntity} from "../db/models/rating"

export class RatingsRepository{
    constructor(){
        
    }

    public async Get(): Promise<RatingEntity[]>{
        let ratings  = await RatingEntity.findAll();
        return ratings;
    }
 
}
