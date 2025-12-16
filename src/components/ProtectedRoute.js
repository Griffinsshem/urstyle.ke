"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    async function checkAdmin() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) {
        router.replace("/login");
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", session.user.id)
        .single();

      if (profile?.role !== "admin") {
        router.replace("/");
        return;
      }

      setAllowed(true);
    }

    checkAdmin();
  }, [router]);

  if (!allowed) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Checking access…
      </div>
    );
  }

  return children;
}
