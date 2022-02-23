import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitForm from './SplitForm';
const stripePromise = loadStripe('pk_test_51KVxnBLtsgN3GhFSOlPoIZWE48dXYpXQvmtxIx0R9iPjAN0MEBQ6frt6HJ6tHVfhOD6GwlOF0pQoDWR2uyGPGvwI00ReT0cjnI');


const ProcessPayment = ({handelPayment}) => {
    const options = {
        // passing the client secret obtained from the server
        clientSecret: 'pi_1FpUmEKZaRsxp2y4c9OPoTjM_secret_tv9tsgAQbAlNRYqm8MAzmYPuE',
    };
    return (
        <Elements stripe={stripePromise} options={options}>
        <SplitForm handelPayment={handelPayment} ></SplitForm>
      </Elements>
    );
};

export default ProcessPayment;