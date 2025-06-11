'use client';

import { usePublicProducts } from '@/hooks/usePublicProducts';
import ProductCard from './ProductCard';

export default function Decor() {
  const { products, loading } = usePublicProducts();
  const decor = products.filter((p) => p.category === 'Decor');

  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {decor.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
