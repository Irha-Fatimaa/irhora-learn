import { ReactNode } from "react";

type AuthCardProps = {
  children: ReactNode;
};

export default function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="w-full max-w-md rounded-3xl border border-border bg-white p-10 shadow-xl">
      {children}
    </div>
  );
}