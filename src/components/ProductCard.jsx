import React from 'react';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = (e) => {
    e.preventDefault(); // Prevent any parent link clicks if applicable
    e.stopPropagation();
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">₹{product.price}</span>
          <button onClick={addToCart} className="add-to-cart-btn" aria-label={`Add ${product.name} to cart`}>
            <Plus size={18} /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
