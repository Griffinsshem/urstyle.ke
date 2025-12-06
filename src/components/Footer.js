"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Urstyle.ke
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Kenya’s premium online fashion store.
            Discover elegant, trendy and high-quality outfits.
          </p>

          {/* Socials */}
          <div className="flex gap-4 mt-5">
            <Link href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="/products" className="hover:text-purple-600 transition">Products</Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-purple-600 transition">Cart</Link>
            </li>
            <li>
              <Link href="/admin/login" className="hover:text-purple-600 transition">Admin</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="#" className="hover:text-purple-600 transition">FAQs</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-purple-600 transition">Shipping & Delivery</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-purple-600 transition">Returns Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h3>

          <p className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5 text-purple-500" />
            Nairobi, Kenya
          </p>

          <p className="flex items-center gap-2 text-gray-600 mt-2">
            <Phone className="w-5 h-5 text-purple-500" />
            +254 700 000 000
          </p>

          <p className="flex items-center gap-2 text-gray-600 mt-2">
            <Mail className="w-5 h-5 text-purple-500" />
            support@urstyle.ke
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Urstyle.ke — All Rights Reserved.
      </div>
    </footer>
  );
}
