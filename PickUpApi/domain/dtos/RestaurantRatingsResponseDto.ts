import { RatingEntity } from "../../Infrastructure/db/models/rating";
import { IBaseDto } from "../contracts/IBaseDto";
import { RatingStatsDto } from "./RatingStatsDto";


export class RestaurantRatingsResponseDto{
    constructor(ratings:RatingEntity[], average: number, best: number, worst: number){
        this.Ratings = ratings;
        this.Stats = new RatingStatsDto(average, best, worst);
    }

    Ratings: RatingEntity[];
    Stats: RatingStatsDto;
}