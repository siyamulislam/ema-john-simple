import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import './Style.css'

const useOptions = () => {
  const fontSize = '16px'
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    [fontSize]
  );

  return options;
};

const SplitForm = ({ handelPayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log("[PaymentMethod]", payload);
    if (payload.error) { setSuccess(''); setError(payload.error.message); }
    if (payload.paymentMethod) { setError(''); setSuccess(payload.paymentMethod.id); handelPayment(payload.paymentMethod.id, payload.paymentMethod.card.brand) }
    console.log("[PaymentMethod]", payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card number ............................
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label> <br />
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label> <br />
      <label>
        CVC.......
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label> <br />
      {error ? <p className="text-danger"> <small>{error}</small> </p> : success ?
        <p className="text-success"> <small>Payment Completed! <span className="text-primary">{" TrxID: " + success}</span></small> </p> : ''}
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default SplitForm;
