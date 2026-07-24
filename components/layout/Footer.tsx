import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border bg-white px-6 py-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <Logo />
        </div>

        <div className="text-center text-sm text-muted md:text-right">
          <p>Designed & Developed by Irha Fatima</p>
          <p>© 2026 Irhora Learn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}