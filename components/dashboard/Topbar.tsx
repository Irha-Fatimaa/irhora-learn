"use client";

import { Bell, LogOut, UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";

import Input from "../ui/Input";

import { logout } from "@/services/auth";
import { useAuth } from "@/contexts/AuthContext";

export default function Topbar() {
  const router = useRouter();
  const { user } = useAuth();

  async function handleLogout() {
    try {
      await logout();
      router.replace("/login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <header className="flex h-20 items-center justify-between border-b border-border bg-white px-8">
      <div className="w-full max-w-md">
        <Input
          type="text"
          placeholder="Search notes, quizzes, chats..."
        />
      </div>

      <div className="flex items-center gap-6">
        <button
          className="rounded-xl p-2 transition hover:bg-slate-100"
          aria-label="Notifications"
        >
          <Bell size={22} />
        </button>

        <div className="flex items-center gap-3">
          <UserCircle size={38} />

          <div>
            <p className="font-semibold text-heading">
              {user?.displayName || "Student"}
            </p>

            <p className="text-sm text-muted">
              {user?.email}
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-xl p-2 text-red-600 transition hover:bg-red-50"
          aria-label="Logout"
        >
          <LogOut size={22} />
        </button>
      </div>
    </header>
  );
}