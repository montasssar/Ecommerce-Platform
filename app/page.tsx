'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// === Category Card Component ===
const CategoryCard = ({
  title,
  image,
  tab,
}: {
  title: string;
  image: string;
  tab: string;
}) => (
  <Link href={`/home?tab=${tab}`} className="block group">
    <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition">
      <Image
        src={`/images/${image}`}
        alt={title}
        width={420}
        height={320}
        className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <h3 className="mt-3 text-lg font-semibold text-center">{title}</h3>
  </Link>
);

// === Featured Product Card Component ===
const FeaturedProduct = ({
  name,
  price,
  image,
  href,
}: {
  name: string;
  price: string;
  image: string;
  href: string;
}) => (
  <Link href={href} className="block group">
    <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition">
      <Image
        src={`/images/${image}`}
        alt={name}
        width={300}
        height={350}
        className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <h4 className="mt-2 text-md font-medium text-center">{name}</h4>
    <p className="text-sm text-gray-500 text-center">{price}</p>
  </Link>
);

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="relative w-full h-[75vh] flex items-center justify-center">
        <Image
          src="/images/catgeries.jpg"
          alt="Hero Banner"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="z-10 text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md">
            All You Need to Stay <span className="italic">The One</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl drop-shadow-sm">
            Discover curated picks in tech, fashion, and home décor.
          </p>
        </div>
        <div className="absolute inset-0 bg-black/40 z-0" />
      </section>

      {/* Categories */}
      <section className="w-full max-w-7xl py-16 px-4">
        <h2 className="text-2xl font-semibold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <CategoryCard title="Tech" image="techgategory.jpg" tab="Techs" />
          <CategoryCard title="Décor" image="decorcategory.jpg" tab="Decor" />
          <CategoryCard title="Clothes" image="clothescategory.jpg" tab="Clothes" />
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full max-w-7xl py-16 px-4 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <FeaturedProduct
            name="Wireless Headphones"
            price="$299"
            image="headphones.jpg"
            href="/product/wireless-headphones"
          />
          <FeaturedProduct
            name="iPhone"
            price="$999"
            image="iphone.jpg"
            href="/product/iphone"
          />
          <FeaturedProduct
            name="Magic Bedroom"
            price="$799"
            image="magicbed.jpg"
            href="/product/magic-bedroom"
          />
          <FeaturedProduct
            name="T-shirt"
            price="$29"
            image="tshirt.jpg"
            href="/product/tshirt"
          />
        </div>
      </section>
    </main>
  );
}
