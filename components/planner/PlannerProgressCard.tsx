"use client";

import { motion } from "framer-motion";

type PlannerProgressCardProps = {
  completed: number;
  total: number;
};

export default function PlannerProgressCard({
  completed,
  total,
}: PlannerProgressCardProps) {
  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-heading">
            Today&apos;s Progress
          </h2>

          <p className="mt-2 text-muted">
            {completed} of {total} tasks completed
          </p>
        </div>

        <div className="text-3xl font-bold text-primary">
          {percentage}%
        </div>
      </div>

      <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-200">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-blue-600"
        />
      </div>
    </div>
  );
}