import { OrderDetailDto } from '../../domain/dtos/OrderDetailDto'
import {OrderDetailEntity} from '../../Infrastructure/db/models/orderdetail'


export const toEntity = (orderDetailDto: OrderDetailDto, orderId: number): OrderDetailEntity => {
    let orderEntity = new OrderDetailEntity();
    orderEntity.id = orderDetailDto.Id;
    orderEntity.dishId = orderDetailDto.DishId;
    orderEntity.orderId = orderId;
    orderEntity.quantity = orderDetailDto.Quantity;
    orderEntity.createdAt = orderDetailDto.CreatedAt;
    orderEntity.updatedAt = orderDetailDto.UpdatedAt;
    return orderEntity;
}