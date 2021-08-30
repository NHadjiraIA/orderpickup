export class User {
    constructor(id:number, createAt: Date, userName: string, email: string, phone: string, password:string , role: boolean){
        this.Id = id;
        this.CreateAt = createAt;
        this.UserName = userName;
        this.Email = email;
        this.Phone = phone;
        this.Password = password;
        this.Role = role;
    }
    Id: number;
    CreateAt: Date;
    UserName: string;
    Email: string;
    Phone: string;
    Password: string;
    Role: boolean;
}