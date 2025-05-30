'use client';

import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { useStateContext } from '@/context/StateContext';
import { Cart } from '@/components/Cart';

export default function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Denya W&apos; Decor
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Cart */}
        <button
          type="button"
          onClick={() => setShowCart(true)}
          className="relative p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Open Cart"
        >
          <AiOutlineShopping size={24} />
          {totalQuantities > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalQuantities}
            </span>
          )}
        </button>
      </div>

      {showCart && <Cart />}
    </header>
  );
}
