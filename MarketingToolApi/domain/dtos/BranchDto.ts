import { OfferEntity } from "../../Infrastructure/db/models/offer";
import { IBaseDto } from "../contracts/IBaseDto";


export class BranchDto implements IBaseDto{
    constructor(id:number, name: string, address: string, longitude: number, latitude: number, createAt: Date){
         this.Id = id;
         this.name = name;
         this.address = address;
         this.longitude = longitude;
         this.latitude = latitude;
         this.CreatedAt = createAt;
         this.UpdatedAt = null;

    }
    public CreatedAt: Date | null;
    public UpdatedAt: Date | null;
    public Id: number;
    public name: string;
    public address!: string;
    public longitude!: number;
    public latitude!: number;
    public offers?: Array<OfferEntity>
}