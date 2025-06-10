// app/page.tsx

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

// === SEO Metadata ===
export const metadata: Metadata = {
  title: 'YourBrand | Curated Shopping for Tech, Style & Décor',
  description: 'Discover your next favorite product with our curated categories in technology, fashion, and home décor.',
  openGraph: {
    title: 'YourBrand | Curated Shopping for Tech, Style & Décor',
    description: 'Explore top picks in Tech, Clothes, and Home Decor. Join us or start shopping today!',
    url: 'https://yourdomain.com',
    type: 'website',
    images: [
      {
        url: 'https://yourdomain.com/images/seo/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'YourBrand Hero Image',
      },
    ],
  },
  robots: 'index, follow',
}

// === Category Card Component ===
const CategoryCard = ({
  title,
  image,
  tab,
}: {
  title: string
  image: string
  tab: string
}) => (
  <Link
    href={`/home?tab=${tab}`}
    aria-label={`Shop ${title} category`}
    className="block group"
  >
    <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition">
      <Image
        src={`/images/${image}`}
        alt={`Category: ${title}`}
        width={420}
        height={320}
        className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-300"
        priority
      />
    </div>
    <h3 className="mt-3 text-lg font-semibold text-center">{title}</h3>
  </Link>
)

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section
        className="relative w-full h-[75vh] flex items-center justify-center"
        aria-label="Hero Banner"
      >
        <Image
          src="/images/catgeries.jpg"
          alt="Hero Background showing lifestyle categories"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-0" aria-hidden="true" />
        <div className="z-10 text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md">
            All You Need to Stay <span className="italic">The One</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl drop-shadow-sm">
            Discover curated picks in tech, fashion, and home décor.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              aria-label="Go to shop page"
              className="px-6 py-3 bg-white text-black rounded-full font-medium shadow hover:bg-gray-200 transition"
            >
              🛍️ Shop Now
            </Link>
            <Link
              href="/partner-signin"
              aria-label="Join as a partner"
              className="px-6 py-3 bg-black text-white rounded-full font-medium shadow hover:bg-gray-800 transition"
            >
              🤝 Join Us
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section
        className="w-full max-w-7xl py-16 px-4"
        aria-labelledby="category-heading"
      >
        <h2
          id="category-heading"
          className="text-2xl font-semibold mb-8 text-center"
        >
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <CategoryCard title="Tech" image="techgategory.jpg" tab="Techs" />
          <CategoryCard title="Décor" image="decorcategory.jpg" tab="Decor" />
          <CategoryCard title="Clothes" image="clothescategory.jpg" tab="Clothes" />
        </div>
      </section>
    </main>
  )
}
