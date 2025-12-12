"use client";
import { Sparkles, Rocket, HeartHandshake, Globe } from "lucide-react";

export default function OurStoryPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Our Story
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-600 mt-4 text-lg font-medium max-w-2xl mx-auto">
          The journey of how Urstyle.ke became one of Kenya’s most loved fashion destinations.
        </p>
      </div>

      {/* Intro / History */}
      <p className="text-gray-700 text-lg leading-relaxed mb-14 max-w-3xl mx-auto text-center">
        Urstyle.ke was created with one mission — making premium fashion accessible,
        affordable, and exciting for every Kenyan. What began as a small digital shop
        has grown into a fast-rising fashion brand trusted nationwide.
      </p>

      {/* How It Started */}
      <section className="mb-14 bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-200">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-7 h-7 text-purple-500" />
          <h2 className="text-2xl font-semibold text-gray-900">
            How It All Began
          </h2>
        </div>

        <p className="text-gray-600 leading-relaxed">
          In 2022, we identified a major gap in Kenya’s fashion market — high-quality
          apparel was either overpriced or hard to access. Driven by passion and a
          mission to make style more inclusive, we launched Urstyle.ke to bring curated,
          premium outfits directly to Kenyan shoppers.
        </p>
      </section>

      {/* Growth & Evolution */}
      <section className="mb-14 bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-md hover:border-pink-300 transition-all duration-200">
        <div className="flex items-center gap-3 mb-4">
          <Rocket className="w-7 h-7 text-pink-500" />
          <h2 className="text-2xl font-semibold text-gray-900">
            Growth & Evolution
          </h2>
        </div>

        <p className="text-gray-600 leading-relaxed">
          From humble beginnings, our collections quickly expanded — now offering
          men's fashion, women’s outfits, sneakers, accessories, and more. Today,
          we deliver nationwide with fast and reliable shipping to all major towns.
        </p>
      </section>

      {/* Values */}
      <section className="mb-14 bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200">
        <div className="flex items-center gap-3 mb-4">
          <HeartHandshake className="w-7 h-7 text-purple-500" />
          <h2 className="text-2xl font-semibold text-gray-900">
            What Drives Us
          </h2>
        </div>

        <ul className="space-y-3 text-gray-600 leading-relaxed">
          <li>• Commitment to premium quality</li>
          <li>• Fair pricing accessible to everyone</li>
          <li>• Ethical sourcing and sustainability</li>
          <li>• Customer-first service every step of the way</li>
        </ul>
      </section>

      {/* Future Vision */}
      <section className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-200">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="w-7 h-7 text-indigo-500" />
          <h2 className="text-2xl font-semibold text-gray-900">
            Our Vision for the Future
          </h2>
        </div>

        <p className="text-gray-600 leading-relaxed">
          Our aim is to become Kenya’s leading online fashion brand — and eventually
          expand across Africa. We’re committed to setting new standards in quality,
          technology, and customer experience as we continue to grow.
        </p>
      </section>
    </div>
  );
}
