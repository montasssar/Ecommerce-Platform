import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/data/products';

export type CartItem = Product & { quantity: number };

type CartStore = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const existing = get().cart.find((item) => item.id === product.id);

        if (existing) {
          set({
            cart: get().cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            cart: [...get().cart, { ...product, quantity: 1 }],
          });
        }
      },

      removeFromCart: (id: string) => {
        set({
          cart: get().cart.filter((item) => item.id !== id),
        });
      },

      increment: (id: string) => {
        set({
          cart: get().cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        });
      },

      decrement: (id: string) => {
        set({
          cart: get().cart
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0),
        });
      },

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'cart-storage',
    }
  )
);