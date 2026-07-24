import Button from "../ui/Button";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import Features from "./Features";
import About from "./About";
import Badge from "../ui/Badge";


export default function Hero() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="flex min-h-[90vh] items-center bg-background px-6">
          <div className="mx-auto max-w-7xl text-center">
            <Badge>
              ✨ AI-Powered Academic Companion
            </Badge>

            <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-extrabold leading-tight text-heading md:text-7xl">
              Learn Smarter with{" "}
              <span className="text-primary">
                Irhora Learn
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted md:text-xl">
              Meet <strong>Iris</strong>, your intelligent study companion that
              summarizes notes, generates quizzes, builds study plans, and helps
              you understand difficult concepts—all in one place.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <Button>
                Get Started
              </Button>

              <Button variant="secondary">
                Meet Iris
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted">
              <span>✓ AI Powered</span>
              <span>✓ Personalized Learning</span>
              <span>✓ Smart Study Plans</span>
            </div>
          </div>
        </section>

        <Features />

        <About />
      </main>

      <Footer />
    </>
  );
}