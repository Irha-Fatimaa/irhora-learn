import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border bg-white px-6 py-12"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <Logo />
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-heading">
            Contact
          </h3>

          <div className="space-y-2 text-sm text-muted">
            <p>
              📧 ftirha@gmail.com
            </p>

            <p>
              📍 Suite 201, Rimjhim Hall, Gulshan Iqbal, Karachi, Pakistan
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-heading">
            Connect
          </h3>

          <div className="space-y-2 text-sm">
            <a
              href="https://github.com/Irha-Fatimaa"
              target="_blank"
              className="block text-primary hover:underline"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="block text-primary hover:underline"
            >
              LinkedIn
            </a>
          </div>

          <div className="mt-6 text-sm text-muted">
            <p>Designed & Developed by Irha Fatima</p>

            <p>© 2026 Irhora Learn. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}