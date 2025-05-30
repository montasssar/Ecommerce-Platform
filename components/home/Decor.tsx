'use client';
import React from 'react';
import ProductGrid from './ProductGrid';

const decor = [
  { name: 'Magic Bed', price: '$549', image: '/images/magicbed.jpg' },
  { name: 'Gamer Room', price: '$899', image: '/images/decorcategory.jpg' },
];

export default function Decor() {
  return <ProductGrid products={decor} />;
}
