type StatCardProps = {
  title: string;
  value: string;
};

export default function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <p className="text-sm text-muted">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-heading">
        {value}
      </h3>
    </div>
  );
}