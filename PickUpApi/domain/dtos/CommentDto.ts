import { IBaseDto } from "../contracts/IBaseDto";


export class CommentDto implements IBaseDto{
    constructor(id:number, createAt: Date, userId: number, restaurantId: string, Comment: string){
        this.Id = id;
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
        this.UserId = userId;
        this.RestaurantId = restaurantId;
        this.Comment = Comment;
    }

    Id: number;
    CreatedAt: Date;
    UpdatedAt: Date | null;
    UserId: number;
    RestaurantId: string;
    Comment: string;
}