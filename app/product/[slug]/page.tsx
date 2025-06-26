import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Metadata } from 'next';
import type { Product } from '@/types/product';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const snapshot = await getDoc(doc(db, 'products', params.slug));

  if (!snapshot.exists()) {
    return {
      title: "Product Not Found | Denya W' Decor",
      description: 'This product does not exist or is unavailable.',
    };
  }

  const product = snapshot.data() as Product;

  return {
    title: `${product.name} | Denya W' Decor`,
    description: `Buy ${product.name} for $${product.price}.`,
    openGraph: {
      title: `${product.name} | Denya W' Decor`,
      description: `Shop ${product.name} now available.`,
      images: [product.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Denya W' Decor`,
      description: `Buy ${product.name} for $${product.price}`,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const snapshot = await getDoc(doc(db, 'products', params.slug));

  if (!snapshot.exists()) {
    return notFound();
  }

  const product = snapshot.data() as Product;

  return <ProductDetail product={product} />;
}