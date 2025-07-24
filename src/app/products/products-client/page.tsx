'use client';

import { useEffect, useState } from "react";
import { Product } from "@/types";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductsClientPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=50")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesTitle = product.title.toLowerCase().includes(search.toLowerCase());
    const price = product.price;
    const matchesMin = minPrice ? price >= +minPrice : true;
    const matchesMax = maxPrice ? price <= +maxPrice : true;
    return matchesTitle && matchesMin && matchesMax;
  });

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-purple-700">Products</h1>

      <div className="mb-6 flex flex-wrap gap-4 justify-center">
        <input
          type="text"
          placeholder="Search by title"
          className="border px-3 py-2 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min price"
          className="border px-3 py-2 rounded-lg w-32"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max price"
          className="border px-3 py-2 rounded-lg w-32"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {loading
          ? Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="animate-pulse bg-emerald-100 h-64 rounded-2xl p-4 shadow" />
            ))
          : filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: product.id * 0.02 }}
                className="border rounded-2xl p-4 shadow bg-emerald-50 transition-all duration-300 transform hover:scale-105 hover:bg-emerald-100 hover:shadow-2xl flex flex-col justify-between"
              >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-xl mb-3"
                />
                <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                <p className="text-gray-600 text-sm mt-1 flex-1">{product.description.slice(0, 60)}...</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-green-600 font-semibold">${product.price}</span>
                  <Link
                    href={`/products/${product.id}`}
                    className="text-sm bg-purple-600 text-white py-1 px-3 rounded-full hover:bg-purple-700 transition"
                  >
                    Подробнее
                  </Link>
                </div>
              </motion.div>
            ))}
      </div>
    </div>
  );
}