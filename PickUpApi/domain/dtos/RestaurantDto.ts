import { IBaseDto } from "../contracts/IBaseDto";

export class RestaurantDto implements IBaseDto {
  constructor(
    id: number,
    createAt: Date,
    name: string,
    thumbnail_url: string,
    description: string,
    address: string,
    email: string,
    phone: string,
    city: string,
    prov_state: string,
    postal: string,
    open_time: string,
    close_time: string
  ) {
    this.Id = id;
    this.CreatedAt = createAt;
    this.UpdatedAt = null;
    this.Name = name;
    this.Email = email;
    this.Thumbnail_url = thumbnail_url;
    this.Phone = phone;
    this.Description = description;
    this.Address = address;
    this.City = city;
    this.Prov_state = prov_state;
    this.Postal = postal;
    this.Open_time = open_time;
    this.Close_time = close_time;
  }

  Id: number;
  CreatedAt: Date;
  UpdatedAt: Date | null;
  Name: string;
  Thumbnail_url: string;
  Description: string;
  Address: string;
  Email: string;
  Phone: string;
  City: string;
  Prov_state: string;
  Postal: string;
  Open_time: string;
  Close_time: string;
}
