import React from 'react';
import './InfiniteScroller.css';

const InfiniteScroller = ({ brands }) => {
  if (!brands || brands.length === 0) return null;

  // Dupliquer les marques plusieurs fois pour un vrai effet infini
  const duplicatedBrands = [
    ...brands,
    ...brands,
    ...brands,
    ...brands
  ];

  return (
    <div className="scroller-container">
      <div className="scroller-inner">
        {duplicatedBrands.map((brand, index) => (
          <div 
            key={`${brand.id}-${index}`} 
            className="scroller-item"
          >
            <img 
              src={brand.logo} 
              alt={brand.name} 
              className="brand-logo" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroller;