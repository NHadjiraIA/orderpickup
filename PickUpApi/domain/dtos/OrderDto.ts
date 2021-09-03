import { IBaseDto } from "../contracts/IBaseDto";
import { OrderDetailDto } from "./OrderDetailDto";


export class OrderDto implements IBaseDto{
    constructor(id:number, createdAt: Date, userId: number, restaurantId: number, done: boolean){
        this.Id = id;
        this.CreatedAt = createdAt;
        this.UpdatedAt = null;
        this.UserId = userId;
        this.RestaurantId = restaurantId;
        this.Done = done;
        this.Details = [];
    }

     Id: number;
     UserId: number;
     RestaurantId: number;
     Done: boolean;
     CreatedAt: Date;
     UpdatedAt: Date | null;
     Details!: OrderDetailDto[];
}