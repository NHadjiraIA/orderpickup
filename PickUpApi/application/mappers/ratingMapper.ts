
import {RatingEntity} from "../../Infrastructure/db/models/rating"
import { RatingDto } from "../../domain/dtos/RatingDto";

export const toEntity = (RatingDto: RatingDto): RatingEntity => {
    let ratingEntity = new RatingEntity();
    ratingEntity.id = RatingDto.Id;
    ratingEntity.restaurantId = RatingDto.RestaurantId;
    ratingEntity.userId = RatingDto.UserId;
    ratingEntity.rating = RatingDto.Rating;
    ratingEntity.createdAt = RatingDto.CreatedAt;
    ratingEntity.updatedAt = RatingDto.UpdatedAt;
    return ratingEntity;
}
 