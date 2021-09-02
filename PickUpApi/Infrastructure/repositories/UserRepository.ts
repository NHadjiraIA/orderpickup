import { BaseRepository } from "../contracts/BaseRepository"
import  {UserEntity as Entity}  from "../db/models/user"

export class UserRepository<UserEntity> extends BaseRepository<UserEntity>{
    constructor(){
        super(Entity);
    }
    async GetByPhone(phoneNumber: number): Promise<Entity | null>{
       return  Entity.findOne({
            where: {phone: `${phoneNumber}`}
        })
    }
    // async GetById(userId: number): Promise< Entity | null>{
    //     return Entity.findOne({
    //         where: {id: `${userId}`}
    //     })
        
    // }
}
