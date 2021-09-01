import { IBaseDto } from "../contracts/IBaseDto";


export class CommentDto implements IBaseDto{
    constructor(id:number, createAt: Date, userId: number, restaurantId: string, Comment: string){
        this.Id = id;
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
        this.UserId = userId;
        this.restaurantId = restaurantId;
        this.Comment = Comment;
    }

    Id: number;
    CreatedAt: Date;
    UpdatedAt: Date | null;
    UserId: number;
    restaurantId: string;
    Comment: string;
}