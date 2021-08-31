import { IBaseDto } from "../contracts/IBaseDto";


export class LoginRequestDto{
    constructor(phone: string, password:string){
        this.Phone = phone;
        this.Password = password;
    }

    Phone: string;
    Password: string;
}