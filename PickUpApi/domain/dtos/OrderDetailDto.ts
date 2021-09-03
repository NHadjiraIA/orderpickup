import { IBaseDto } from "../contracts/IBaseDto";


export class OrderDetailDto implements IBaseDto{
    constructor(id:number, createdAt: Date, dishId: number, orderId: number, quantity: number){
        this.Id = id;
        this.CreatedAt = createdAt;
        this.UpdatedAt = null;
        this.DishId = dishId;
        this.OrderId = orderId;
        this.Quantity = quantity;
    }

     Id: number;
     DishId: number;
     OrderId: number;
     Quantity: number;
     CreatedAt: Date;
     UpdatedAt: Date | null;
     Details!: OrderDetailDto[];
}