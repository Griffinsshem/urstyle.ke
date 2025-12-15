"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function checkRole(user) {
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (error || !profile) {
        router.replace("/login");
        return;
      }

      // 🚨 Enforce admin-only access
      if (pathname.startsWith("/admin") && profile.role !== "admin") {
        router.replace("/");
        return;
      }

      if (mounted) setLoading(false);
    }

    // 1️⃣ Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        router.replace("/login");
        return;
      }

      checkRole(session.user);
    });

    // 2️⃣ Listen for auth hydration (CRITICAL FIX)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) {
        router.replace("/login");
        return;
      }

      checkRole(session.user);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [router, pathname]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 font-semibold">
          Verifying access…
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
