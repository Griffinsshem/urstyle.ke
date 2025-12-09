"use client";

import { useState } from "react";
import { User, Lock, Mail, Camera } from "lucide-react";

export default function AdminSettings() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    setTimeout(() => {
      setLoading(false);
      setSuccess("Profile updated successfully!");
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Admin Profile
        </h1>
        <p className="text-gray-600 mt-1">Update your profile and account settings.</p>
      </div>

      {/* Profile Form */}
      <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        {success && (
          <p className="text-green-600 bg-green-50 border border-green-200 p-3 rounded-md mb-4">
            {success}
          </p>
        )}

        <form onSubmit={handleUpdate} className="space-y-6">

          {/* Profile Picture */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src="/default-profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <label className="flex items-center gap-2 text-purple-600 cursor-pointer hover:opacity-90">
              <Camera className="w-5 h-5" /> Change Photo
              <input type="file" className="hidden" />
            </label>
          </div>

          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Name</label>
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 p-3 rounded-xl focus-within:border-purple-400">
              <User className="w-5 h-5 text-purple-500" />
              <input
                type="text"
                name="name"
                defaultValue="Admin User"
                required
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Email</label>
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 p-3 rounded-xl focus-within:border-purple-400">
              <Mail className="w-5 h-5 text-purple-500" />
              <input
                type="email"
                name="email"
                defaultValue="admin@urstyle.ke"
                required
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">New Password</label>
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 p-3 rounded-xl focus-within:border-purple-400">
              <Lock className="w-5 h-5 text-purple-500" />
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold shadow-md hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
}
