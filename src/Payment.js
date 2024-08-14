import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import './PaymentPage.css';

const stripePromise = loadStripe('your-publishable-key');

const PaymentPage = () => {
  return (
    <div className="payment-background">
      <video autoPlay muted loop className="background-video">
        <source src="/1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="payment-container">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default PaymentPage;
