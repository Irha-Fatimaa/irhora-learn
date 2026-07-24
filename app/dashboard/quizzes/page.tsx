import Button from "@/components/ui/Button";
import QuizCard from "@/components/dashboard/QuizCard";

export default function QuizzesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-4xl font-bold text-heading">
            Quizzes
          </h1>

          <p className="mt-2 text-muted">
            Practice with AI-generated quizzes.
          </p>
        </div>

        <Button>
          Generate Quiz
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <QuizCard
          title="Artificial Intelligence"
          questions={15}
          difficulty="Easy"
        />

        <QuizCard
          title="Database Systems"
          questions={20}
          difficulty="Medium"
        />

        <QuizCard
          title="Computer Networks"
          questions={18}
          difficulty="Hard"
        />

        <QuizCard
          title="Operating Systems"
          questions={25}
          difficulty="Medium"
        />

        <QuizCard
          title="Data Structures"
          questions={12}
          difficulty="Easy"
        />

        <QuizCard
          title="Machine Learning"
          questions={22}
          difficulty="Hard"
        />
      </div>
    </div>
  );
}