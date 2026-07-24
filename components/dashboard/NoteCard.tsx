type NoteCardProps = {
  title: string;
  subject: string;
};

export default function NoteCard({
  title,
  subject,
}: NoteCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
        {subject}
      </span>

      <h3 className="mt-4 text-xl font-bold text-heading">
        {title}
      </h3>

      <p className="mt-2 text-muted">
        Last updated today
      </p>
    </div>
  );
}