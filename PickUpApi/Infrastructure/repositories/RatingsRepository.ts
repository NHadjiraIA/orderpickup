import { BaseRepository } from "../contracts/BaseRepository"
import  {RatingEntity} from "../db/models/rating"
import {Model} from 'sequelize-typescript';
import { RestaurantRatingsResponseDto } from "../../domain/dtos/RestaurantRatingsResponseDto";

export class RatingsRepository{
    constructor(){
        
    }

    public async Get(): Promise<RatingEntity[]>{
        let ratings  = await RatingEntity.findAll();
        return ratings;
    }

    public async GetByRestaurantId(restaurantId: number): Promise<RestaurantRatingsResponseDto>{
        let ratings  = await RatingEntity.findAll({ 
            where: {restaurantId: `${restaurantId}`}
         });
         //Calculate the average of ratings of the restaurant
         let sumRatings = ratings.map(r => r.rating, 0).reduce((a, b) => a + b, 0);
         let avgRatings = sumRatings / ratings.length
         let best = ratings.map(r => r.rating, 0).reduce((a, b) => a < b? b: a, 0);
         let worst = ratings.map(r => r.rating).reduce((a, b) => a < b? a: b);
         // Create the response DTO
         let ratingResponse = new RestaurantRatingsResponseDto(ratings, avgRatings, best, worst);
        return ratingResponse;
    }
    
    public async Create(model: Model<RatingEntity>){
        return model.save();
    }
}
