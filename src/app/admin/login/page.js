"use client";

import { useState } from "react";
import { Lock, Mail } from "lucide-react";

export default function AdminLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // TODO: integrate with Flask auth endpoint
      // Example: await axios.post("/api/admin/login", { email, password });

      console.log("Logging in with:", email, password);

      // Simulated delay
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (err) {
      setLoading(false);
      setError("Invalid credentials. Try again.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 p-6">

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10 border border-purple-100">

        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Admin Login
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-center mb-8">
          Access your dashboard and manage products.
        </p>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 bg-red-50 border border-red-300 p-3 rounded-md text-sm mb-4">
            {error}
          </p>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Email</label>
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 p-3 rounded-xl focus-within:border-purple-400">
              <Mail className="w-5 h-5 text-purple-500" />
              <input
                type="email"
                name="email"
                placeholder="admin@urstyle.ke"
                required
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Password</label>
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 p-3 rounded-xl focus-within:border-purple-400">
              <Lock className="w-5 h-5 text-purple-500" />
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold shadow-md hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

      </div>
    </div>
  );
}
