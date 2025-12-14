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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // 🔐 Listen for auth state
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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <ShoppingBag className="w-8 h-8 text-pink-500" />
          <span className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Urstyle.ke
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-gray-700">
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/cart" className="flex items-center gap-1">
            <ShoppingCart className="w-5 h-5" /> Cart
          </Link>

          {/* AUTH STATE */}
          {!user ? (
            <div className="flex gap-3 ml-4">
              <Link
                href="/login"
                className="px-4 py-2 rounded-xl border hover:border-purple-500"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-4 ml-4">
              <Link
                href="/account"
                className="flex items-center gap-2 text-purple-600"
              >
                <User className="w-5 h-5" />
                Account
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-600"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t p-6 space-y-4">
          <Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>

          {!user ? (
            <>
              <Link href="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link href="/register" onClick={() => setMenuOpen(false)}>Register</Link>
            </>
          ) : (
            <>
              <Link href="/account" onClick={() => setMenuOpen(false)}>Account</Link>
              <button onClick={handleLogout} className="text-red-600">
                Logout
              </button>
            </>
          )}
        </nav>
      )}
    </header>
  );
}
