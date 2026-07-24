import Button from "@/components/ui/Button";
import DashboardCard from "@/components/dashboard/DashboardCard";
import TaskCard from "@/components/dashboard/TaskCard";

export default function PlannerPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-4xl font-bold text-heading">
            Study Planner
          </h1>

          <p className="mt-2 text-muted">
            Organize your daily study schedule.
          </p>
        </div>

        <Button>Add Task</Button>
      </div>

      <DashboardCard>
        <h2 className="text-2xl font-bold text-heading">
          Today&apos;s Progress
        </h2>

        <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-3/5 rounded-full bg-primary" />
        </div>

        <p className="mt-3 text-muted">
          3 of 5 tasks completed today.
        </p>
      </DashboardCard>

      <div className="space-y-4">
        <TaskCard
          title="Review AI lecture notes"
          completed
        />

        <TaskCard
          title="Complete DBMS assignment"
        />

        <TaskCard
          title="Generate Networking quiz"
          completed
        />

        <TaskCard
          title="Practice coding questions"
        />

        <TaskCard
          title="Revise Machine Learning"
          completed
        />
      </div>
    </div>
  );
}