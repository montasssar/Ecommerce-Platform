'use client';
import React from 'react';
import ProductGrid from './ProductGrid';

const techProducts = [
  { name: 'iPhone', price: '$999', image: '/images/iphone.jpg' },
  { name: 'Wireless Headphones', price: '$299', image: '/images/headphones.jpg' },
];

export default function Techs() {
  return <ProductGrid products={techProducts} />;
}
