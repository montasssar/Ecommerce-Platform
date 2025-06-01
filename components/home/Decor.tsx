'use client';

import { products } from '@/data/products';
import ProductCard from '../home/ProductCard';

export default function Decor() {
  const decor = products.Decor;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {decor.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
