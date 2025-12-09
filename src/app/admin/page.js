"use client";

import { useEffect, useState } from "react";
import {
  Package,
  ShoppingCart,
  Users,
  TrendingUp,
  Layers,
} from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProducts: 128,
    totalOrders: 54,
    totalUsers: 725,
    revenue: 124500,
  });

  return (
    <div className="space-y-8">

      {/* Top greeting */}
      <section>
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Welcome Back, Admin 👋
        </h1>
        <p className="text-gray-600 mt-1">
          Here's what’s happening in your store today.
        </p>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Products"
          value={stats.totalProducts}
          icon={<Package className="w-6 h-6" />}
          color="from-purple-500 to-purple-700"
        />

        <StatCard
          title="Orders Today"
          value={stats.totalOrders}
          icon={<ShoppingCart className="w-6 h-6" />}
          color="from-pink-500 to-pink-600"
        />

        <StatCard
          title="Total Users"
          value={stats.totalUsers}
          icon={<Users className="w-6 h-6" />}
          color="from-indigo-500 to-indigo-700"
        />

        <StatCard
          title="Revenue"
          value={`KSH ${stats.revenue.toLocaleString()}`}
          icon={<TrendingUp className="w-6 h-6" />}
          color="from-green-500 to-green-600"
        />
      </section>

      {/* Recent Activity */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-gray-600">Order ID</th>
                <th className="p-3 text-gray-600">Customer</th>
                <th className="p-3 text-gray-600">Total</th>
                <th className="p-3 text-gray-600">Status</th>
              </tr>
            </thead>

            <tbody>
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3 font-medium text-gray-700">
                    #{order.id}
                  </td>
                  <td className="p-3">{order.customer}</td>
                  <td className="p-3 text-gray-800 font-semibold">
                    KSH {order.total.toLocaleString()}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium 
                        ${order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }
                      `}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}

/* ------------------------------
   STAT CARD COMPONENT
--------------------------------*/
function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-between">
      <div>
        <p className="text-gray-600">{title}</p>
        <h3 className="text-3xl font-extrabold text-gray-900 mt-1">
          {value}
        </h3>
      </div>
      <div
        className={`p-4 rounded-xl bg-gradient-to-br ${color} text-white shadow-lg`}
      >
        {icon}
      </div>
    </div>
  );
}

/* ------------------------------
   SAMPLE RECENT ORDERS DATA
--------------------------------*/
const recentOrders = [
  { id: 1021, customer: "John Mwangi", total: 3200, status: "Delivered" },
  { id: 1022, customer: "Alice Njeri", total: 5800, status: "Pending" },
  { id: 1023, customer: "Grace Otieno", total: 2100, status: "Cancelled" },
  { id: 1024, customer: "Brian Kamau", total: 4500, status: "Delivered" },
];
