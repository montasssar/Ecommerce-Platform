'use client';

import Link from 'next/link';
import Image from 'next/image';

type MinimalProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
};

type ProductCardProps = {
  product: MinimalProduct; // works for both with and without category
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="block group border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative w-full h-[320px]">
        <Image
          src={`/images/${product.image}`}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 25vw"
          priority={false}
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-base md:text-lg font-semibold truncate">{product.name}</h3>
        <p className="text-sm text-gray-600">${product.price}</p>
      </div>
    </Link>
  );
}
