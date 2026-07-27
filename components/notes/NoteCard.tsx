"use client";

import Link from "next/link";
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
    <Link href={`/dashboard/notes/${id}`}>
      <div className="group cursor-pointer rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">

        <div className="flex items-start justify-between">

          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {subject}
          </span>

          <div
            className="flex gap-2"
            onClick={(e) => e.preventDefault()}
          >
            <button
              onClick={() =>
                onEdit(id, title, subject)
              }
              className="rounded-lg p-2 text-blue-600 opacity-0 transition hover:bg-blue-50 group-hover:opacity-100"
            >
              <Pencil size={18} />
            </button>

            <button
              onClick={() => onDelete(id)}
              className="rounded-lg p-2 text-red-500 opacity-0 transition hover:bg-red-50 group-hover:opacity-100"
            >
              <Trash2 size={18} />
            </button>
          </div>

        </div>

        <h3 className="mt-5 text-xl font-bold text-heading">
          {title}
        </h3>

        <p className="mt-2 text-muted">
          Click to open and edit this note.
        </p>

      </div>
    </Link>
  );
}