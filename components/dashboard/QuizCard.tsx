type QuizCardProps = {
  title: string;
  questions: number;
  difficulty: string;
};

export default function QuizCard({
  title,
  questions,
  difficulty,
}: QuizCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
        {difficulty}
      </span>

      <h3 className="mt-4 text-xl font-bold text-heading">
        {title}
      </h3>

      <p className="mt-2 text-muted">
        {questions} Questions
      </p>

      <button className="mt-6 rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:opacity-90">
        Start Quiz
      </button>
    </div>
  );
}