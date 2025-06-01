'use client';

import { products } from '@/data/products';
import ProductCard from '../home/ProductCard';

export default function AllProducts() {
  const all = products.All;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {all.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
