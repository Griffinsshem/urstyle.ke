"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Loader2,
  UploadCloud,
  Tag,
  PlusCircle,
  EyeOff,
  Sparkles,
} from "lucide-react";

export default function AddProductPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle image upload preview
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const mapped = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages([...images, ...mapped]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // TODO → Connect to Flask endpoint /api/products
    setTimeout(() => {
      setLoading(false);
      alert("Product added successfully (placeholder logic)");
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Product</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">
          <div>
            <label className="font-semibold text-gray-700">Product Name</label>
            <input
              type="text"
              className="inputBox"
              placeholder="Enter product name"
              required
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Category</label>
            <select className="inputBox" required>
              <option value="">Select category</option>
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
              <option>Accessories</option>
              <option>Shoes</option>
            </select>
          </div>

          <div>
            <label className="font-semibold text-gray-700">Price (KES)</label>
            <input
              type="number"
              className="inputBox"
              placeholder="Price in Kenyan Shilling"
              required
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Description</label>
            <textarea
              rows="5"
              className="inputBox"
              placeholder="Describe the product..."
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">
          {/* IMAGE UPLOAD */}
          <div>
            <label className="font-semibold text-gray-700">
              Product Images
            </label>
            <div className="mt-2 border-2 border-dashed border-gray-300 p-6 rounded-xl text-center hover:border-purple-500 transition">
              <UploadCloud className="mx-auto w-10 h-10 text-gray-500" />
              <p className="text-gray-600 mt-2">Click to upload images</p>
              <input
                type="file"
                multiple
                accept="image/*"
                className="opacity-0 absolute inset-0 cursor-pointer"
                style={{ position: "relative", height: "100px" }}
                onChange={handleImageUpload}
              />
            </div>

            {/* PREVIEW IMAGES */}
            {images.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mt-4">
                {images.map((img, i) => (
                  <div key={i} className="relative group">
                    <Image
                      src={img.preview}
                      alt="Product"
                      width={120}
                      height={120}
                      className="rounded-xl object-cover h-24 w-24 shadow"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Toggles */}
          <div className="flex flex-col gap-4 mt-4">
            <Toggle label="New Arrival" icon={<Sparkles />} />
            <Toggle label="Hide Product" icon={<EyeOff />} />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-xl font-semibold shadow hover:opacity-90 transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <PlusCircle className="w-5 h-5" />
                Add Product
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

/* Toggle Component */
function Toggle({ label, icon }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input type="checkbox" className="toggleBox" />
      <span className="flex items-center gap-2 font-medium text-gray-700">
        {icon} {label}
      </span>
    </label>
  );
}
