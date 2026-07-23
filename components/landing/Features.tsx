const features = [
  {
    title: "AI Study Assistant",
    description:
      "Ask Iris questions, summarize notes, and get instant explanations.",
    icon: "🧠",
  },
  {
    title: "Quiz Generator",
    description:
      "Turn your notes into quizzes and flashcards in seconds.",
    icon: "📝",
  },
  {
    title: "Study Planner",
    description:
      "Plan your learning schedule and stay consistent every day.",
    icon: "📅",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-background px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-heading">
            Everything You Need to Learn Smarter
          </h2>

          <p className="mt-4 text-lg text-muted">
            Powerful AI tools designed to make studying easier and more
            productive.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-5xl">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-2xl font-semibold text-heading">
                {feature.title}
              </h3>

              <p className="leading-7 text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}