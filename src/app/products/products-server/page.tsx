import { Product } from "@/types";
import Link from "next/link";

const ProductsServerVersion = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=9");
  if (!res.ok) {
    throw new Error("Не удалось получить продукты");
  }
  const products: Product[] = await res.json();

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">Our Products</h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl p-4 shadow bg-sky-50 transition-all duration-300 transform hover:scale-105 hover:bg-sky-100 hover:shadow-2xl flex flex-col justify-between"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-40 object-cover rounded-xl mb-3"
            />
            <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
            <p className="text-gray-600 text-sm mt-1 flex-1">
              {product.description.slice(0, 60)}...
            </p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-blue-600 font-semibold">${product.price}</span>
              <Link
                href={`/products/${product.id}`}
                className="text-sm bg-blue-600 text-white py-1 px-3 rounded-full hover:bg-blue-700 transition"
              >
                Подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsServerVersion;