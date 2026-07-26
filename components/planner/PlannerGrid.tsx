import { PlannerTask } from "@/types/planner";
import PlannerTaskCard from "./PlannerTaskCard";

type PlannerGridProps = {
  tasks: PlannerTask[];

  onToggle: (id: string) => void;

  onEdit: (
    id: string,
    title: string,
    subject: string,
    dueDate: string
  ) => void;

  onDelete: (id: string) => void;
};

export default function PlannerGrid({
  tasks,
  onToggle,
  onEdit,
  onDelete,
}: PlannerGridProps) {
  if (tasks.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border p-12 text-center">
        <h2 className="text-2xl font-bold text-heading">
          No tasks yet
        </h2>

        <p className="mt-2 text-muted">
          Add your first study task and stay organized.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {tasks.map((task) => (
        <PlannerTaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          subject={task.subject}
          dueDate={task.dueDate}
          completed={task.completed}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}