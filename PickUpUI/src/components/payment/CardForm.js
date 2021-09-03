import React, { useMemo } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { ORDERS } from "../../navigation/CONSTANTS";
import { useHistory, useLocation } from "react-router-dom";
// import useResponsiveFontSize from "../useResponsiveFontSize";
import axios from "axios";
const useOptions = () => {
  // const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          // fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    })
    // [fontSize]
  );

  return options;
};

const CardForm = () => {
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const location = useLocation();

  const totalForPayment = location?.state?.total;
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    console.log("[PaymentMethod]", payload);
    let json_payload = {
      items: [
        {
          id: "xl-tshirt",
          total: totalForPayment,
        },
      ],
    };
    console.log("in payement card ", json_payload);
    axios
      .post("http://localhost:3002/api/v1/payments", json_payload.total)
      .then((data) => {
        stripe
          .confirmCardPayment(data.data.clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          })
          .then(function (result) {
            if (result.error) {
              // Show error to your customer
              //showError(result.error.message);
              alert(result.error);
            } else {
              // The payment succeeded!
              //orderComplete(result.paymentIntent.id);
              alert(`successful payment `);
              //done

              history.push({
                pathname: ORDERS,
              });
            }
          });
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card details
        <CardElement
          options={options}
          onReady={() => {
            console.log("CardElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardElement [blur]");
          }}
          onFocus={() => {
            console.log("CardElement [focus]");
          }}
        />
      </label>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CardForm;
