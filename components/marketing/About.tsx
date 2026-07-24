import { BookOpen, Brain, Target } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Meet Iris
            </span>

            <h2 className="mt-6 text-4xl font-bold text-heading">
              Your Personal AI Study Partner
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted">
              Iris helps students learn faster by transforming notes into
              summaries, quizzes, flashcards, and personalized study plans.
              Instead of spending hours organizing material, focus on learning.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3">
                  <BookOpen className="text-primary" size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-heading">
                    Smart Notes
                  </h3>

                  <p className="text-muted">
                    Upload notes and instantly receive concise summaries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3">
                  <Brain className="text-primary" size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-heading">
                    AI Explanations
                  </h3>

                  <p className="text-muted">
                    Understand complex topics in simple language.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3">
                  <Target className="text-primary" size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-heading">
                    Personalized Learning
                  </h3>

                  <p className="text-muted">
                    Get recommendations tailored to your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-heading">
              How It Works
            </h3>

            <div className="mt-8 space-y-8">
              <div>
                <span className="font-bold text-primary">
                  01
                </span>

                <h4 className="mt-2 text-xl font-semibold">
                  Upload Notes
                </h4>

                <p className="text-muted">
                  Import PDFs, documents, or handwritten notes.
                </p>
              </div>

              <div>
                <span className="font-bold text-primary">
                  02
                </span>

                <h4 className="mt-2 text-xl font-semibold">
                  Let Iris Analyze
                </h4>

                <p className="text-muted">
                  AI extracts important concepts and organizes information.
                </p>
              </div>

              <div>
                <span className="font-bold text-primary">
                  03
                </span>

                <h4 className="mt-2 text-xl font-semibold">
                  Learn Faster
                </h4>

                <p className="text-muted">
                  Study using quizzes, summaries, flashcards, and AI tutoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}