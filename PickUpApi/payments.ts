import express from "express";
const stripe = require("stripe")("sk_test_51JSifWJSoqVYwO4CvtKSwmXwkKklRPmY7M7u5XJaBINRT5lTfiHHf3c7778mgNr9ilhPLAKRB1SlkqCm2xScD5OL00F2v9VmqB");



export class PaymentApi{
    private _restaurantRepository:any;
    constructor(){
    }
 
    async createPayment(req: express.Request, res: express.Response){
        
        const { items } = req.body;
        console.log(req.body)
        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
          amount: this.calculateOrderAmount(items),
          currency: "usd"
        });
      
        return res.send({
          clientSecret: paymentIntent.client_secret
        });
    }
    // #region payment private methods
    calculateOrderAmount(items) {
        // Replace this constant with a calculation of the order's amount
        // Calculate the order total on the server to prevent
        // people from directly manipulating the amount on the client
        return 1222;
      };
    //#endregion
}

