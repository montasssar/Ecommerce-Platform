import { create } from 'zustand';
import { Product } from '@/data/products';

type CartItem = Product & { quantity: number };

type CartStore = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  addToCart: (product: Product) => {
    const existing = get().cart.find((item) => item.id === product.id);
    if (existing) {
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      }));
    } else {
      set((state) => ({
        cart: [...state.cart, { ...product, quantity: 1 }],
      }));
    }
  },
  removeFromCart: (id: string) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }));
  },
  clearCart: () => set({ cart: [] }),
}));
