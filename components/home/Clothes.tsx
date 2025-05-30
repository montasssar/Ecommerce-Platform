'use client';
import React from 'react';
import ProductGrid from './ProductGrid';

const clothes = [
  { name: 'Graphic Tee', price: '$39', image: '/images/tshirt.jpg' },
  { name: 'Comfort Hoodie', price: '$79', image: '/images/clothescategory.jpg' },
];

export default function Clothes() {
  return <ProductGrid products={clothes} />;
}
