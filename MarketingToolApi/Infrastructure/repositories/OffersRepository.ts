 
import { BranchEntity } from "../db/models/branch";
import { OfferEntity } from "../db/models/offer";
import { DbContext } from "../db/seeders/dbcontext";

export class OffersRepository{
    constructor(){
        
    }

    public  Get(): OfferEntity[]{
        let offers  = DbContext.db().offers;
        return offers;
    }

    public  GetOfferById(offerId: number): OfferEntity[]{
        let offer  =  DbContext.db().offers.filter(offer => offer.id == offerId);
        return offer;
    }

    public  GetOffersByLocation(longitude: number): BranchEntity[]{
        let offers  =  DbContext.db().branches.filter(branch => branch.longitude == longitude );
        return offers;
    }
     
    
    public  Delete(offerId: number): Boolean{
        //let branchdeleted =  DbContext.db().branches.pop(branch);
        return true;
    }

    public Create(model: OfferEntity){
        return DbContext.db().offers.push(model);
    }
 
}
