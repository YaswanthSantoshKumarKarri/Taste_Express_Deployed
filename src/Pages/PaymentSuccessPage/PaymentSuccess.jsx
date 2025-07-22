import React from 'react';
import './PaymentSuccess.css';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {

  return (
    <div className="paymentSuccessPage">
      <div className="successBox">
        <h2>🎉 Payment Successful!</h2>
        <p>Thank you for your purchase. Your order has been placed.</p>
        <Link to="/" className="homeBtn">Go to Home</Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
