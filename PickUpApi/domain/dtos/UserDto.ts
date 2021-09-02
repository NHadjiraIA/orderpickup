import { IBaseDto } from "../contracts/IBaseDto";


export class UserDto implements IBaseDto{
    constructor(id:number, createAt: Date, userName: string, email: string, phone: number, password:string , role: boolean){
        this.Id = id;
        this.CreatedAt = createAt;
        this.UpdatedAt = null;
        this.Name = userName;
        this.Email = email;
        this.Phone = phone;
        this.Password = password;
        this.Role = role;
    }

    Id: number;
    CreatedAt: Date;
    UpdatedAt: Date | null;
    Name: string;
    Email: string;
    Phone: number;
    Password: string;
    Role: boolean;
}