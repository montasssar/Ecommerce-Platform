'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/types';

type ContextType = {
  showCart: boolean;
  setShowCart: (show: boolean) => void;
  cartItems: Product[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  setQty: (val: number) => void;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: Product, quantity: number) => void;
};

const Context = createContext<ContextType | undefined>(undefined);

export const StateContext = ({ children }: { children: ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const incQty = () => setQty((prev: number) => prev + 1);
  const decQty = () => setQty((prev: number) => (prev - 1 < 1 ? 1 : prev - 1));

  const onAdd = (product: Product, quantity: number) => {
    const existing = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prev: number) => prev + product.price * quantity);
    setTotalQuantities((prev: number) => prev + quantity);

    if (existing) {
      const updatedItems = cartItems.map((item) =>
        item._id === product._id
          ? { ...item, quantity: (item.quantity || 0) + quantity }
          : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        setQty,
        incQty,
        decQty,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(Context);
  if (!context) throw new Error('useStateContext must be used within StateContext');
  return context;
};
