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
    
    public async GetById(id: number): Promise<RatingEntity | null>{
        return RatingEntity.findByPk(id);
    }
    public async update(rating: RatingEntity): Promise<RatingEntity>{
        return rating.save();
    }

    public async getByFilter(filter: any): Promise<RatingEntity[]>{
        let ratings  = await RatingEntity.findAll({
            where: filter,
            include: {all:true, nested: true}
        });
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
         let worst = ratings.map(r => r.rating, 0).reduce((a, b) => a < b? a: b, 0);
         // Create the response DTO
         let ratingResponse = new RestaurantRatingsResponseDto(ratings, avgRatings, best, worst);
        return ratingResponse;
    }
    public async GetByUserId(userId: number): Promise<RestaurantRatingsResponseDto>{
        let ratings  = await RatingEntity.findAll({ 
            where: {userId: `${userId}`}
         });
         //Calculate the average of ratings of the user 
         let sumRatings = ratings.map(r => r.rating, 0).reduce((a, b) => a + b, 0);
         let avgRatings = sumRatings / ratings.length
         let best = ratings.map(r => r.rating, 0).reduce((a, b) => a < b? b: a, 0);
         let worst = ratings.map(r => r.rating, 0).reduce((a, b) => a < b? a: b, 0);
         // Create the response DTO
         let ratingResponse = new RestaurantRatingsResponseDto(ratings, avgRatings, best, worst);
        return ratingResponse;
    }
    public async Create(model: Model<RatingEntity>){
        return model.save();
    }
}
