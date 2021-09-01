import express from "express";
import  {RatingsRepository} from './Infrastructure/repositories/RatingsRepository'

export class RatingsApi{
    private _ratingRepository:any;
    constructor(){
        this._ratingRepository = new RatingsRepository();
    }
    
    async getAll(req: express.Request, res: express.Response){
        let ratings = await this._ratingRepository.Get();
        return  res.status(200).json(ratings);
    };

}

