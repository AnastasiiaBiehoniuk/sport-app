import { ReactNode } from "react";

type Email = string;
type Url = string;
type Role = "admin" | "customer" | "seller";

type Timestamps = {
  createdAt: string;
  updatedAt: string;
};

export type User = {
  id: number;
  name: string;
  email: Email;
  avatar: Url;
  role: Role;
  timestamps: Timestamps;
};

export interface Product {
  name: ReactNode;
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

export interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}


