import { ReactNode } from "react";

import Logo from "../ui/Logo";
import Container from "../ui/Container";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-50">
      <Container>
        <div className="flex min-h-screen items-center justify-center py-16">
          <div className="w-full max-w-md">
            <div className="mb-8 flex justify-center">
              <Logo />
            </div>

            {children}
          </div>
        </div>
      </Container>
    </main>
  );
}