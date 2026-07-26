"use client";

import { Pencil, Trash2 } from "lucide-react";

type NoteCardProps = {
  id: string;
  title: string;
  subject: string;
  onDelete: (id: string) => void;
  onEdit: (
    id: string,
    title: string,
    subject: string
  ) => void;
};

export default function NoteCard({
  id,
  title,
  subject,
  onDelete,
  onEdit,
}: NoteCardProps) {
  return (
    <div className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {subject}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() =>
              onEdit(id, title, subject)
            }
            className="rounded-lg p-2 text-blue-600 opacity-0 transition hover:bg-blue-50 group-hover:opacity-100"
            aria-label="Edit note"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(id)}
            className="rounded-lg p-2 text-red-500 opacity-0 transition hover:bg-red-50 group-hover:opacity-100"
            aria-label="Delete note"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <h3 className="mt-4 text-xl font-bold text-heading">
        {title}
      </h3>

      <p className="mt-2 text-muted">
        Last updated today
      </p>
    </div>
  );
}