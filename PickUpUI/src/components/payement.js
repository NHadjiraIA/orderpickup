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

const stripePromise = loadStripe("pk_test_51JSifWJSoqVYwO4CuQy0pHIspSXCcL7gbLjBw9UPL9kUAMUzqt21gTdZAZOLtj5s5etLP4iImTV89X0AKvKeUYgI003NwwzsAt");

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
export default function Payment() {
 
  
  return (
      <Elements stripe={stripePromise}>
        <ElementD payments={payments} />
      </Elements>
  );
};
