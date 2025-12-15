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

    // 1️⃣ Create auth user
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    // 2️⃣ GUARANTEE authenticated user context
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      setError("Unable to verify user session. Please try again.");
      setLoading(false);
      return;
    }

    // 3️⃣ Insert profile (matches existing columns)
    const { error: profileError } = await supabase
      .from("profiles")
      .insert({
        id: user.id,
        email: user.email,
        role: role,
      });

    if (profileError) {
      setError(profileError.message);
      setLoading(false);
      return;
    }

    // 4️⃣ Redirect
    router.push(role === "admin" ? "/admin/login" : "/login");

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg border">
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-8">
          Create Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-gray-700 font-semibold mb-2 block">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-gray-700 font-semibold mb-2 block">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              className="absolute right-3 top-10 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {/* Role selector */}
          <div>
            <label className="text-gray-700 font-semibold block mb-3">
              Register as
            </label>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setRole("customer")}
                className={`flex items-center gap-2 border rounded-xl p-3 ${role === "customer"
                    ? "border-purple-600 bg-purple-50"
                    : "border-gray-300"
                  }`}
              >
                <User className="w-5 h-5 text-purple-600" />
                Customer
              </button>

              <button
                type="button"
                onClick={() => setRole("admin")}
                className={`flex items-center gap-2 border rounded-xl p-3 ${role === "admin"
                    ? "border-pink-500 bg-pink-50"
                    : "border-gray-300"
                  }`}
              >
                <ShieldCheck className="w-5 h-5 text-pink-500" />
                Admin
              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-600 text-sm font-semibold">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
          >
            <UserPlus size={18} />
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
