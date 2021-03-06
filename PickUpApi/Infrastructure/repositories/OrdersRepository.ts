import  {OrderEntity} from "../db/models/order"
import {Model} from 'sequelize-typescript';

export class OrdersRepository{
    constructor(){
        
    }

    public async Get(): Promise<OrderEntity[]>{
        let orders  = await OrderEntity.findAll({
            include: {all: true, nested: true}
        });
        return orders;
    }

    public async GetById(id: number): Promise<OrderEntity | null>{
        return OrderEntity.findByPk(id);
         
    }

    public async update(order: OrderEntity): Promise<OrderEntity>{
        return order.save();
    }

    public async getByFilter(filter: any): Promise<OrderEntity[]>{
        let orders  = await OrderEntity.findAll({
            where: filter,
            include: {all:true, nested: true}
        });
        return orders;
    }

    public async GetByUserId(userId): Promise<OrderEntity[]>{
        let orders  = await OrderEntity.findAll({
            where: {userId: `${userId}`},
            include: {all:true, nested: true}
        });
        return orders;
    }
    
    public async GetByRestaurantId(restaurantId): Promise<OrderEntity[]>{
        let orders  = await OrderEntity.findAll({
            where: {restaurantId: `${restaurantId}`},
            include: {all:true, nested: true}
        });
        return orders;
    }
    public async getDoneOrdersByUserId(userId,done): Promise<OrderEntity[]>{
        let orders  = await OrderEntity.findAll({
            where: {userId: `${userId}`, done: done},
            include: {all:true, nested: true}
        });
        return orders;
    }

    public async getNotCompletedOrdersByRestaurantId(restaurantId,completed): Promise<OrderEntity[]>{
        let orders  = await OrderEntity.findAll({
            where: {restaurantId: `${restaurantId}`, completed: completed},
            include: {all:true, nested: true}
        });
        return orders;
    }

    public async Create(model: Model<OrderEntity>){
        return model.save();
    }
 
}
