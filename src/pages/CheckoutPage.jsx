import React from 'react';
import CheckoutForm from '../components/CheckoutForm';
import '../styles/checkout.css';

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <div className="page-header">
        <h1>Checkout</h1>
      </div>
      <CheckoutForm />
    </div>
  );
};

export default CheckoutPage;
