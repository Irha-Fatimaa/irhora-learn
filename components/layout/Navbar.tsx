import Link from "next/link";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Logo from "../ui/Logo";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-medium text-text transition-colors duration-300 hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

<div className="hidden md:block">
  <Link href="/login">
    <Button>Login</Button>
  </Link>
</div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition hover:bg-slate-100 md:hidden"
            aria-label="Open navigation menu"
          >
            ☰
          </button>
        </nav>
      </Container>
    </header>
  );
}