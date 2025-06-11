import { Timestamp } from 'firebase/firestore';

export type Category = 'Techs' | 'Clothes' | 'Decor';

export type Product = {
  id: string;
  name: string;
  price: number;
  category: Category | string;
  stock: number;
  image: string;
  createdAt: Timestamp;
};

export type ProductInput = Omit<Product, 'id' | 'createdAt'>;

export type CartProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
};
