import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './CartPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeQuantity, deleteFromCart } from '../../Data/CartMenu/CartMenuHandles';
import { useNavigate } from 'react-router-dom';

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
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartItems();
  }, []);

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
                    <svg width="30px" onClick={() => handleQuantityChange(index, -1)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" /></svg>
                    <span>{item.quantity}</span>
                    <svg width="30px" onClick={() => handleQuantityChange(index, 1)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                  </div>
                  <svg width="30px" onClick={() => handleDelete(item.foodMenu.id)} className='cartOptions' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - Payment Form */}
        <div className='paymentFormSection'>
          <h4>Payment Details</h4>
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

          {/* Summary Box */}
          <div className="summaryBox">
            <p><strong>Quantity:</strong> {totalQuantity}</p>
            <p><strong>Discount:</strong> ₹{discount.toFixed(2)}</p>
            <p><strong>Delivery Charges:</strong> ₹{delivery}</p>
            <hr />
            <p><strong>Total Cost:</strong> ₹{total.toFixed(2)}</p>
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
