'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Product } from '@/types/product';

export function usePublicProducts(category?: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let q;

        if (category && category !== 'All') {
          q = query(collection(db, 'products'), where('category', '==', category));
        } else {
          q = collection(db, 'products');
        }

        const snapshot = await getDocs(q);
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];

        setProducts(items);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return { products, loading };
}
