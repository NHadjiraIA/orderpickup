import  {CommentEntity} from "../db/models/comment"
import {Model} from 'sequelize-typescript';

export class CommentsRepository{
    constructor(){
        
    }

    public async Get(): Promise<CommentEntity[]>{
        let comments  = await CommentEntity.findAll();
        return comments;
    }

    public async GetByRestaurantId(restaurantId: number): Promise<CommentEntity[]>{
        let comments  = await CommentEntity.findAll({ 
            where: {restaurantId: `${restaurantId}`},
            include: 'commenter'
         });
        return comments;
    }

    public async Create(model: Model<CommentEntity>){
        return model.save();
    }
 
}
