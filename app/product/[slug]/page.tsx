import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';
import { shopProducts } from '@/data/ShopProducts';
import type { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = shopProducts.find((p) => p.id === params.slug);

  if (!product) {
    return {
      title: "Product Not Found | Denya W' Decor",
      description: "This product does not exist or is unavailable.",
    };
  }

  return {
    title: `${product.name} | Denya W' Decor`,
    description: `Buy ${product.name} for $${product.price}.`,
    openGraph: {
      title: `${product.name} | Denya W' Decor`,
      description: `Shop ${product.name} now available.`,
      images: [`/images/${product.image}`],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Denya W' Decor`,
      description: `Buy ${product.name} for $${product.price}`,
      images: [`/images/${product.image}`],
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = shopProducts.find((p) => p.id === params.slug);

  if (!product) return notFound();

  return <ProductDetail product={product} />;
}
