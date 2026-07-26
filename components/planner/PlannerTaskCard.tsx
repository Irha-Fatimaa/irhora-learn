"use client";

import { CalendarDays, Pencil, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

type PlannerTaskCardProps = {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onEdit: (
    id: string,
    title: string,
    subject: string,
    dueDate: string
  ) => void;
  onDelete: (id: string) => void;
};

export default function PlannerTaskCard({
  id,
  title,
  subject,
  dueDate,
  completed,
  onToggle,
  onEdit,
  onDelete,
}: PlannerTaskCardProps) {
  return (
    <motion.div
      layout
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-border bg-white p-6 shadow-sm transition"
    >
      <div className="flex items-start justify-between">
        <div>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            {subject}
          </span>

          <h3
            className={`mt-4 text-xl font-bold ${
              completed
                ? "text-gray-400 line-through"
                : "text-heading"
            }`}
          >
            {title}
          </h3>

          <div className="mt-3 flex items-center gap-2 text-sm text-muted">
            <CalendarDays size={16} />

            <span>{dueDate}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() =>
              onEdit(
                id,
                title,
                subject,
                dueDate
              )
            }
            className="rounded-lg p-2 text-blue-600 hover:bg-blue-50"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(id)}
            className="rounded-lg p-2 text-red-500 hover:bg-red-50"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <button
        onClick={() => onToggle(id)}
        className={`mt-6 w-full rounded-xl py-3 font-semibold transition ${
          completed
            ? "bg-green-100 text-green-700"
            : "bg-slate-100 text-slate-700 hover:bg-blue-100"
        }`}
      >
        {completed
          ? "✓ Completed"
          : "Mark Complete"}
      </button>
    </motion.div>
  );
}