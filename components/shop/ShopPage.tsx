'use client';

import { shopProducts, Product } from '@/data/ShopProducts';
import ProductCard from '@/components/home/ProductCard';

export default function ShopPage() {
  return (
    <div className="px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6 text-center">Shop Products</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {shopProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
