import { BranchEntity } from "./models/branch";
import { OfferEntity } from "./models/offer";

export class Database{
    public branches!:Array<BranchEntity>;
    public offers!:Array<OfferEntity>;
}