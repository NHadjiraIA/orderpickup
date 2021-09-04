import { IBaseDto } from "../contracts/IBaseDto";


export class RatingDto implements IBaseDto{
    constructor(id:number, createAt: Date, userId: number, restaurantId: number, rating: number){
        this.Id = id;
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
        this.UserId = userId;
        this.RestaurantId = restaurantId;
        this.Rating = rating;
    }

    Id: number;
    CreatedAt: Date;
    UpdatedAt: Date | null;
    UserId: number;
    RestaurantId: number;
    Rating: number;
}