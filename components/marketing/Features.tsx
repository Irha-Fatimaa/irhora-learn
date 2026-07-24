import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";

import {
  Brain,
  BookOpen,
  CalendarCheck,
} from "lucide-react";

const features = [
  {
    title: "AI Study Assistant",
    description:
      "Ask Iris questions, summarize notes, and get instant explanations.",
    icon: Brain,
  },
  {
    title: "Quiz Generator",
    description:
      "Turn your notes into quizzes and flashcards in seconds.",
    icon: BookOpen,
  },
  {
    title: "Study Planner",
    description:
      "Plan your learning schedule and stay consistent every day.",
    icon: CalendarCheck,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-background px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
  title="Everything You Need to Learn Smarter"
  subtitle="Powerful AI tools designed to make studying easier and more productive."
/>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
  <Card key={feature.title}>
    <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4">
      <feature.icon
        size={34}
        className="text-primary"
        strokeWidth={2}
      />
    </div>

    <h3 className="mb-3 text-2xl font-semibold text-heading">
      {feature.title}
    </h3>

    <p className="leading-7 text-muted">
      {feature.description}
    </p>
  </Card>
))}
        </div>
      </div>
    </section>
  );
}