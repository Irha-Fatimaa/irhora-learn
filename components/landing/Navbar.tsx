import Button from "../ui/Button";
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        {/* Logo */}
<Link href="/" className="flex items-center gap-3">
  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
    I
  </div>

  <div>
    <h2 className="text-lg font-bold text-heading">
      Irhora Learn
    </h2>

    <p className="text-xs text-muted">
      Powered by Iris AI
    </p>
  </div>
</Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-medium text-text transition hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button>Get Started</Button>
        </div>

        {/* Mobile Menu */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          aria-label="Open navigation menu"
        >
          ☰
        </button>
      </nav>
    </header>
  );
}