import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('Stripe payment error:', error);
    } else {
      const paymentResponse = await axios.post('http://localhost:8000/payment/', {
        user: 1, // Replace with the actual user ID
        payment_method: paymentMethod.id,
        amount: 1000, // Example amount
      });

      if (paymentResponse.status === 201) {
        console.log('Payment successful:', paymentResponse.data);
      } else {
        console.error('Payment failed:', paymentResponse.data);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
