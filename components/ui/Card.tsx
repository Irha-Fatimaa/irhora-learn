import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}