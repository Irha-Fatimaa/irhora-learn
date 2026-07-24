type SettingCardProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function SettingCard({
  title,
  description,
  children,
}: SettingCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-heading">
        {title}
      </h2>

      <p className="mt-2 text-muted">
        {description}
      </p>

      <div className="mt-6">
        {children}
      </div>
    </div>
  );
}