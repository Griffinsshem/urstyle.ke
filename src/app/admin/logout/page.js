"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    /**
     * STEP C (Optional but Recommended)
     * Clear ALL auth-related UI state
     * This prevents role bleed between sessions
     */

    // Admin UI flags
    localStorage.removeItem("adminLoggedIn");
    localStorage.removeItem("userRole");

    // Customer UI flags (future-safe)
    localStorage.removeItem("customerLoggedIn");

    // Optional: clear any persisted cart/session later
    // localStorage.removeItem("cart");

    // Redirect cleanly to admin login
    router.replace("/admin/login");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <p className="text-lg font-medium text-gray-700">
        Logging out securely...
      </p>
    </div>
  );
}
