"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Remove admin session
    localStorage.removeItem("adminLoggedIn");

    // Redirect to login page
    router.replace("/admin/login");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg text-gray-700">Logging out...</p>
    </div>
  );
}
