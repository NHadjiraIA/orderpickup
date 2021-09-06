import express from "express";
const stripe = require("stripe")("sk_test_51JSifWJSoqVYwO4CvtKSwmXwkKklRPmY7M7u5XJaBINRT5lTfiHHf3c7778mgNr9ilhPLAKRB1SlkqCm2xScD5OL00F2v9VmqB");



export class PaymentApi{
    private _restaurantRepository:any;
    constructor(){
    }
 
    async createPayment(req: express.Request, res: express.Response){
        const amount = Number(req.body.amount);
        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
          amount: this.calculateOrderAmount(amount),
          currency: "cad"
        });
      
        return res.send({
          clientSecret: paymentIntent.client_secret
        });
    }
    // #region payment private methods
    calculateOrderAmount(amount) {
        return amount * 100;
      };
    //#endregion
}

