"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  quantity: number;
};

type ProductStore = {
  products: Product[];
  hydrated: boolean;
  setHydrated: (value: boolean) => void;
  addProduct: () => void;
  deleteProduct: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  updateProduct: (id: number, data: Partial<Product>) => void;
};

const initialProducts: Product[] = [
  { id: 1, name: "Wireless Headphones", price: 79.99, category: "Electronics", quantity: 10 },
  { id: 2, name: "Running Shoes", price: 119.99, category: "Footwear", quantity: 5 },
  { id: 3, name: "Coffee Maker", price: 49.99, category: "Kitchen", quantity: 8 },
  { id: 4, name: "Yoga Mat", price: 29.99, category: "Sports", quantity: 15 },
  { id: 5, name: "Desk Lamp", price: 34.99, category: "Home", quantity: 12 },
];

export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      products: initialProducts,
      hydrated: false,

      setHydrated: (value) => set({ hydrated: value }),

      addProduct: () => {
        const products = get().products;
        const nextId = products.length
          ? Math.max(...products.map((p) => p.id)) + 1
          : 1;

        const nextIndex = products.length + 1;

        set({
          products: [
            ...products,
            {
              id: nextId,
              name: `New Product ${nextIndex}`,
              price: 0,
              category: "General",
              quantity: 1,
            },
          ],
        });
      },
      
      updateProduct: (id, data) =>
  set((state) => ({
    products: state.products.map((p) =>
      p.id === id ? { ...p, ...data } : p
    ),
  })),

      deleteProduct: (id) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, quantity } : p
          ),
        })),
    }),
    {
      name: "products-store",
      storage: createJSONStorage(() => localStorage),

      partialize: (state) => ({
        products: state.products,
      }),

      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);