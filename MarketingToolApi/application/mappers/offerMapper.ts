import { OfferDto } from "../../domain/dtos/OfferDto"
import {OfferEntity} from "../../Infrastructure/db/models/offer"


export const toEntity = (OfferDto: OfferDto): OfferEntity => {
    let offerEntity = new OfferEntity();
    offerEntity.id = OfferDto.Id;
    offerEntity.image = OfferDto.image;
    offerEntity.caption = OfferDto.caption;
    //offerEntity.endDate = OfferDto.endDate;
    offerEntity.description = OfferDto.description;
   // offerEntity.startedDate = OfferDto.startedDate;
    return offerEntity;
}