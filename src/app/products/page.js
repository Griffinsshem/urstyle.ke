"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import {
  Search,
  Filter,
  Layers,
  ArrowUpDown,
  DollarSign,
} from "lucide-react";

const sampleProducts = [
  {
    id: 1,
    title: "Classic Denim Jacket",
    price: 3500,
    image: "https://images.pexels.com/photos/27923957/pexels-photo-27923957.jpeg",
    category: "Men",
  },
  {
    id: 2,
    title: "Ladies Floral Dress",
    price: 4200,
    image: "https://images.pexels.com/photos/18807746/pexels-photo-18807746.jpeg",
    category: "Women",
  },
  {
    id: 3,
    title: "Designer Sneakers",
    price: 6500,
    image: "https://images.pexels.com/photos/18155788/pexels-photo-18155788.jpeg",
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

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-10">
        <Layers className="w-10 h-10 text-purple-600" />
        <h1 className="text-5xl font-extrabold bg-gradient-to-r 
                       from-purple-600 to-pink-500 bg-clip-text 
                       text-transparent tracking-tight">
          Shop Premium Fashion
        </h1>
      </div>

      {/* FILTER BAR CONTAINER */}
      <div className="bg-white shadow-xl rounded-3xl p-8 mb-12 border border-gray-100">

        {/* Title */}
        <div className="flex items-center gap-2 mb-6">
          <Filter className="text-gray-700 w-5 h-5" />
          <h2 className="text-xl font-semibold text-gray-700">Filters</h2>
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 p-4 border rounded-2xl mb-8
                        bg-gray-50 shadow-sm transition hover:shadow-md">
          <Search className="text-gray-600 w-6 h-6" />
          <input
            type="text"
            placeholder="Search premium products..."
            className="bg-transparent outline-none w-full text-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* FILTERS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Category */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
              <Layers className="w-4 h-4 text-gray-600" />
              Category
            </label>
            <select
              className="w-full border rounded-xl p-3 bg-gray-50 hover:bg-gray-100 transition"
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
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
              <ArrowUpDown className="w-4 h-4 text-gray-600" />
              Sort
            </label>
            <select
              className="w-full border rounded-xl p-3 bg-gray-50 hover:bg-gray-100 transition"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="low-high">Price: Low → High</option>
              <option value="high-low">Price: High → Low</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
              <DollarSign className="w-4 h-4 text-gray-600" />
              Max Price (KSh {priceRange.toLocaleString()})
            </label>
            <input
              type="range"
              min="0"
              max="10000"
              className="w-full accent-purple-500"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
            />
          </div>

        </div>
      </div>

      {/* PRODUCTS GRID */}
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
