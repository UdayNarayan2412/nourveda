import React, { useState, useEffect } from 'react';
import { Clock, ChevronDown, ChevronUp, Package, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../styles/orders.css';

const OrdersPage = () => {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All Orders');
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    if (currentUser) {
      try {
        const savedOrders = JSON.parse(localStorage.getItem(`orders_${currentUser.uid}`)) || [];
        setOrders(savedOrders);
      } catch (error) {
        console.error("Failed to load orders:", error);
      }
    }
    setLoading(false);
  }, [currentUser]);

  const toggleOrder = (id) => {
    if (expandedOrder === id) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(id);
    }
  };

  if (!currentUser) {
    return (
      <div className="orders-page">
        <div className="orders-container">
           <div className="auth-warning">
             <AlertCircle size={48} />
             <h2>Please login to view your orders</h2>
           </div>
        </div>
      </div>
    );
  }

  const filteredOrders = filter === 'All Orders' 
    ? orders 
    : orders.filter(order => order.status === filter);

  return (
    <div className="orders-page">
      <div className="orders-container">
        <div className="orders-header">
          <h1>My Orders</h1>
          <p>View and track your orders</p>
        </div>

        <div className="orders-filter">
          <label>Filter by status:</label>
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
          >
            <option value="All Orders">All Orders</option>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {loading ? (
          <div className="loading-state">Loading orders...</div>
        ) : filteredOrders.length === 0 ? (
          <div className="empty-orders">
            <Package size={48} />
            <p>No orders found.</p>
          </div>
        ) : (
          <div className="orders-list">
            {filteredOrders.map((order) => (
              <div key={order.id} className="order-item">
                <div className="order-summary" onClick={() => toggleOrder(order.id)}>
                  <div className="order-icon">
                    <Clock size={20} color="#f59e0b" />
                  </div>
                  <div className="order-details">
                    <span className="order-id">Order #{order.id}</span>
                    <span className="order-date">{new Date(order.date).toLocaleDateString()}</span>
                  </div>
                  <div className="order-status">
                    <span className={`status-badge ${order.status.toLowerCase()}`}>
                      {order.status === 'Processing' && <Clock size={14} className="badge-icon" />}
                      {order.status}
                    </span>
                  </div>
                  <div className="order-amount">
                    ₹{order.total.toFixed(2)}
                  </div>
                  <div className="order-expand">
                    {expandedOrder === order.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>
                
                {expandedOrder === order.id && (
                  <div className="order-content">
                    <div className="order-shipping-info">
                      <h4>Shipping Details</h4>
                      <p>{order.shippingDetails.fullName}</p>
                      <p>{order.shippingDetails.address}, {order.shippingDetails.city} - {order.shippingDetails.zipCode}</p>
                      <p>Phone: {order.shippingDetails.phone}</p>
                    </div>
                    <div className="order-items-list">
                      <h4>Items</h4>
                      {order.items.map((item, index) => (
                        <div key={index} className="order-product-item">
                          <span>{item.name} x {item.quantity}</span>
                          <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="order-footer">
                       <p><strong>Total Paid: ₹{order.total.toFixed(2)}</strong></p>
                       <p>Payment Method: Cash on Delivery</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
