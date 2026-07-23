export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="mx-auto max-w-4xl text-center">

        <span className="inline-block rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
          AI-Powered Academic Companion
        </span>

        <h1 className="mt-8 text-5xl font-bold leading-tight text-text md:text-6xl">
          Learn Smarter with{" "}
          <span className="text-primary">
            Irhora Learn
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
          Meet <strong>Iris</strong>, your intelligent study companion that
          helps you summarize notes, generate quizzes, build study plans,
          and understand difficult topics—all in one place.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <button className="rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:scale-105">
            Get Started
          </button>

          <button className="rounded-xl border border-border bg-white px-8 py-4 font-semibold text-text transition hover:bg-slate-50">
            Meet Iris
          </button>

        </div>

        <p className="mt-16 text-sm text-muted">
          Designed & Developed by{" "}
          <span className="font-semibold">
            Irha Fatima
          </span>
        </p>

      </div>
    </section>
  );
}