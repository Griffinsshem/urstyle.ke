"use client";

import Link from "next/link";
import {
  User,
  Package,
  LogOut,
  ShieldCheck,
} from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10">
          My Account
        </h1>

        <div className="grid sm:grid-cols-2 gap-6">

          {/* Profile */}
          <div className="bg-white rounded-2xl shadow border p-6">
            <User className="text-purple-600 mb-4" size={28} />
            <h3 className="font-bold text-lg mb-2">Profile</h3>
            <p className="text-gray-600 text-sm mb-4">
              Manage your account details
            </p>
            <Link
              href="/account/profile"
              className="text-purple-600 font-semibold hover:underline"
            >
              View profile →
            </Link>
          </div>

          {/* Orders */}
          <div className="bg-white rounded-2xl shadow border p-6">
            <Package className="text-purple-600 mb-4" size={28} />
            <h3 className="font-bold text-lg mb-2">My Orders</h3>
            <p className="text-gray-600 text-sm mb-4">
              Track and view your purchases
            </p>
            <Link
              href="/account/orders"
              className="text-purple-600 font-semibold hover:underline"
            >
              View orders →
            </Link>
          </div>

          {/* Admin (future-safe) */}
          <div className="bg-white rounded-2xl shadow border p-6">
            <ShieldCheck className="text-pink-500 mb-4" size={28} />
            <h3 className="font-bold text-lg mb-2">Admin Panel</h3>
            <p className="text-gray-600 text-sm mb-4">
              Manage products & orders
            </p>
            <Link
              href="/admin"
              className="text-pink-600 font-semibold hover:underline"
            >
              Go to admin →
            </Link>
          </div>

          {/* Logout */}
          <div className="bg-white rounded-2xl shadow border p-6">
            <LogOut className="text-red-500 mb-4" size={28} />
            <h3 className="font-bold text-lg mb-2">Logout</h3>
            <p className="text-gray-600 text-sm mb-4">
              Sign out of your account
            </p>
            <button
              onClick={handleLogout}
              className="text-red-600 font-semibold hover:underline"
            >
              Logout →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
