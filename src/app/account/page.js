"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import {
  User,
  Mail,
  ShieldCheck,
  ShoppingBag,
  Heart,
  MapPin,
  Lock,
  LogOut,
} from "lucide-react";

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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 font-semibold text-lg">
          Loading your account…
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT – PROFILE CARD */}
        <div className="bg-white rounded-2xl shadow border p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white">
              <User size={28} />
            </div>

            <div>
              <p className="font-bold text-xl text-gray-900">
                {profile?.email}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-purple-600 capitalize">
                <ShieldCheck size={14} />
                {profile?.role}
              </span>
            </div>
          </div>

          <div className="space-y-4 text-sm font-semibold text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="text-purple-500" size={18} />
              {profile?.email}
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-pink-500" size={18} />
              Account role: {profile?.role}
            </div>
          </div>

          <button
            onClick={async () => {
              await supabase.auth.signOut();
              router.replace("/login");
            }}
            className="mt-8 w-full bg-gray-900 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* RIGHT – ACCOUNT SECTIONS */}
        <div className="lg:col-span-2 space-y-8">

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatCard icon={<ShoppingBag />} label="Orders" value="0" />
            <StatCard icon={<Heart />} label="Wishlist" value="0" />
            <StatCard icon={<MapPin />} label="Addresses" value="0" />
          </div>

          {/* SETTINGS */}
          <div className="bg-white rounded-2xl shadow border p-8">
            <h2 className="text-xl font-bold mb-6">
              Account Settings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ActionCard
                icon={<ShoppingBag />}
                title="My Orders"
                description="View and track your purchases"
              />

              <ActionCard
                icon={<MapPin />}
                title="Addresses"
                description="Manage shipping addresses"
              />

              <ActionCard
                icon={<Lock />}
                title="Security"
                description="Change password & security settings"
              />

              <ActionCard
                icon={<Heart />}
                title="Wishlist"
                description="Saved items you love"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-white rounded-2xl shadow border p-6 flex items-center gap-4">
      <div className="p-3 rounded-xl bg-purple-50 text-purple-600">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-extrabold">{value}</p>
        <p className="text-gray-600 font-semibold text-sm">{label}</p>
      </div>
    </div>
  );
}

function ActionCard({ icon, title, description }) {
  return (
    <div className="border rounded-2xl p-5 hover:shadow-md transition cursor-pointer">
      <div className="flex items-center gap-3 mb-2 text-purple-600">
        {icon}
        <h3 className="font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
