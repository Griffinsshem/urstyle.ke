"use client";

import { useState } from "react";
import { Search, Eye, RefreshCw, Trash2 } from "lucide-react";

export default function HiddenItemsPage() {
  const [search, setSearch] = useState("");

  const filteredItems = hiddenItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Hidden Items
          </h1>
          <p className="text-gray-600 mt-1">Manage hidden or archived products.</p>
        </div>

        {/* Search */}
        <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search hidden items..."
            className="bg-transparent ml-2 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Hidden Items Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Hidden Products</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[750px]">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-gray-600">Product</th>
                <th className="p-3 text-gray-600">Category</th>
                <th className="p-3 text-gray-600">Price</th>
                <th className="p-3 text-gray-600">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3 font-medium text-gray-800">{item.name}</td>
                  <td className="p-3 text-gray-600">{item.category}</td>
                  <td className="p-3 font-semibold text-gray-800">
                    KSH {item.price.toLocaleString()}
                  </td>

                  <td className="p-3 flex items-center gap-3">
                    <button className="text-green-600 hover:text-green-800">
                      <RefreshCw className="w-5 h-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}

              {filteredItems.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center p-6 text-gray-500">
                    No hidden items found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* Dummy Hidden Items */
const hiddenItems = [
  { id: 1, name: "Premium Hoodie", category: "Clothing", price: 3200 },
  { id: 2, name: "Luxury Jacket", category: "Clothing", price: 4500 },
  { id: 3, name: "Silk Scarf", category: "Accessories", price: 1200 },
  { id: 4, name: "Leather Bag", category: "Accessories", price: 7800 },
];
