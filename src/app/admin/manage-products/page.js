"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Search,
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  Sparkles,
  Loader2,
} from "lucide-react";

export default function ManageProducts() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  // Placeholder fetching
  useEffect(() => {
    setTimeout(() => {
      setProducts(sampleProducts); // Replace with Flask API fetch later
      setLoading(false);
    }, 800);
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Manage Products
      </h1>

      {/* SEARCH BAR */}
      <div className="flex items-center gap-3 bg-white shadow p-3 rounded-xl border border-gray-200 mb-6">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search products..."
          className="w-full outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr className="text-left text-gray-700 uppercase text-sm">
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Category</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading
              ? [...Array(5)].map((_, i) => <SkeletonRow key={i} />)
              : filtered.map((p) => <ProductRow key={p.id} product={p} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* -------------------------
|  PRODUCT ROW COMPONENT
-------------------------- */
function ProductRow({ product }) {
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="p-4">
        <Image
          src={product.image}
          alt={product.name}
          width={60}
          height={60}
          className="rounded-xl object-cover h-16 w-16"
        />
      </td>

      <td className="p-4 font-medium text-gray-800">{product.name}</td>

      <td className="p-4 text-gray-700">KES {product.price}</td>

      <td className="p-4 text-gray-700">{product.category}</td>

      <td className="p-4">
        <StatusBadge hidden={product.hidden} newArrival={product.newArrival} />
      </td>

      <td className="p-4 flex justify-end gap-3">
        <button className="actionBtn editBtn">
          <Pencil className="w-4 h-4" />
        </button>
        <button className="actionBtn deleteBtn">
          <Trash2 className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
}

/* -------------------------
|  STATUS BADGE
-------------------------- */
function StatusBadge({ hidden, newArrival }) {
  if (hidden)
    return (
      <span className="badge bg-red-100 text-red-600">
        <EyeOff className="w-4 h-4" /> Hidden
      </span>
    );

  if (newArrival)
    return (
      <span className="badge bg-purple-100 text-purple-600">
        <Sparkles className="w-4 h-4" /> New Arrival
      </span>
    );

  return (
    <span className="badge bg-green-100 text-green-600">
      <Eye className="w-4 h-4" /> Visible
    </span>
  );
}

/* -------------------------
|  TABLE SKELETON LOADING
-------------------------- */
function SkeletonRow() {
  return (
    <tr className="animate-pulse">
      <td className="p-4">
        <div className="bg-gray-300 h-16 w-16 rounded-xl"></div>
      </td>
      <td className="p-4">
        <div className="bg-gray-300 h-4 w-40 rounded"></div>
      </td>
      <td className="p-4">
        <div className="bg-gray-300 h-4 w-24 rounded"></div>
      </td>
      <td className="p-4">
        <div className="bg-gray-300 h-4 w-24 rounded"></div>
      </td>
      <td className="p-4">
        <div className="bg-gray-300 h-4 w-28 rounded"></div>
      </td>
      <td className="p-4 flex justify-end">
        <div className="bg-gray-300 h-8 w-20 rounded"></div>
      </td>
    </tr>
  );
}

/* -------------------------
|  SAMPLE DATA (Remove later)
-------------------------- */
const sampleProducts = [
  {
    id: 1,
    name: "Classic Hoodie",
    price: 2500,
    category: "Men",
    hidden: false,
    newArrival: true,
    image:
      "https://images.pexels.com/photos/6311653/pexels-photo-6311653.jpeg",
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    price: 3500,
    category: "Women",
    hidden: false,
    newArrival: false,
    image:
      "https://images.pexels.com/photos/2983469/pexels-photo-2983469.jpeg",
  },
  {
    id: 3,
    name: "Kids Sneakers",
    price: 1800,
    category: "Kids",
    hidden: true,
    newArrival: false,
    image:
      "https://images.pexels.com/photos/19090/pexels-photo.jpg",
  },
];
