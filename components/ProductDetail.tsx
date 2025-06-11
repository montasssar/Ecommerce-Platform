'use client';

import Image from 'next/image';
import { useCartStore } from '@/hooks/useCartStore';
import { useAuth } from '@/hooks/useAuth';
import toast from 'react-hot-toast';
import type { Product, CartProduct } from '@/types/product';

type Props = {
  product: Product;
};

export default function ProductDetail({ product }: Props) {
  const { user } = useAuth();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    if (!user) {
      toast.error('You must be signed in to add items to your cart');
      return;
    }

    const cartProduct: CartProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category as 'Techs' | 'Clothes' | 'Decor',
      stock: product.stock,
    };

    addToCart(cartProduct);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <section className="grid md:grid-cols-2 gap-10 items-center" aria-labelledby="product-title">
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src={product.image}
            alt={`Photo of ${product.name}`}
            fill
            className="rounded-xl object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div>
          <h1 id="product-title" className="text-3xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-xl text-gray-800 font-semibold mb-2">
            ${product.price}
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            A beautifully crafted
            {product.category && (
              <>
                {' '}
                <span className="capitalize">{product.category}</span>
              </>
            )}{' '}
            product designed for modern living and exceptional comfort.
          </p>

          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </section>
    </main>
  );
}