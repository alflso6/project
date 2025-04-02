// src/components/ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

function ProductList() {
  return (
    <section>
      <h2>제품 목록</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;
