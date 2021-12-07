import { OfferEntity } from "./offer";

 

export class BranchEntity {
  public id!: number;
  public name!: string;
  public address!: string;
  public longitude!: number;
  public latitude!:number;
  public createdAt!: Date;
  public updatedAt!: Date | null;
  public offers?: Array<OfferEntity>;
}