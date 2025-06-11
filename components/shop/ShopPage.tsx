'use client';

import { usePublicProducts } from '@/hooks/usePublicProducts';
import ProductCard from '@/components/home/ProductCard';

export default function ShopPage() {
  const { products, loading } = usePublicProducts();

  if (loading) return <p className="text-gray-500 text-center">Loading...</p>;

  return (
    <div className="px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6 text-center">Shop Products</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
