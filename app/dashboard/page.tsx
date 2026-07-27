"use client";

import { useRouter } from "next/navigation";

import DashboardCard from "@/components/dashboard/DashboardCard";
import StatCard from "@/components/dashboard/StatCard";
import Button from "@/components/ui/Button";

import { useAuth } from "@/contexts/AuthContext";

export default function DashboardPage() {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="rounded-3xl bg-primary p-10 text-white">
        <h1 className="text-4xl font-bold">
          Welcome back, {user?.displayName || "Student"} 👋
        </h1>

        <p className="mt-3 text-lg text-white/90">
          Continue learning with Iris and organize your study journey.
        </p>

        <div className="mt-8">
          <Button
            onClick={() =>
              router.push("/dashboard/ai-notes")
            }
            variant="secondary"
          >
            Continue Learning
          </Button>
        </div>
      </section>

      {/* Feature Overview */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="AI Notes"
          value="Upload & Learn"
        />

        <StatCard
          title="AI Quiz"
          value="Generate MCQs"
        />

        <StatCard
          title="Iris AI"
          value="Ask Anything"
        />

        <StatCard
          title="Planner"
          value="Stay Organized"
        />
      </section>

      {/* Bottom Cards */}
      <section className="grid gap-6 lg:grid-cols-2">
        <DashboardCard>
          <h2 className="text-2xl font-bold text-heading">
            Quick Actions
          </h2>

          <div className="mt-6 flex flex-wrap gap-4">
            <Button
              onClick={() =>
                router.push("/dashboard/ai-notes")
              }
            >
              Upload PDF
            </Button>

            <Button
              variant="secondary"
              onClick={() =>
                router.push("/dashboard/ai")
              }
            >
              Ask Iris
            </Button>

            <Button
              variant="secondary"
              onClick={() =>
                router.push("/dashboard/quizzes")
              }
            >
              Generate Quiz
            </Button>

            <Button
              variant="secondary"
              onClick={() =>
                router.push("/dashboard/planner")
              }
            >
              Study Planner
            </Button>
          </div>
        </DashboardCard>

        <DashboardCard>
          <h2 className="text-2xl font-bold text-heading">
            What can you do?
          </h2>

          <ul className="mt-6 space-y-4 text-muted">
            <li>
              📄 Upload PDFs and extract text.
            </li>

            <li>
              🤖 Ask Iris questions about your notes.
            </li>

            <li>
              📝 Generate AI-powered quizzes.
            </li>

            <li>
              📅 Plan your study schedule.
            </li>

            <li>
              💬 Chat with Iris for academic help.
            </li>
          </ul>
        </DashboardCard>
      </section>
    </div>
  );
}