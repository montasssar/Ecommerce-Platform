// hooks/useProducts.ts
'use client';

import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  Timestamp,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  createdAt: Timestamp;
};

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'products'));
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];
        setProducts(data);
        setLoading(false);
      } catch {
        setError('Failed to fetch products.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addProduct = async (product: Omit<Product, 'id' | 'createdAt'>) => {
    const newDoc = await addDoc(collection(db, 'products'), {
      ...product,
      createdAt: Timestamp.now(),
    });
    setProducts((prev) => [
      ...prev,
      { ...product, id: newDoc.id, createdAt: Timestamp.now() },
    ]);
  };

  const updateProduct = async (id: string, updates: Partial<Product>) => {
    const ref = doc(db, 'products', id);
    await updateDoc(ref, updates);
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
    );
  };

  const deleteProduct = async (id: string) => {
    await deleteDoc(doc(db, 'products', id));
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return {
    products,
    loading,
    error,
    addProduct,
    updateProduct,
    deleteProduct,
  };
}
