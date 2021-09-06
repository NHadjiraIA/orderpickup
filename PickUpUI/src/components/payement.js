import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CardForm from "./payment/CardForm";
import FpxBankForm from "./payment/FpxBankForm";
import IbanForm from "./payment/IbanForm";
import IdealBankForm from "./payment/IdealBankForm";
import PaymentRequestForm from "./payment/PaymentRequestForm";
import SplitForm from "./payment/SplitForm";
import AfterpayClearpayMessage from "./payment/AfterpayClearpayMessage";

import './payment.css';
import ElementD from "./payment/ElementD";

const payments = [
  {
    path: "/card-element",
    label: "CardElement",
    component: CardForm
  },
  {
    path: "/split-card-elements",
    label: "Split Card Elements",
    component: SplitForm
  },
  {
    path: "/payment-request-button-element",
    label: "PaymentRequestButtonElement",
    component: PaymentRequestForm
  },
  {
    path: "/ideal-bank-element",
    label: "IdealBankElement",
    component: IdealBankForm
  },
  {
    path: "/iban-element",
    label: "IbanElement",
    component: IbanForm
  },
  {
    path: "/fpx-bank-element",
    label: "FpxBankElement",
    component: FpxBankForm
  },
  {
    path: "/afterpay-clearpay-message",
   label: "AfterpayClearpayMessageElement",
   component: AfterpayClearpayMessage
  }
];
export default function Payment(props) {
  const amount= props.amount;
  return (
      <Elements stripe={props.stripe}>
        <ElementD payments={payments} userId={props.userId} amount={amount}/>
      </Elements>
  );
};
