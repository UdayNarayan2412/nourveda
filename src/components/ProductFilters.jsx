import React from 'react';

const ProductFilters = ({ filters, onFiltersChange }) => {
  return (
    <div className="product-filters">
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Search products..." 
          value={filters.searchQuery}
          onChange={(e) => onFiltersChange({ searchQuery: e.target.value })}
        />
      </div>
      <div className="category-filter">
        <select 
          value={filters.category} 
          onChange={(e) => onFiltersChange({ category: e.target.value })}
        >
          <option value="All">All Categories</option>
          <option value="Spices">Spices</option>
          <option value="Dry Fruits">Dry Fruits</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;
