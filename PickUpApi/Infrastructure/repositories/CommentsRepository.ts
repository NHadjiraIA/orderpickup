import { BaseRepository } from "../contracts/BaseRepository"
import  {CommentEntity} from "../db/models/comment"

export class CommentsRepository{
    constructor(){
        
    }

    public async Get(): Promise<CommentEntity[]>{
        let comments  = await CommentEntity.findAll();
        return comments;
    }
 
}
