// src/components/ProductDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <section>
        <h2 className="center-title">제품 정보를 찾을 수 없습니다.</h2>
        <Link to="/products">제품 목록으로 돌아가기</Link>
      </section>
    );
  }

  return (
    <section>
      <h2 className="center-title">{product.name}</h2>
      <p>가격: ${product.price}</p>
      <p>{product.description}</p>
      <Link to="/products">다른 제품 보기</Link>
    </section>
  );
}

export default ProductDetails;
