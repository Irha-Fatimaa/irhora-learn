type TaskCardProps = {
  title: string;
  completed?: boolean;
};

export default function TaskCard({
  title,
  completed = false,
}: TaskCardProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div>
        <h3
          className={`font-semibold ${
            completed
              ? "text-muted line-through"
              : "text-heading"
          }`}
        >
          {title}
        </h3>
      </div>

      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${
          completed
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {completed ? "Completed" : "Pending"}
      </span>
    </div>
  );
}