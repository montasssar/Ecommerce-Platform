'use client';

import { usePublicProducts } from '@/hooks/usePublicProducts';
import ProductCard from './ProductCard';

export default function Clothes() {
  const { products, loading } = usePublicProducts();
  const clothes = products.filter((p) => p.category === 'Clothes');

  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {clothes.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
