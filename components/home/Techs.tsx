'use client';

import { products } from '@/data/products';
import ProductCard from '../home/ProductCard';

export default function Techs() {
  const techs = products.Techs;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {techs.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
