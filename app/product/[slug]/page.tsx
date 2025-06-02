import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';
import { products } from '@/data/products';
import type { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const all = [...products.Techs, ...products.Clothes, ...products.Decor];
  const product = all.find((p) => p.id === params.slug);

  if (!product) {
    return {
      title: "Product Not Found | Denya W' Decor",
      description: "This product does not exist or is unavailable.",
    };
  }

  return {
    title: `${product.name} | Denya W' Decor`,
    description: `Buy ${product.name} for only ${product.price}. A premium ${product.category.toLowerCase()} product.`,
    openGraph: {
      title: `${product.name} | Denya W' Decor`,
      description: `Shop ${product.name} at Denya W' Decor. High-quality ${product.category.toLowerCase()} products.`,
      images: [`/images/${product.image}`],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Denya W' Decor`,
      description: `Buy ${product.name} for ${product.price}`,
      images: [`/images/${product.image}`],
    },
  };
}

export default function ProductPage({ params }: Props) {
  const allProducts = [...products.Techs, ...products.Clothes, ...products.Decor];
  const product = allProducts.find((p) => p.id === params.slug);

  if (!product) return notFound();

  return <ProductDetail product={product} />;
}
