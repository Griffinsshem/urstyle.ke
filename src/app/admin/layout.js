"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  PackagePlus,
  Boxes,
  ShoppingCart,
  EyeOff,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  /**
   * 🚫 IMPORTANT:
   * Do NOT wrap login / logout routes with admin layout
   * This avoids redirect loops & broken UI
   */
  if (pathname === "/admin/login" || pathname === "/admin/logout") {
    return children;
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex bg-gray-50 relative">
        {/* Sidebar */}
        <aside
          className={`
            fixed md:static inset-y-0 left-0 w-72 bg-white shadow-xl
            border-r border-gray-200 z-50
            transform transition-transform duration-300
            ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          `}
        >
          {/* Logo */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
            <Link href="/admin" className="flex items-center gap-2">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Urstyle Admin
              </span>
            </Link>

            {/* Close (mobile) */}
            <button
              className="md:hidden"
              onClick={() => setOpen(false)}
              aria-label="Close sidebar"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-1 px-4 mt-4">
            <MenuItem href="/admin" icon={<LayoutDashboard />} label="Dashboard" />
            <MenuItem href="/admin/products" icon={<Boxes />} label="Products" />
            <MenuItem href="/admin/add-product" icon={<PackagePlus />} label="Add Product" />
            <MenuItem
              href="/admin/manage-products"
              icon={<PackagePlus />}
              label="Manage Products"
            />
            <MenuItem href="/admin/orders" icon={<ShoppingCart />} label="Orders" />
            <MenuItem href="/admin/hidden" icon={<EyeOff />} label="Hidden Items" />

            <div className="mt-6 border-t border-gray-200 pt-4">
              <MenuItem
                href="/admin/logout"
                icon={<LogOut />}
                label="Logout"
                isDanger
              />
            </div>
          </nav>
        </aside>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden fixed top-4 left-4 p-2 rounded-xl bg-white shadow-lg z-40"
          onClick={() => setOpen(true)}
          aria-label="Open sidebar"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        {/* Main Content */}
        <div className="flex-1 md:ml-72 p-6">
          <header className="bg-white p-4 shadow rounded-xl border border-gray-100 mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Admin Dashboard
            </h1>
          </header>

          <main>{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}

/* Sidebar Menu Item */
function MenuItem({ href, icon, label, isDanger }) {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 p-3 rounded-xl font-medium transition
        ${isDanger
          ? "text-red-600 hover:bg-red-50"
          : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
        }
      `}
    >
      <span className="w-5 h-5">{icon}</span>
      {label}
    </Link>
  );
}
