import React from 'react' 
import Payment from '../../components/payement'
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
  } from "@stripe/react-stripe-js";
  import { loadStripe } from "@stripe/stripe-js";

export const payement = () => {
    const stripe = loadStripe(
        "pk_test_***************"
      );
    return (
        
           
       
        <div>
            
        
         <Elements stripe={stripe}>
         <Payment />
       </Elements>
       </div>
    )
}