"use client";

import { ProductInterface } from '@/_data/interface/ProductInterface';
import { ProductsData } from '@/_data/sample/ProductsData';
import { create } from 'zustand';




interface ProductStoreInterface {
  products: ProductInterface[];
  getProductById: (id: number) => ProductInterface | undefined;
}


export const useProductStore = create<ProductStoreInterface>((set, get) => ({
  products: ProductsData,

  getProductById: (id: number) => {
    return get().products.find(i => i.id === id);
  }
  
}));