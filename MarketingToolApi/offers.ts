import express from "express";
import { OfferDto } from "./domain/dtos/OfferDto";
import { toEntity } from "./application/mappers/offerMapper";
import  {OffersRepository} from './Infrastructure/repositories/OffersRepository'

export class OffersApi{
    private _OffersRepository:any;
    constructor(){
        this._OffersRepository = new OffersRepository();
    }
    
    async getAll(req: express.Request, res: express.Response){
        let offers = await this._OffersRepository.Get();
        return  res.status(200).json(offers);
    };

    async getById(req: express.Request, res: express.Response){
        let offerId = Number(req.query.id);
        let offer = await this._OffersRepository.GetOfferById(offerId);
        return  res.status(200).json(offer);
    };

    async getByLocation(req: express.Request, res: express.Response){
        let longitude = Number(req.query.longitude);
        //let latitude = Number(req.query.latitude);
        let offers = await this._OffersRepository.GetOffersByLocation(longitude );
        return  res.status(200).json(offers);
    };
    async delete(req: express.Request, res: express.Response){
        let offerId = Number(req.query.Id);
        let isDeleted = await this._OffersRepository.Delete(offerId);
        if (isDeleted) {
            return  res.status(200).json(isDeleted);
        } else {
            return  res.status(400).json(isDeleted);
        }
        
    };

    async create(req: express.Request, res: express.Response){
        const OfferDto = this.getDtoFromRequest(req);
        
        let createOffer = await this._OffersRepository.Create(toEntity(OfferDto))
        if(createOffer){
            console.log('offer created', createOffer);
            return res.status(201).json(createOffer);
        }else{
            return res.status(400).send("The offer could not be created. Please check the provided data.")
        }
    }

    getDtoFromRequest(req: express.Request){
        return new OfferDto(req.body.id, req.body.image, 
        req.body.caption,req.body.description, req.body.endDate, req.body.startedDate, new Date());
    }
}

