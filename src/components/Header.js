"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ShoppingBag,
  ShoppingCart,
  User,
  Info,
  LogIn,
  UserPlus,
} from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 transition-shadow duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">

        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <ShoppingBag className="w-8 h-8 text-pink-500" />
          <span className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent tracking-wide">
            Urstyle.ke
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-gray-700 font-semibold uppercase tracking-wider items-center">
          <Link href="/products" className="nav-link">Products</Link>
          <Link href="/about" className="nav-link">About</Link>

          <Link href="/cart" className="nav-link flex items-center gap-1">
            <ShoppingCart className="w-5 h-5" /> Cart
          </Link>

          <Link href="/admin/login" className="nav-link flex items-center gap-1">
            <User className="w-5 h-5" /> Admin
          </Link>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3 ml-4">
            <Link
              href="/login"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 hover:border-purple-500 hover:text-purple-600 transition normal-case"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Link>

            <Link
              href="/register"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90 transition shadow normal-case"
            >
              <UserPlus className="w-4 h-4" />
              Register
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-xl rounded-b-lg animate-slideDown">
          <div className="flex flex-col gap-4 p-6 text-gray-700 font-semibold uppercase tracking-wide">
            <Link href="/products" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              <Info className="inline w-5 h-5 mr-2" /> About
            </Link>
            <Link href="/cart" onClick={() => setMenuOpen(false)}>
              <ShoppingCart className="inline w-5 h-5 mr-2" /> Cart
            </Link>
            <Link href="/admin/login" onClick={() => setMenuOpen(false)}>
              <User className="inline w-5 h-5 mr-2" /> Admin
            </Link>

            <hr />

            {/* Mobile Auth */}
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <LogIn className="w-5 h-5" /> Login
            </Link>

            <Link
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-purple-600"
            >
              <UserPlus className="w-5 h-5" /> Register
            </Link>
          </div>
        </nav>
      )}

      {/* Animations */}
      <style jsx>{`
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0;
          background: linear-gradient(to right, #a855f7, #ec4899);
          transition: width 0.3s;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @keyframes slideDown {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideDown {
          animation: slideDown 0.25s ease-out forwards;
        }
      `}</style>
    </header>
  );
}
