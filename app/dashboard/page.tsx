import DashboardCard from "@/components/dashboard/DashboardCard";
import StatCard from "@/components/dashboard/StatCard";
import Button from "@/components/ui/Button";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <section className="rounded-3xl bg-primary p-10 text-white">
        <h1 className="text-4xl font-bold">
          Welcome back, Irha 👋
        </h1>

        <p className="mt-3 text-lg text-white/90">
          Here&apos;s your learning overview for today.
        </p>

        <div className="mt-8">
          <Button variant="secondary">
            Continue Learning
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Notes"
          value="24"
        />

        <StatCard
          title="Quizzes"
          value="18"
        />

        <StatCard
          title="AI Chats"
          value="61"
        />

        <StatCard
          title="Study Streak"
          value="12 Days"
        />
      </section>

      {/* Bottom Cards */}
      <section className="grid gap-6 lg:grid-cols-2">
        <DashboardCard>
          <h2 className="text-2xl font-bold text-heading">
            Quick Actions
          </h2>

          <div className="mt-6 flex flex-wrap gap-4">
            <Button>
              Upload Notes
            </Button>

            <Button variant="secondary">
              Start AI Chat
            </Button>

            <Button variant="secondary">
              Generate Quiz
            </Button>
          </div>
        </DashboardCard>

        <DashboardCard>
          <h2 className="text-2xl font-bold text-heading">
            Recent Activity
          </h2>

          <ul className="mt-6 space-y-4 text-muted">
            <li>📚 Biology Notes summarized</li>
            <li>📝 Quiz generated successfully</li>
            <li>💬 AI Chat completed</li>
            <li>📅 Study planner updated</li>
          </ul>
        </DashboardCard>
      </section>
    </div>
  );
}