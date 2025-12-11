"use client";

import { useCartStore } from "@/store/useCartStore";
import { ShoppingCart } from "lucide-react";

export default function ProductCard({ id, title, price, image, category }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition p-4 flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded-xl"
      />

      <div className="mt-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">{category}</p>

        <p className="text-xl font-bold mt-auto text-purple-600">
          Ksh {price.toLocaleString()}
        </p>

        <button
          onClick={() => addToCart({ id, title, price, image })}
          className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r 
                     from-purple-600 to-pink-500 text-white py-2 rounded-xl 
                     hover:opacity-90 transition"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
