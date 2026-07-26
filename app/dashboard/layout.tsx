import { ReactNode } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ProtectedRoute from "@/components/providers/ProtectedRoute";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({
  children,
}: LayoutProps) {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </ProtectedRoute>
  );
}


