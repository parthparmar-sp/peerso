/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'gu' | 'en';

export interface Product {
  id: string;
  name: Record<Language, string> & { hi?: string };
  story: Record<Language, string> & { hi?: string };
  origin: string; // City code/slug
  originName: Record<Language, string> & { hi?: string };
  price: number;
  weight: string;
  image: string;
  category: 'farsan' | 'sweet' | 'mix' | 'condiment';
  isAuthentic: boolean;
  rating: number;
}

export interface CityInfo {
  id: string;
  name: Record<Language, string> & { hi?: string };
  story: Record<Language, string> & { hi?: string };
  products: string[];
  x: number; // visual coordinate x (percentage)
  y: number; // visual coordinate y (percentage)
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  name: string;
  location: Record<Language, string> & { hi?: string };
  text: Record<Language, string> & { hi?: string };
  productName: Record<Language, string> & { hi?: string };
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}
