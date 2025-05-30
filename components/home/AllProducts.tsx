'use client';
import React from 'react';
import ProductGrid from './ProductGrid';

const allProducts = [
  { name: 'Wireless Headphones', price: '$299', image: '/images/headphones.jpg' },
  { name: 'Graphic Tee', price: '$39', image: '/images/tshirt.jpg' },
  { name: 'Magic Bed', price: '$549', image: '/images/magicbed.jpg' },
  { name: 'iPhone', price: '$999', image: '/images/iphone.jpg' },
];

export default function AllProducts() {
  return <ProductGrid products={allProducts} />;
}
