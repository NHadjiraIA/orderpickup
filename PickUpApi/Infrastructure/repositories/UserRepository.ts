import { BaseRepository } from "../contracts/BaseRepository"
import  {UserEntity as Entity, UserEntity}  from "../db/models/user"

export class UserRepository<UserEntity> extends BaseRepository<UserEntity>{
    constructor(){
        super(Entity);
    }
    async GetByPhone(phoneNumber: string): Promise<Entity | null>{
       return  Entity.findOne({
            where: {phone: `${phoneNumber}`}
        })
    }
    public async GetuserById(userId): Promise<UserEntity[]>{
        let dishes  = await UserEntity.findAll({
            where: {userId: `${userId}`}
        });
        return dishes;
    }
}
