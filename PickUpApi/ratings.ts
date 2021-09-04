import express from "express";
import  {RatingsRepository} from './Infrastructure/repositories/RatingsRepository'
import {toEntity} from './application/mappers/ratingMapper'
import { RatingDto} from "./domain/dtos/RatingDto"
export class RatingsApi{
    private _ratingRepository:any;
    constructor(){
        this._ratingRepository = new RatingsRepository();
    }
    
    async getAll(req: express.Request, res: express.Response){
        let ratings = await this._ratingRepository.Get();
        return  res.status(200).json(ratings);
    };

    async getByFilter(req: express.Request, res: express.Response, filter: any){
        let ratings = await this._ratingRepository.getByFilter(filter);
        return res.status(200).json(ratings)
    }

    async getByRestaurantId(req: express.Request, res: express.Response){
        let restaurantId = Number(req.query.restaurantId);
        let ratings = await this._ratingRepository.GetByRestaurantId(restaurantId);
        return  res.status(200).json(ratings);
    };
    async getByUserId(req: express.Request, res: express.Response){
        let userId = Number(req.query.userId);
        let ratings = await this._ratingRepository.GetByUserId(userId);
        return  res.status(200).json(ratings);
    };
    async create(req: express.Request, res: express.Response){
        const ratingDto = this.getDtoFromRequest(req);
        
        let createRating = await this._ratingRepository.Create(toEntity(ratingDto))
        if(createRating){
            console.log('comment created', createRating);
            return res.status(201).json(createRating);
        }else{
            return res.status(400).send("The rating could not be created. Please check the provided data.")
        }
    }

    getDtoFromRequest(req: express.Request){
        return new RatingDto(req.body.id, new Date(), req.body.userId, 
        req.body.restaurantId,req.body.rating);
    }
}

