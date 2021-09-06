import React from 'react' 
import Payment from '../../components/payement'
import {
    Elements
  } from "@stripe/react-stripe-js";
  import { loadStripe } from "@stripe/stripe-js";
  import { useLocation } from "react-router-dom";
  import { STIPE_PUBLIC_KEY } from '../../config/CONSTANTS';

const PaymentPage = (props) => {
  const location = useLocation();
  const userId = location?.state?.userId;
  const amount = location?.state?.total;
  const stripePromise = loadStripe(STIPE_PUBLIC_KEY);

  return (
    <div>
      <Elements stripe={stripePromise}>
        <Payment userId={userId} stripe={stripePromise} amount={amount}/>
      </Elements>
    </div>
  );
};

export default PaymentPage;
