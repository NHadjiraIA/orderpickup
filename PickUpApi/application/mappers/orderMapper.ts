import { OrderDto } from '../../domain/dtos/OrderDto'
import {OrderEntity} from '../../Infrastructure/db/models/order'


export const toEntity = (orderDto: OrderDto): OrderEntity => {
    let orderEntity = new OrderEntity();
    orderEntity.id = orderDto.Id;
    orderEntity.userId = orderDto.UserId;
    orderEntity.restaurantId = orderDto.RestaurantId;
    orderEntity.done = orderDto.Done;
    orderEntity.createdAt = orderDto.CreatedAt;
    orderEntity.updatedAt = orderDto.UpdatedAt;
    return orderEntity;
}