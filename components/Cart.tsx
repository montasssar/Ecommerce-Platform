'use client';

import Link from 'next/link';
import { useCartStore } from '@/hooks/useCartStore';
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useAuth } from '@/hooks/useAuth';
import toast from 'react-hot-toast';
import type { CartItem } from '@/hooks/useCartStore';

type Props = {
  onClose: () => void;
};

export function Cart({ onClose }: Props) {
  const { cart, removeFromCart, increment, decrement } = useCartStore();
  const { user } = useAuth();

  const totalPrice = cart.reduce((sum: number, item: CartItem) => {
    const price = typeof item.price === 'string' ? parseFloat(item.price) : item.price;
    return sum + price * item.quantity;
  }, 0);

  const handleCheckout = async () => {
    if (!user) {
      toast.error('You must be signed in to checkout');
      return;
    }

    const res = await fetch('/api/stripe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cart),
    });

    if (res.status === 500) return;

    const data = await res.json();
    toast.loading('Redirecting...');

    const getStripe = (await import('@/lib/getStripe')).default;
    const stripe = await getStripe();

    if (!stripe) {
      toast.error('Stripe initialization failed');
      return;
    }

    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="cart-wrapper fixed inset-0 z-50 bg-black/20">
      <div className="cart-container bg-white w-full max-w-md h-full ml-auto p-6 shadow-xl">
        <button onClick={onClose} className="flex items-center gap-2 text-gray-700 mb-6">
          <AiOutlineLeft />
          <span className="font-semibold">Your Cart</span>
          <span className="text-sm">({cart.length} items)</span>
        </button>

        {cart.length === 0 ? (
          <div className="empty-cart text-center mt-20">
            <AiOutlineShopping size={120} className="mx-auto text-gray-400" />
            <h3 className="text-xl mt-4">Your shopping bag is empty</h3>
            <Link href="/">
              <button onClick={onClose} className="mt-6 bg-black text-white px-4 py-2 rounded">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 border-b pb-4">
                  <img
                    src={`/images/${item.image}`}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h5 className="font-medium">{item.name}</h5>
                      <h4>${Number(item.price).toFixed(2)}</h4>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex border rounded w-24 justify-between">
                        <button onClick={() => decrement(item.id)} className="px-2">
                          <AiOutlineMinus />
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button onClick={() => increment(item.id)} className="px-2">
                          <AiOutlinePlus />
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-semibold">Subtotal:</h3>
                <h3 className="text-lg font-bold">${totalPrice.toFixed(2)}</h3>
              </div>
              <button onClick={handleCheckout} className="w-full bg-black text-white py-3 rounded">
                Pay with Stripe
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
