"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, UserPlus, ShieldCheck, User } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("customer");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg border">

        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-8">
          Create Account
        </h1>

        {/* Full Name */}
        <div className="mb-5">
          <label className="text-gray-700 font-semibold mb-2 block">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="text-gray-700 font-semibold mb-2 block">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mb-6 relative">
          <label className="text-gray-700 font-semibold mb-2 block">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Create a password"
          />
          <button
            type="button"
            className="absolute right-3 top-10 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        {/* ROLE SELECTOR */}
        <div className="mb-8">
          <label className="text-gray-700 font-semibold block mb-3">Register as</label>

          <div className="grid grid-cols-2 gap-4">

            {/* Customer */}
            <button
              type="button"
              onClick={() => setRole("customer")}
              className={`flex items-center gap-2 border rounded-xl p-3 transition ${role === "customer"
                  ? "border-purple-600 bg-purple-50"
                  : "border-gray-300 bg-white"
                }`}
            >
              <User className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-gray-900 text-sm">Customer</span>
            </button>

            {/* Admin */}
            <button
              type="button"
              onClick={() => setRole("admin")}
              className={`flex items-center gap-2 border rounded-xl p-3 transition ${role === "admin"
                  ? "border-pink-500 bg-pink-50"
                  : "border-gray-300 bg-white"
                }`}
            >
              <ShieldCheck className="w-5 h-5 text-pink-500" />
              <span className="font-semibold text-gray-900 text-sm">Admin</span>
            </button>
          </div>
        </div>

        {/* Register Button */}
        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-semibold shadow hover:opacity-90 transition flex items-center justify-center gap-2">
          <UserPlus size={18} />
          Register
        </button>

        {/* Login Link */}
        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-purple-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
