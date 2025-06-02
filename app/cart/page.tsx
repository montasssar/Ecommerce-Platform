'use client';

import Link from 'next/link';
import { useCartStore } from '@/hooks/useCartStore';
import { type Product } from '@/data/products';

type CartItem = Product & { quantity: number };

export default function CartPage() {
  const cart: CartItem[] = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = cart.reduce((sum: number, item: CartItem) => {
    return sum + Number(item.price) * item.quantity;
  }, 0);

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is currently empty.</p>
      ) : (
        <>
          <ul className="space-y-6">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity} × ${item.price}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-between items-center">
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>

            <div className="space-x-4">
              <button
                onClick={clearCart}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                Clear Cart
              </button>
              <Link
                href="/checkout"
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
              >
                Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
