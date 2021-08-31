import { BaseRepository } from "../contracts/BaseRepository"
import  RestaurantEntity  from "../db/models/restaurant"

export class RestaurantRepository<UserEntity> extends BaseRepository<UserEntity>{
    constructor(){
        super(RestaurantEntity);
    }
}
