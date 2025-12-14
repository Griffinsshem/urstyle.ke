"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    async function logout() {
      /**
       * ✅ Step D6: Supabase Logout
       * This invalidates the session properly
       */
      await supabase.auth.signOut();

      /**
       * 🧹 Cleanup any UI-only state (safe to keep)
       * Prevents role bleed between sessions
       */
      localStorage.removeItem("userRole");
      localStorage.removeItem("adminLoggedIn");
      localStorage.removeItem("customerLoggedIn");

      /**
       * 🚀 Redirect to admin login
       */
      router.replace("/admin/login");
    }

    logout();
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <p className="text-lg font-medium text-gray-700">
        Logging out securely...
      </p>
    </div>
  );
}
