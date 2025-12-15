"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ShoppingBag,
  ShoppingCart,
  User,
  Info,
  LogIn,
  UserPlus,
  LogOut,
} from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { useCartStore } from "@/store/useCartStore";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // 🛒 Cart count
  const cart = useCartStore((state) => state.cart);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const displayCount = cartCount > 5 ? "5+" : cartCount;

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user ?? null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <ShoppingBag className="w-8 h-8 text-purple-800" />
          <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r 
                           from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Urstyle.ke
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 font-bold text-gray-900 font-large">

          <Link
            href="/products"
            className="flex items-center gap-2 hover:text-purple-600 transition"
          >
            <ShoppingBag className="w-4 h-4" />
            Products
          </Link>

          <Link
            href="/about"
            className="flex items-center gap-2 hover:text-purple-600 transition"
          >
            <Info className="w-4 h-4" />
            About
          </Link>

          {/* Cart with Badge */}
          <Link
            href="/cart"
            className="relative flex items-center gap-2 hover:text-purple-600 transition"
          >
            <ShoppingCart className="w-4 h-4" />
            Cart
            {cartCount > 0 && (
              <span
                className="absolute -top-2 -right-4 bg-gradient-to-r 
                           from-purple-600 to-pink-500 text-white 
                           text-xs font-bold px-2 py-0.5 rounded-full shadow"
              >
                {displayCount}
              </span>
            )}
          </Link>

          {/* Auth State */}
          {!user ? (
            <div className="flex items-center gap-3 ml-6">
              <Link
                href="/login"
                className="flex items-center gap-2 px-4 py-2 rounded-xl 
                           border border-gray-300 hover:border-purple-500 
                           hover:text-purple-600 transition"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>

              <Link
                href="/register"
                className="flex items-center gap-2 px-5 py-2 rounded-xl 
                           bg-gradient-to-r from-purple-600 to-pink-500 
                           text-white font-semibold shadow hover:opacity-90 transition"
              >
                <UserPlus className="w-4 h-4" />
                Register
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-5 ml-6">
              <Link
                href="/account"
                className="flex items-center gap-2 text-purple-600 font-semibold"
              >
                <User className="w-4 h-4" />
                Account
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-600 hover:text-red-700 transition"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-5">

          <Link
            href="/products"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-gray-700"
          >
            <ShoppingBag className="w-5 h-5" />
            Products
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-gray-700"
          >
            <Info className="w-5 h-5" />
            About
          </Link>

          {/* Mobile Cart with Badge */}
          <Link
            href="/cart"
            onClick={() => setMenuOpen(false)}
            className="relative flex items-center gap-3 text-gray-700"
          >
            <ShoppingCart className="w-5 h-5" />
            Cart
            {cartCount > 0 && (
              <span
                className="absolute -top-2 left-16 bg-gradient-to-r 
                           from-purple-600 to-pink-500 text-white 
                           text-xs font-bold px-2 py-0.5 rounded-full"
              >
                {displayCount}
              </span>
            )}
          </Link>

          {!user ? (
            <>
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 text-gray-700"
              >
                <LogIn className="w-5 h-5" />
                Login
              </Link>

              <Link
                href="/register"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 text-purple-600 font-semibold"
              >
                <UserPlus className="w-5 h-5" />
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/account"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 text-purple-600 font-semibold"
              >
                <User className="w-5 h-5" />
                Account
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center gap-3 text-red-600"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </>
          )}
        </nav>
      )}
    </header>
  );
}
