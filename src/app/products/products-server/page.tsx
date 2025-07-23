import { Product } from "@/types";

const ProductsServerVersion = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=9");
  if (!res.ok) {
    throw new Error("Не удалось получить продукты");
  }
  const products: Product[] = await res.json();

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Products</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl p-4 shadow bg-sky-50 transition-all duration-300 transform hover:scale-105 hover:bg-sky-100 hover:shadow-2xl"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.title}</h2>
            <p className="text-gray-600 text-sm">{product.description.slice(0, 60)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsServerVersion;