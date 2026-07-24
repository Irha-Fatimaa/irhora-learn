type SuggestionCardProps = {
  title: string;
};

export default function SuggestionCard({
  title,
}: SuggestionCardProps) {
  return (
    <button className="rounded-2xl border border-border bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {title}
    </button>
  );
}