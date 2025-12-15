"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAccess() {
      // 1️⃣ Check session
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/login");
        return;
      }

      // 2️⃣ Fetch user role
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", session.user.id)
        .single();

      if (error || !profile) {
        router.replace("/login");
        return;
      }

      // 3️⃣ Enforce admin-only routes
      if (pathname.startsWith("/admin") && profile.role !== "admin") {
        router.replace("/");
        return;
      }

      setLoading(false);
    }

    checkAccess();
  }, [router, pathname]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 font-semibold">
          Checking permissions...
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
