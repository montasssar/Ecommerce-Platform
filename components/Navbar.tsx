'use client';

import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { useStateContext } from '@/context/StateContext';
import { Cart } from '@/components/Cart';
import { useAuth } from '@/hooks/useAuth';
import LogoutButton from '@/components/LogoutButton';

export default function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { user, loading } = useAuth();

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
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Denya W&apos; Decor
        </Link>

        {/* Nav Links */}
  <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
  <Link href="/home">Home</Link>
  <Link href="/shop">Shop</Link>
  <Link href="/contact">Contact</Link>
</nav>


        {/* Right Actions: Auth + Cart */}
        <div className="flex items-center space-x-4">
          {authAction}

          <button
            type="button"
            onClick={() => setShowCart(true)}
            className="relative p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Open cart"
          >
            <AiOutlineShopping size={24} />
            {totalQuantities > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantities}
              </span>
            )}
          </button>
        </div>
      </div>

      {showCart && <Cart />}
    </header>
  );
}
