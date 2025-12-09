"use client";

import { useState } from "react";
import { Search, Filter, Eye, CheckCircle, XCircle } from "lucide-react";

export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toString().includes(search);

    const matchesStatus =
      statusFilter === "All" || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8">

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Orders
          </h1>
          <p className="text-gray-600 mt-1">Manage and track customer orders.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search orders..."
              className="bg-transparent ml-2 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="p-2 rounded-xl border border-gray-300"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All</option>
            <option>Pending</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-gray-600">Order ID</th>
                <th className="p-3 text-gray-600">Customer</th>
                <th className="p-3 text-gray-600">Items</th>
                <th className="p-3 text-gray-600">Total</th>
                <th className="p-3 text-gray-600">Status</th>
                <th className="p-3 text-gray-600">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3 font-medium text-gray-700">#{order.id}</td>
                  <td className="p-3">{order.customer}</td>
                  <td className="p-3 text-gray-600">{order.items} items</td>
                  <td className="p-3 font-semibold text-gray-800">
                    KSH {order.total.toLocaleString()}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold 
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

                  <td className="p-3 flex items-center gap-3">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="text-green-600 hover:text-green-800">
                      <CheckCircle className="w-5 h-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <XCircle className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}

              {filteredOrders.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center p-6 text-gray-500">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

/* Sample Order Data */
const orders = [
  { id: 1001, customer: "John Mwangi", items: 3, total: 3200, status: "Delivered" },
  { id: 1002, customer: "Faith Nyambura", items: 1, total: 1200, status: "Pending" },
  { id: 1003, customer: "Brian Otieno", items: 4, total: 7400, status: "Cancelled" },
  { id: 1004, customer: "Kevin Kamau", items: 2, total: 4100, status: "Delivered" },
  { id: 1005, customer: "Grace Wanjiru", items: 5, total: 9200, status: "Pending" },
];
