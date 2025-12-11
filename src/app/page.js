"use client";

import Link from "next/link";
import { ArrowRight, Shirt, Sparkles, Sparkle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-pink-100 opacity-50 blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 flex flex-col md:flex-row items-center gap-16">

          {/* Left Text */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Premium Fashion
              </span>{" "}
              for the Modern Kenyan Lifestyle
            </h1>

            <p className="text-gray-700 font-semibold text-lg mb-10 max-w-xl">
              Discover luxury wear curated for elegance, comfort, and style.
              Shop the latest arrivals and elevate your wardrobe.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <Link
                href="/products"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold flex items-center gap-2 shadow-lg hover:opacity-90 transition"
              >
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/about"
                className="px-6 py-3 rounded-xl border border-purple-500 text-purple-600 font-semibold hover:bg-purple-50 transition"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/26549228/pexels-photo-26549228.jpeg"
                alt="Fashion Model"
                className="w-[380px] rounded-2xl shadow-2xl"
              />

              {/* Floating Icon */}
              <div className="absolute -top-6 -left-6 bg-white shadow-xl p-4 rounded-full">
                <Sparkles className="text-purple-500 w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-extrabold mb-10 text-gray-900">Explore Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <Link href="/products" className="group">
            <div className="bg-gray-50 hover:shadow-xl transition rounded-2xl p-10 text-center">
              <Shirt className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Men's Fashion</h3>
              <p className="text-gray-900 font-semibold text-sm">Classy, bold & modern wear.</p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/products" className="group">
            <div className="bg-gray-50 hover:shadow-xl transition rounded-2xl p-10 text-center">
              <Sparkle className="w-12 h-12 mx-auto mb-4 text-pink-500" />
              <h3 className="text-xl font-semibold mb-2">Women's Fashion</h3>
              <p className="text-gray-900 font-semibold text-sm">Elegant, stylish & chic outfits.</p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/products" className="group">
            <div className="bg-gray-50 hover:shadow-xl transition rounded-2xl p-10 text-center">
              <ArrowRight className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">New Arrivals</h3>
              <p className="text-gray-900 font-semibold text-sm">Fresh styles dropping weekly.</p>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}
