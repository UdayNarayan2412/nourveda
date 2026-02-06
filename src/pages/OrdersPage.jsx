import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';
import '../styles/orders.css';

const MOCK_ORDERS = [
  { id: '#ELRCNY75', date: '2/1/2026', status: 'Pending', amount: '110.00' },
  { id: '#KQMFUCGN', date: '2/1/2026', status: 'Pending', amount: '110.00' },
  { id: '#PGA8FSDO', date: '2/1/2026', status: 'Pending', amount: '110.00' },
  { id: '#STSV68XJ', date: '2/1/2026', status: 'Pending', amount: '110.00' },
  { id: '#RWOYWG74', date: '2/1/2026', status: 'Pending', amount: '110.00' },
  { id: '#V1K2YFGB', date: '2/1/2026', status: 'Pending', amount: '110.00' },
  { id: '#HSHFDSDY', date: '2/1/2026', status: 'Pending', amount: '110.00' }
];

const OrdersPage = () => {
  const [filter, setFilter] = useState('All Orders');
  const [expandedOrder, setExpandedOrder] = useState(null);

  const toggleOrder = (id) => {
    if (expandedOrder === id) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(id);
    }
  };

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
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <div className="orders-list">
          {MOCK_ORDERS.map((order) => (
            <div key={order.id} className="order-item">
              <div className="order-summary" onClick={() => toggleOrder(order.id)}>
                <div className="order-icon">
                  <Clock size={20} color="#f59e0b" />
                </div>
                <div className="order-details">
                  <span className="order-id">Order {order.id}</span>
                  <span className="order-date">{order.date}</span>
                </div>
                <div className="order-status">
                  <span className={`status-badge ${order.status.toLowerCase()}`}>
                    {order.status === 'Pending' && <Clock size={14} className="badge-icon" />}
                    {order.status}
                  </span>
                </div>
                <div className="order-amount">
                  ₹{order.amount}
                </div>
                <div className="order-expand">
                  {expandedOrder === order.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </div>
              
              {expandedOrder === order.id && (
                <div className="order-content">
                  <p>Order details would go here...</p>
                  <p>Items: Premium Spices Pack</p>
                  <p>Payment Method: COD</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
