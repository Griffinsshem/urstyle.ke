"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Search, Filter } from "lucide-react";

const sampleProducts = [
  {
    id: 1,
    title: "Classic Denim Jacket",
    price: 3500,
    image: "/products/jacket1.jpg",
    category: "Men",
  },
  {
    id: 2,
    title: "Ladies Floral Dress",
    price: 4200,
    image: "/products/dress1.jpg",
    category: "Women",
  },
  {
    id: 3,
    title: "Designer Sneakers",
    price: 6500,
    image: "/products/shoe1.jpg",
    category: "Unisex",
  },
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("newest");
  const [priceRange, setPriceRange] = useState(10000);

  const filteredProducts = sampleProducts
    .filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((p) => (category === "All" ? true : p.category === category))
    .filter((p) => p.price <= priceRange)
    .sort((a, b) => {
      if (sort === "low-high") return a.price - b.price;
      if (sort === "high-low") return b.price - a.price;
      return b.id - a.id;
    });

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* Page Title */}
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-10">
        Shop Premium Fashion
      </h1>

      {/* Filters Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-12 border-gray-900 border">

        {/* Search */}
        <div className="flex items-center gap-3 p-3 border rounded-xl mb-6 bg-gray-50">
          <Search className="text-gray-600 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none w-full text-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Category
            </label>
            <select
              className="w-full border rounded-lg p-3 bg-gray-50"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>All</option>
              <option>Men</option>
              <option>Women</option>
              <option>Unisex</option>
            </select>
          </div>

          {/* Sort */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Sort
            </label>
            <select
              className="w-full border rounded-lg p-3 bg-gray-50"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="low-high">Price: Low → High</option>
              <option value="high-low">Price: High → Low</option>
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Max Price — Ksh {priceRange}
            </label>
            <input
              type="range"
              min="500"
              max="10000"
              value={priceRange}
              className="w-full accent-purple-600"
              onChange={(e) => setPriceRange(e.target.value)}
            />
          </div>

        </div>
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-xl mt-20">
          No products match your filters.
        </div>
      )}
    </div>
  );
}
