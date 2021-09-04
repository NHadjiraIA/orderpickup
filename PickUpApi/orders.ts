import express from "express";
import  {OrdersRepository} from './Infrastructure/repositories/OrdersRepository'
import {toEntity as orderToEntity} from './application/mappers/orderMapper'
import {toEntity as orderDetailToEntity} from './application/mappers/orderDetailMapper'
import { OrderDetailsRepository } from "./Infrastructure/repositories/OrderDetailsRepository";
import { OrderDto } from "./domain/dtos/OrderDto";
import { OrderDetailDto } from "./domain/dtos/OrderDetailDto";
// import {accountSid, authToken, client, myNumber, twilioNumber} from "./twilio"


export class OrdersApi{
    accountSid = "AC566b1c96067e796bc9e1b0ba97f86632";
    authToken = "47cce62bb4cc315f6c049ef36dbd72fd";
    client = require("twilio")(this.accountSid, this.authToken);
    myNumber = "+3439616170";
    twilioNumber = "+16788548016";

    private _ordersRepository:any;
    private _orderDetailsRepository:any;
    constructor(){
        this._ordersRepository = new OrdersRepository();
        this._orderDetailsRepository = new OrderDetailsRepository();
    }
    
    async getAll(req: express.Request, res: express.Response){
        let orders = await this._ordersRepository.Get();
        return  res.status(200).json(orders);
    };

    async getByUserId(req: express.Request, res: express.Response){
        let userId = req.params.userId;
        let userOrders = await this._ordersRepository.GetByUserId(userId);
        return res.status(200).json(userOrders)
    }
    
    async getDoneOrdersByUserId(req: express.Request, res: express.Response){
        let userId = req.params.userId;
        let done = req.params.done;
        let userOrdersDone = await this._ordersRepository.getDoneOrdersByUserId(userId,done);
        return res.status(200).json(userOrdersDone)
    }

    async create(req: express.Request, res: express.Response){
        const orderDto = this.getDtoFromRequest(req);
        let createdOrder = await this._ordersRepository.Create(orderToEntity(orderDto))
        if(createdOrder){
            orderDto.Details.forEach(detail => {
                this._orderDetailsRepository.Create(orderDetailToEntity(detail, createdOrder.id));
            });
            this.client.messages
                .create({
                  body: "Your order has been received, we are working on it now!",
                  from: this.twilioNumber,
                  to: this.myNumber,
                })
                .then((message) => console.log("MESSAGE", message))
                .catch((error) => console.log(error))
                .done();
            return res.status(201).json(createdOrder);
        }else{
            return res.status(400).send("The order could not be created. Please check the provided data.")
        }
    }

    getDtoFromRequest(req: express.Request): OrderDto{
        let orderDto = new OrderDto(req.body.id, new Date(), req.body.userId, 
        req.body.restaurantId,req.body.done);
        req.body.details.forEach(detail => {
            orderDto.Details.push(this.getOrderDetailDto(detail));
        });
        return orderDto;
    }
    getOrderDetailDto(detail:any){
        return new OrderDetailDto(detail.id, new Date(), detail.dishId, detail.orderId, detail.quantity);
    }
}

