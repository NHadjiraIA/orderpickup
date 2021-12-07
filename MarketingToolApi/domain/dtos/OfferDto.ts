
import { IBaseDto } from "../contracts/IBaseDto";


export class OfferDto implements IBaseDto{
    constructor(id:number, image: string, caption: string, endDate: Date, description: string, startedDate:Date, createAt: Date){
         this.Id = id;
         this.image = image;
         this.caption = caption;
         this.endDate = endDate;
         this.description = description;
         this.startedDate = startedDate;
         this.CreatedAt = createAt;
         this.UpdatedAt = null;
         

    }
    public CreatedAt: Date | null;
    public UpdatedAt: Date | null;
    public Id: number;
    public image: string;
    public caption!: string;
    public description!: string;
    public endDate!: Date ;
    public startedDate!: Date ;
}

 