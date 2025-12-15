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

    // 1️⃣ Sign in
    const { data, error: loginError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (loginError) {
      if (loginError.message === "Email not confirmed") {
        setError(
          "Please confirm your email address. Check your inbox or spam folder."
        );
      } else {
        setError(loginError.message);
      }
      setLoading(false);
      return;
    }

    // 2️⃣ SAFETY: ensure session exists
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user) {
      setError("Session not ready. Please try again.");
      setLoading(false);
      return;
    }

    // 3️⃣ Fetch role
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", session.user.id)
      .single();

    if (profileError || !profile?.role) {
      setError("Unable to load user role.");
      setLoading(false);
      return;
    }

    // 4️⃣ Role-based redirect (IMPORTANT: replace)
    if (profile.role === "admin") {
      router.replace("/admin");
    } else {
      router.replace("/");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg border">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-xl"
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

          {error && (
            <p className="text-red-600 text-sm font-semibold">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
          >
            <LogIn size={18} />
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
