'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Denya W&apos; Decor. All rights reserved.
        </p>
        <p className="text-center sm:text-right">
          Crafted with care by <span className="font-medium text-black">Montassar</span>
        </p>
      </div>
    </footer>
  );
}
