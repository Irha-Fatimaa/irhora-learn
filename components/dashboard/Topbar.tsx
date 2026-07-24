import { Bell, UserCircle } from "lucide-react";

import Input from "../ui/Input";

export default function Topbar() {
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
              Irha Fatima
            </p>

            <p className="text-sm text-muted">
              Student
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}