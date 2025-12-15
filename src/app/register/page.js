"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, UserPlus, ShieldCheck, User } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role,
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    /**
     * Insert profile row
     * auth.uid() === profiles.id
     */
    const { error: profileError } = await supabase
      .from("profiles")
      .insert({
        id: data.user.id,
        full_name: fullName,
        role,
      });

    if (profileError) {
      setError(profileError.message);
      setLoading(false);
      return;
    }

    // Redirect
    if (role === "admin") {
      router.push("/admin");
    } else {
      router.push("/");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg border">
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-8">
          Create Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-5">

          <input
            required
            placeholder="Full Name"
            className="w-full px-4 py-3 border rounded-xl"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            required
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative">
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {/* Role */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setRole("customer")}
              className={`border rounded-xl p-3 flex gap-2 ${role === "customer" && "border-purple-600 bg-purple-50"
                }`}
            >
              <User /> Customer
            </button>

            <button
              type="button"
              onClick={() => setRole("admin")}
              className={`border rounded-xl p-3 flex gap-2 ${role === "admin" && "border-pink-600 bg-pink-50"
                }`}
            >
              <ShieldCheck /> Admin
            </button>
          </div>

          {error && (
            <p className="text-red-600 text-sm font-medium">{error}</p>
          )}

          <button
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-semibold"
          >
            <UserPlus /> {loading ? "Creating..." : "Register"}
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
