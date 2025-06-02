'use client';

import Image from 'next/image';
import { Product } from '@/data/products';
import { useCartStore } from '@/hooks/useCartStore';

type Props = {
  product: Product;
};

export default function ProductDetail({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <section
        className="grid md:grid-cols-2 gap-10 items-center"
        aria-labelledby="product-title"
      >
        {/* Product Image */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src={`/images/${product.image}`}
            alt={`Photo of ${product.name}`}
            fill
            className="rounded-xl object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 id="product-title" className="text-3xl font-bold mb-4">
            {product.name}
          </h1>
          <p className="text-xl text-gray-700 mb-4">{product.price}</p>
          <p className="text-gray-600 mb-6">
            A beautifully crafted {product.category.toLowerCase()} product
            designed for modern living and exceptional comfort.
          </p>

          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </section>
    </main>
  );
}
