"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      // 1️⃣ Check Supabase session
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/login");
        return;
      }

      const userId = session.user.id;

      // 2️⃣ Fetch role from profiles
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", userId)
        .single();

      if (error || profile.role !== "admin") {
        router.replace("/login");
        return;
      }

      // 3️⃣ Authorized admin
      setAuthorized(true);
      setLoading(false);
    }

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 font-semibold text-lg">
          Checking authorization…
        </p>
      </div>
    );
  }

  return authorized ? children : null;
}
