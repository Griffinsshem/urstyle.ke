"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { User, Mail, Shield } from "lucide-react";

export default function AccountPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function loadAccount() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) {
        router.replace("/login");
        return;
      }

      setUser(session.user);

      const { data: profileData } = await supabase
        .from("profiles")
        .select("email, role")
        .eq("id", session.user.id)
        .single();

      setProfile(profileData);
      setLoading(false);
    }

    loadAccount();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 font-semibold">
          Loading account...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow border">
        <h1 className="text-3xl font-extrabold mb-8">
          My Account
        </h1>

        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Mail className="text-purple-600" />
            <span className="font-semibold text-gray-800">
              {profile?.email || user.email}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Shield className="text-pink-500" />
            <span className="font-semibold capitalize text-gray-800">
              {profile?.role}
            </span>
          </div>
        </div>

        <button
          onClick={async () => {
            await supabase.auth.signOut();
            router.replace("/login");
          }}
          className="mt-10 w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
