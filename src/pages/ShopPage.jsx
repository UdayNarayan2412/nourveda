import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';
import { useProducts } from '../hooks/useProducts';
import '../styles/shop.css';
import { FadeUp } from '../components/Animations';

const PRODUCTS_PER_PAGE = 8;

const ShopPage = () => {
  const { products, filters, updateFilters } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination values
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="shop-page container">
      <FadeUp>
        <div className="shop-header">
          <h1>Our Premium Collection</h1>
          <p>Discover our complete range of premium dry fruits and spices</p>
        </div>
      </FadeUp>

      <ProductFilters filters={filters} onFiltersChange={updateFilters} />

      {products.length === 0 ? (
         <div className="text-center py-12">
           <p>No products found matching your criteria.</p>
         </div>
      ) : (
        <div className="products-grid">
          {currentProducts.map((product) => (
            <FadeUp key={product.id}>
              <ProductCard product={product} />
            </FadeUp>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={currentPage === pageNum ? 'active' : ''}
            >
              {pageNum}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
