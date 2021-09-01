import { BaseRepository } from "../contracts/BaseRepository"
import  {UserEntity as Entity}  from "../db/models/user"

export class UserRepository<UserEntity> extends BaseRepository<UserEntity>{
    constructor(){
        super(Entity);
    }
    async GetByPhone(phoneNumber: string): Promise<Entity | null>{
       return  Entity.findOne({
            where: {phone: `${phoneNumber}`}
        })
    }
 
}
