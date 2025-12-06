"use client";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Shirt,
  Wand2,
  ChevronRight,
  HeartHandshake,
  Info,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* Brand / About */}
        <div>
          <h2 className="flex items-center gap-2 text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Urstyle.ke
          </h2>
          <p className="text-gray-900 mt-4 leading-relaxed text-sm">
            Elevate your wardrobe with premium, hand-picked styles.
            Trusted by fashion-forward shoppers across Kenya.
          </p>

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="p-2.5 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition shadow-sm hover:shadow-md"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Shop Categories */}
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
            <Shirt className="w-5 h-5 text-purple-500" />
            Shop Categories
          </h3>
          <ul className="space-y-3 text-gray-600">
            {[
              "Men’s Fashion",
              "Women’s Fashion",
              "Sneakers",
              "Accessories",
              "New Arrivals",
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="flex items-center gap-2 hover:text-purple-600 transition"
                >
                  <ChevronRight className="w-4 h-4 text-purple-500" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
            <HeartHandshake className="w-5 h-5 text-purple-500" />
            Support
          </h3>
          <ul className="space-y-3 text-gray-600">
            {[
              "FAQs",
              "Shipping & Delivery",
              "Returns Policy",
              "Our Story",
              "Terms & Conditions",
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="flex items-center gap-2 hover:text-purple-600 transition"
                >
                  <ChevronRight className="w-4 h-4 text-purple-500" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
            <Info className="w-5 h-5 text-purple-500" />
            Contact Us
          </h3>

          <p className="flex items-center gap-2 text-gray-600 text-sm">
            <MapPin className="w-5 h-5 text-purple-500" />
            Nairobi, Kenya
          </p>

          <p className="flex items-center gap-2 text-gray-600 text-sm mt-3">
            <Phone className="w-5 h-5 text-purple-500" />
            +254 700 000 000
          </p>

          <p className="flex items-center gap-2 text-gray-600 text-sm mt-3">
            <Mail className="w-5 h-5 text-purple-500" />
            support@urstyle.ke
          </p>

          {/* Newsletter */}
          <div className="mt-6">
            <p className="text-gray-700 font-medium mb-2">Join our newsletter</p>
            <div className="flex items-center bg-gray-100 rounded-full p-1 shadow-sm">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent flex-1 px-3 py-2 focus:outline-none text-sm"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full text-sm flex items-center gap-1 hover:opacity-90 transition">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-5 text-center text-gray-600 text-sm bg-gray-50">
        © {new Date().getFullYear()} Urstyle.ke — Premium Fashion Store. All Rights Reserved.
      </div>
    </footer>
  );
}
