import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './CartPage.css';
import { useSelector, useDispatch  } from 'react-redux';
import { changeQuantity, deleteFromCart } from '../../Data/CartMenu/CartMenuHandles';
import { useNavigate } from 'react-router-dom';
import _ from 'underscore';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardholderName: '',
    expirationDate: '',
    cvv: ''
  });

  const [loading, setLoading] = useState(false);

  const baseURL = 'http://localhost:8080/API/Cart/';
  const carts = useSelector(store => store.cart.items, _.isEqual);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartItems();
  }, [carts]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`${baseURL}getAllCartItems`);
      setCartItems(response.data);
    } catch (error) {
      setCartItems(carts);
      console.error('Failed to fetch cart items from server, using local data', error);
    }
  };

  const handleQuantityChange = (index, change) => {
    const updatedItems = cartItems.map((item, i) =>
      i === index
        ? { ...item, quantity: Math.max(0, item.quantity + change) }
        : item
    );
    setCartItems(updatedItems);
    const updatedItem = updatedItems[index];
    dispatch(changeQuantity({ id: updatedItem.foodMenu.id, quantity: updatedItem.quantity }));
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}delete/${id}`);
      const updatedItems = cartItems.filter(item => item.foodMenu.id !== id);
      setCartItems(updatedItems);
      dispatch(deleteFromCart(id));
    } catch (error) {
      dispatch(changeQuantity({ id: id, quantity: 0 }));
      console.error("Failed to delete cart item", error);
    }
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/PaymentSuccess');
    }, 3000);
  };

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.quantity * item.foodMenu.foodItemCost, 0);
  const discount = subtotal * 0.1;
  const delivery = subtotal > 0 ? 50 : 0;
  const total = subtotal - discount + delivery;

  return (
    <div className='cartMainSection'>
      <div className="basicHeadings">
        <h3>Ordered Cart</h3>
        <div className="seperatingLine"></div>
        <div className="group1">
          <p>You have {cartItems.length} items in your cart</p>
        </div>
      </div>

      <div className='contentSection'>
        {/* Left Section */}
        <div className='cardsSection'>
          {cartItems.map((item, index) => (
            <div key={item.cartId} className="FoodItemCard">
              <div className='innerFoodItemCard'>
                <div className="leftCard">
                  <img src={item.foodMenu.imgUrl} alt="Food" width="150px" height="150px" />
                </div>
                <div className="MiddleCard">
                  <strong>{item.foodMenu.dishName}</strong><br />
                  {item.foodMenu.cuisine}<br />
                  ₹{item.foodMenu.foodItemCost}
                </div>
                <div className="rightCard">
                  <div className="editingCart">
                    <svg width="30px" onClick={() => handleQuantityChange(index, -1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                    </svg>
                    <span>{item.quantity}</span>
                    <svg width="30px" onClick={() => handleQuantityChange(index, 1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                  <svg width="30px" onClick={() => handleDelete(item.foodMenu.id)} className='cartOptions' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - Payment Form */}
        <div className='paymentFormSection'>
          <h4>Payment Details</h4>
          {/* Summary Box */}
          <div className="summaryBox">
            <p><strong>Quantity:</strong> {totalQuantity}</p>
            <p><strong>Discount:</strong> ₹{discount.toFixed(2)}</p>
            <p><strong>Delivery Charges:</strong> ₹{delivery}</p>
            <hr />
            <p><strong><h3>Total Cost:  ₹{total.toFixed(2)} </h3></strong></p>
          </div>
          <div className="paymentMethodSelect">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="credit"
                checked={paymentMethod === 'credit'}
                onChange={() => handlePaymentMethodChange('credit')}
              />
              Credit Card
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="debit"
                checked={paymentMethod === 'debit'}
                onChange={() => handlePaymentMethodChange('debit')}
              />
              Debit Card
            </label>
          </div>

          

          <form onSubmit={handlePaymentSubmit}>
            <div className='paymentFormInput'>
              <label htmlFor="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" name="cardNumber" value={cardDetails.cardNumber} onChange={handlePaymentChange} required />
            </div>
            <div className='paymentFormInput'>
              <label htmlFor="cardholderName">Cardholder Name</label>
              <input type="text" id="cardholderName" name="cardholderName" value={cardDetails.cardholderName} onChange={handlePaymentChange} required />
            </div>
            <div className='paymentFormInput'>
              <label htmlFor="expirationDate">Expiration Date</label>
              <input type="text" id="expirationDate" name="expirationDate" value={cardDetails.expirationDate} onChange={handlePaymentChange} required />
            </div>
            <div className='paymentFormInput'>
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" value={cardDetails.cvv} onChange={handlePaymentChange} required />
            </div>
            <button type="submit" className="checkOut">Proceed to Payment</button>
          </form>
        </div>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="paymentLoadingOverlay">
          <div className="spinner"></div>
          <p>Processing Payment...</p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
