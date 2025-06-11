// components/admin/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBoxes, FaEnvelope, FaHome } from 'react-icons/fa';

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: <FaHome /> },
  { label: 'Products', href: '/admin/products', icon: <FaBoxes /> },
  { label: 'Messages', href: '/admin/messages', icon: <FaEnvelope /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-lg flex flex-col p-6">
      <h1 className="text-xl font-bold mb-10">Admin Panel</h1>
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              pathname === item.href
                ? 'bg-indigo-600 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
