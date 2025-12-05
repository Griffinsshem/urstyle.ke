"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 transition-shadow duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
        {/* Brand */}
        <Link
          href="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent tracking-wide hover:scale-105 transition-transform"
        >
          Premium Cloth
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-gray-700 font-semibold uppercase tracking-wider">
          <Link
            href="/products"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:transition-all hover:after:w-full"
          >
            Products
          </Link>
          <Link
            href="/cart"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:transition-all hover:after:w-full"
          >
            Cart
          </Link>
          <Link
            href="/admin/login"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:transition-all hover:after:w-full"
          >
            Admin
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-xl rounded-b-lg animate-slideDown">
          <div className="flex flex-col gap-4 p-6 text-gray-700 font-semibold uppercase tracking-wide">
            <Link href="/products" className="hover:text-purple-600 transition" onClick={() => setMenuOpen(false)}>Products</Link>
            <Link href="/cart" className="hover:text-purple-600 transition" onClick={() => setMenuOpen(false)}>Cart</Link>
            <Link href="/admin/login" className="hover:text-purple-600 transition" onClick={() => setMenuOpen(false)}>Admin</Link>
          </div>
        </nav>
      )}

      <style jsx>{`
        @keyframes slideDown {
          0% { transform: translateY(-10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slideDown {
          animation: slideDown 0.25s ease-out forwards;
        }
      `}</style>
    </header>
  );
}
