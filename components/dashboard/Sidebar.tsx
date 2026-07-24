import Link from "next/link";
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
    label: "AI Chat",
    href: "/dashboard/chat",
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
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-border bg-white">
      <div className="border-b border-border p-6">
        <Logo />
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 font-medium text-text transition hover:bg-primary/10 hover:text-primary"
            >
              <Icon size={22} />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}