import React from 'react';

export default function ProductList({ products }) {
  return (
    <div className='product-list'>
      {products.map((product) => (
        <div key={product.id} className='product-item'>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          {/* More product details */}
        </div>
      ))}
    </div>
  );
}