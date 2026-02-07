import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import '../styles/checkout.css';

const CheckoutForm = () => {
  const { state, dispatch } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    phone: ''
  });

  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      alert('Please login to place an order');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create order object
      const order = {
        userId: currentUser.uid,
        userEmail: currentUser.email,
        items: state.items,
        total: total,
        date: new Date().toISOString(),
        shippingDetails: formData,
        status: 'Processing',
        createdAt: new Date()
      };

      // Save to Firestore
      await addDoc(collection(db, 'orders'), order);

      // Clear cart
      dispatch({ type: 'CLEAR_CART' });
      
      // Redirect
      navigate('/orders');
    } catch (error) {
      console.error("Error placing order: ", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (state.items.length === 0) {
    return <div className="empty-cart-msg">Your cart is empty. Add items to proceed.</div>;
  }

  return (
    <div className="checkout-container">
       <form onSubmit={handleSubmit} className="checkout-form">
         <h2>Shipping Details</h2>
         <div className="form-group">
           <label>Full Name</label>
           <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} />
         </div>
         <div className="form-group">
           <label>Address</label>
           <input type="text" name="address" required value={formData.address} onChange={handleChange} />
         </div>
         <div className="form-row">
           <div className="form-group">
             <label>City</label>
             <input type="text" name="city" required value={formData.city} onChange={handleChange} />
           </div>
           <div className="form-group">
             <label>Zip Code</label>
             <input type="text" name="zipCode" required value={formData.zipCode} onChange={handleChange} />
           </div>
         </div>
         <div className="form-group">
           <label>Phone Number</label>
           <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
         </div>

         <div className="payment-placeholder">
            <h3>Payment Method</h3>
            <p>Cash on Delivery (Default)</p>
         </div>

         <button type="submit" className="place-order-btn" disabled={isSubmitting}>
           {isSubmitting ? 'Placing Order...' : `Place Order - ₹${total.toFixed(2)}`}
         </button>
       </form>

       <div className="checkout-summary">
         <h2>Order Summary</h2>
         <div className="summary-items">
           {state.items.map(item => (
             <div key={item.id} className="summary-item">
               <span>{item.name} x {item.quantity}</span>
               <span>₹{(item.price * item.quantity).toFixed(2)}</span>
             </div>
           ))}
         </div>
         <div className="summary-total">
           <strong>Total:</strong>
           <strong>₹{total.toFixed(2)}</strong>
         </div>
       </div>
    </div>
  );
};

export default CheckoutForm;
