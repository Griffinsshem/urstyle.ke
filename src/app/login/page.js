"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);


    const { data, error: loginError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (loginError) {

      if (loginError.message === "Email not confirmed") {
        setError(
          "Please confirm your email address. Check your inbox and spam folder."
        );
      } else {
        setError(loginError.message);
      }

      setLoading(false);
      return;
    }


    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .single();

    if (profileError) {
      setError("Unable to fetch user profile. Please try again.");
      setLoading(false);
      return;
    }


    if (profile.role === "admin") {
      router.push("/admin");
    } else {
      router.push("/");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg border">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-600 text-sm font-semibold">
              {error}
            </p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
          >
            <LogIn size={18} />
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
