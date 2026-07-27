import Button from "../ui/Button";

type QuickActionGridProps = {
  onAction: (prompt: string) => void;
};

const actions = [
  {
    title: "📄 Summary",
    prompt:
      "Summarize the uploaded PDF into clear study notes.",
  },
  {
    title: "❓ Quiz",
    prompt:
      "Generate 20 multiple-choice questions from the uploaded PDF.",
  },
  {
    title: "🧠 Flashcards",
    prompt:
      "Create flashcards from the uploaded PDF.",
  },
  {
    title: "🎤 Viva",
    prompt:
      "Generate viva questions from the uploaded PDF.",
  },
  {
    title: "⭐ Important Questions",
    prompt:
      "List the most important exam questions from the uploaded PDF.",
  },
];

export default function QuickActionGrid({
  onAction,
}: QuickActionGridProps) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-heading">
        Quick AI Actions
      </h2>

      <p className="mt-2 text-muted">
        Let Iris instantly help you study.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        {actions.map((action) => (
          <Button
            key={action.title}
            variant="secondary"
            onClick={() => onAction(action.prompt)}
          >
            {action.title}
          </Button>
        ))}
      </div>
    </div>
  );
}