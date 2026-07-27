"use client";

import { useState } from "react";
import {
  Bell,
  LogOut,
  UserCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

import Input from "../ui/Input";

import { logout } from "@/services/auth";
import { useAuth } from "@/contexts/AuthContext";

const pages = [
  {
    keywords: ["dashboard", "home"],
    path: "/dashboard",
  },
  {
    keywords: ["iris", "chat", "ai"],
    path: "/dashboard/ai",
  },
  {
    keywords: ["notes"],
    path: "/dashboard/notes",
  },
  {
    keywords: ["quiz", "quizzes"],
    path: "/dashboard/quizzes",
  },
  {
    keywords: ["planner", "study"],
    path: "/dashboard/planner",
  },
  {
    keywords: ["ai notes", "pdf"],
    path: "/dashboard/ai-notes",
  },
  {
    keywords: ["settings", "profile"],
    path: "/dashboard/settings",
  },
];

export default function Topbar() {
  const router = useRouter();
  const { user } = useAuth();

  const [search, setSearch] = useState("");
  const [showNotifications, setShowNotifications] =
    useState(false);

  async function handleLogout() {
    try {
      await logout();
      router.replace("/login");
    } catch (error) {
      console.error(error);
    }
  }

  function handleSearch() {
    const value = search.trim().toLowerCase();

    if (!value) return;

    const page = pages.find((item) =>
      item.keywords.some((keyword) =>
        value.includes(keyword)
      )
    );

    if (page) {
      router.push(page.path);
      setSearch("");
    } else {
      alert("No matching page found.");
    }
  }

  return (
    <header className="flex h-20 items-center justify-between border-b border-border bg-white px-8">
      <div className="w-full max-w-md">
        <Input
          type="text"
          value={search}
          placeholder="Search pages..."
          onChange={(e) =>
            setSearch(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <button
            onClick={() =>
              setShowNotifications(
                !showNotifications
              )
            }
            className="rounded-xl p-2 transition hover:bg-slate-100"
            aria-label="Notifications"
          >
            <Bell size={22} />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 rounded-2xl border border-border bg-white p-4 shadow-xl">
              <h3 className="mb-3 font-semibold">
                Notifications
              </h3>

              <div className="space-y-3 text-sm">
                <div className="rounded-xl bg-slate-100 p-3">
                  👋 Welcome back to
                  Irhora Learn!
                </div>

                <div className="rounded-xl bg-slate-100 p-3">
                  📚 Keep learning with
                  Iris today.
                </div>

                <div className="rounded-xl bg-slate-100 p-3">
                  ✅ No new notifications.
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <UserCircle size={38} />

          <div>
            <p className="font-semibold text-heading">
              {user?.displayName ||
                "Student"}
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