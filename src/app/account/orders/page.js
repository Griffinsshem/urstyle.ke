"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import {
  Package,
  Calendar,
  CreditCard,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function OrdersPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) {
        router.replace("/login");
        return;
      }

      /**
       * 🔜 FUTURE:
       * Replace this with real orders table query:
       * .from("orders")
       * .select("*")
       * .eq("user_id", session.user.id)
       */

      // TEMP: empty orders (safe UX)
      setOrders([]);
      setLoading(false);
    }

    loadOrders();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 font-semibold text-lg">
          Loading your orders…
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <Link
            href="/account"
            className="flex items-center gap-2 text-sm font-semibold text-purple-600 hover:underline"
          >
            <ArrowLeft size={16} />
            Back to Account
          </Link>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-10">
          My Orders
        </h1>

        {/* EMPTY STATE */}
        {orders.length === 0 ? (
          <div className="bg-white border rounded-2xl shadow p-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-purple-50 text-purple-600">
                <Package size={36} />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              No orders yet
            </h2>

            <p className="text-gray-600 mb-8">
              You haven’t placed any orders yet.
              Start shopping to see them here.
            </p>

            <Link
              href="/products"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold shadow hover:opacity-90 transition"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- Order Card (Future-ready) ---------- */
function OrderCard({ order }) {
  return (
    <div className="bg-white rounded-2xl shadow border p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="font-bold text-gray-900">
            Order #{order.id}
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={14} />
            {order.created_at}
          </div>
        </div>

        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-purple-50 text-purple-600">
          {order.status}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-700 font-semibold">
          <CreditCard size={16} />
          KSh {order.total}
        </div>

        <button className="text-purple-600 font-semibold hover:underline">
          View details
        </button>
      </div>
    </div>
  );
}
