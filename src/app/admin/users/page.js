"use client";

import { useState } from "react";
import { Search, Filter, Eye, ShieldCheck, UserX, Trash2 } from "lucide-react";

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");

  const filteredUsers = users.filter((user) => {
    const matchSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchRole = role === "All" || role === user.role;

    return matchSearch && matchRole;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Users
          </h1>
          <p className="text-gray-600 mt-1">Manage system users and permissions.</p>
        </div>

        {/* Search + Filter */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search users..."
              className="bg-transparent ml-2 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="p-2 rounded-xl border border-gray-300"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>All</option>
            <option>Admin</option>
            <option>Staff</option>
            <option>Customer</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">User Accounts</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[750px]">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-gray-600">Name</th>
                <th className="p-3 text-gray-600">Email</th>
                <th className="p-3 text-gray-600">Role</th>
                <th className="p-3 text-gray-600">Status</th>
                <th className="p-3 text-gray-600">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3 font-medium text-gray-800">{user.name}</td>
                  <td className="p-3 text-gray-600">{user.email}</td>

                  {/* Role Badge */}
                  <td className="p-3">
                    <span
                      className={`
                        px-3 py-1 rounded-full text-sm font-semibold
                        ${user.role === "Admin"
                          ? "bg-purple-100 text-purple-700"
                          : user.role === "Staff"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-200 text-gray-700"
                        }
                      `}
                    >
                      {user.role}
                    </span>
                  </td>

                  {/* Status Badge */}
                  <td className="p-3">
                    <span
                      className={`
                        px-3 py-1 rounded-full text-sm font-semibold
                        ${user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                        }
                      `}
                    >
                      {user.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-3 flex items-center gap-4">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye className="w-5 h-5" />
                    </button>

                    <button className="text-orange-600 hover:text-orange-800">
                      <UserX className="w-5 h-5" />
                    </button>

                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center p-6 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* Dummy Data */
const users = [
  {
    id: 1,
    name: "John Mwangi",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Faith Nyambura",
    email: "faith@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 3,
    name: "David Otieno",
    email: "david@example.com",
    role: "Staff",
    status: "Suspended",
  },
  {
    id: 4,
    name: "Brian Kamau",
    email: "kamau@example.com",
    role: "Customer",
    status: "Active",
  },
];
