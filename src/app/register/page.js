"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, UserPlus, ShieldCheck, User } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { role }, // stored in auth.users metadata
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    alert("Check your email to confirm your account.");
    router.push("/login");

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg border">
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-8">
          Create Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-5">
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setRole("customer")}
              className={`p-3 rounded-xl border ${role === "customer"
                  ? "border-purple-600 bg-purple-50"
                  : "border-gray-300"
                }`}
            >
              <User /> Customer
            </button>

            <button
              type="button"
              onClick={() => setRole("admin")}
              className={`p-3 rounded-xl border ${role === "admin"
                  ? "border-pink-500 bg-pink-50"
                  : "border-gray-300"
                }`}
            >
              <ShieldCheck /> Admin
            </button>
          </div>

          {error && <p className="text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl"
          >
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        <p className="text-center mt-6">
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
