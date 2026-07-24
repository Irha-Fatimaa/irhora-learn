import { ReactNode } from "react";

type DashboardCardProps = {
  children: ReactNode;
};

export default function DashboardCard({
  children,
}: DashboardCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      {children}
    </div>
  );
}