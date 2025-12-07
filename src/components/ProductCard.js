"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function ProductCard({ id, title, price, image, category }) {
  const [isFav, setIsFav] = useState(false);

  return (
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

      {/* Product Image */}
      <div className="relative w-full h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

        {/* Favorite Icon */}
        <button
          onClick={() => setIsFav(!isFav)}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-md rounded-full shadow hover:bg-white transition"
        >
          <Heart
            className={`w-5 h-5 ${isFav ? "fill-pink-500 text-pink-500" : "text-gray-700"
              }`}
          />
        </button>

        {/* Quick Add to Cart */}
        <button className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 transition-all duration-300 flex items-center gap-2">
          <ShoppingCart className="w-4 h-4" /> Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
          {category}
        </p>

        <Link href={`/products/${id}`}>
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1 hover:text-purple-600 transition">
            {title}
          </h3>
        </Link>

        <p className="text-xl font-bold text-purple-700 mt-2">Ksh {price}</p>
      </div>
    </div>
  );
}
