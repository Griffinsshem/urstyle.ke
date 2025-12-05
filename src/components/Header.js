"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
        {/* Brand */}
        <Link href="/" className="text-3xl font-extrabold text-gray-900 tracking-wide">
          Premium Cloth
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/products" className="hover:text-gray-900 transition">Products</Link>
          <Link href="/cart" className="hover:text-gray-900 transition">Cart</Link>
          <Link href="/admin/login" className="hover:text-gray-900 transition">Admin</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
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
        <nav className="md:hidden bg-white shadow-md">
          <div className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
            <Link href="/products" className="hover:text-gray-900 transition" onClick={() => setMenuOpen(false)}>Products</Link>
            <Link href="/cart" className="hover:text-gray-900 transition" onClick={() => setMenuOpen(false)}>Cart</Link>
            <Link href="/admin/login" className="hover:text-gray-900 transition" onClick={() => setMenuOpen(false)}>Admin</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
