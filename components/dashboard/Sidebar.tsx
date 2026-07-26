"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  ClipboardList,
  CalendarDays,
  Settings,
} from "lucide-react";

import Logo from "../ui/Logo";

const links = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
  label: "Iris AI",
  href: "/dashboard/ai",
  icon: MessageSquare,
},
  {
    label: "Notes",
    href: "/dashboard/notes",
    icon: FileText,
  },
  {
    label: "Quizzes",
    href: "/dashboard/quizzes",
    icon: ClipboardList,
  },
  {
    label: "Planner",
    href: "/dashboard/planner",
    icon: CalendarDays,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-border bg-white">
      <div className="border-b border-border p-6">
        <Logo />
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {links.map((link) => {
          const Icon = link.icon;

          const isActive =
            pathname === link.href ||
            (link.href === "/dashboard" && pathname === "/dashboard");

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all duration-200 ${
                isActive
                  ? "bg-primary text-white shadow-md"
                  : "text-text hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <Icon
                size={22}
                className="shrink-0"
              />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}