import { BaseRepository } from "../contracts/BaseRepository"
import  UserEntity  from "../db/models/user"

export class UserRepository<UserEntity> extends BaseRepository<UserEntity>{
    constructor(){
        super(UserEntity);
    }
}
