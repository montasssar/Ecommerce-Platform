// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { useAuth } from '@/hooks/useAuth';
import LogoutButton from '@/components/LogoutButton';
import { useCartStore } from '@/hooks/useCartStore';
import { useState } from 'react';
import { Cart } from '@/components/Cart';

export default function Navbar() {
  const { user, loading } = useAuth();
  const cartQuantity = useCartStore((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );
  const [showCart, setShowCart] = useState(false);

  const isAdmin = user?.email === 'montassar579@gmail.com';

  const authAction = !loading && (
    user ? (
      <LogoutButton />
    ) : (
      <Link href="/signup" aria-label="Sign up">
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <FiUser size={22} />
        </button>
      </Link>
    )
  );

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Denya W&apos; Decor
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
          <Link href="/home">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>
          {isAdmin && <Link href="/admin">Admin</Link>}
        </nav>

        <div className="flex items-center space-x-4">
          {authAction}

          <button
            type="button"
            onClick={() => setShowCart(true)}
            className="relative p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Open cart"
          >
            <AiOutlineShopping size={24} />
            {cartQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartQuantity}
              </span>
            )}
          </button>
        </div>
      </div>

      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </header>
  );
}
