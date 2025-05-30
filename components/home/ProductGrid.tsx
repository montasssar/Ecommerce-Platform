'use client';
import React from 'react';
import Image from 'next/image';

type Product = {
  name: string;
  price: string;
  image: string;
};

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {products.map((product, idx) => (
        <div key={idx} className="text-center group">
          <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={350}
              className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h4 className="mt-2 text-md font-medium">{product.name}</h4>
          <p className="text-sm text-gray-500">{product.price}</p>
        </div>
      ))}
    </div>
  );
}
