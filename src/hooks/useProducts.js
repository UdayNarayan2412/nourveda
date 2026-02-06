import { useState, useMemo } from 'react';

const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Premium Kashmiri Saffron',
    price: 599,
    category: 'Spices',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop',
    description: 'Authentic Kashmiri Mongra Saffron, known for its deep red color and potent aroma.',
    rating: 4.8
  },
  {
    id: '2',
    name: 'California Almonds',
    price: 899,
    category: 'Dry Fruits',
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=2070&auto=format&fit=crop',
    description: 'Premium quality California almonds, rich in protein and healthy fats.',
    rating: 4.7
  },
  {
    id: '3',
    name: 'Organic Turmeric Powder',
    price: 249,
    category: 'Spices',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000&auto=format&fit=crop',
    description: 'High curcumin content turmeric powder sourced from organic farms.',
    rating: 4.5
  },
  {
    id: '4',
    name: 'Royal Cashews (W320)',
    price: 1100,
    category: 'Dry Fruits',
    image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=2070&auto=format&fit=crop',
    description: 'Whole white cashews, crunchy and sweet.',
    rating: 4.9
  },
  {
    id: '5',
    name: 'Green Cardamom',
    price: 450,
    category: 'Spices',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop', // Placeholder
    description: 'Aromatic green cardamom pods, perfect for tea and desserts.',
    rating: 4.6
  },
  {
    id: '6',
    name: 'Dried Figs (Anjeer)',
    price: 950,
    category: 'Dry Fruits',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop', // Placeholder
    description: 'Natural dried figs, no sugar added.',
    rating: 4.4
  }
];

export const useProducts = () => {
  const [filters, setFilters] = useState({
    category: 'All',
    priceRange: [0, 2000],
    searchQuery: ''
  });

  const products = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      const matchesCategory = filters.category === 'All' || product.category === filters.category;
      const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const matchesSearch = product.name.toLowerCase().includes(filters.searchQuery.toLowerCase());
      
      return matchesCategory && matchesPrice && matchesSearch;
    });
  }, [filters]);

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return {
    products,
    filters,
    updateFilters
  };
};
