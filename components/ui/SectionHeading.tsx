type SectionHeadingProps = {
  title: string;
  subtitle: string;
  center?: boolean;
};

export default function SectionHeading({
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mb-14 text-center" : "mb-14"}>
      <h2 className="text-4xl font-bold text-heading">
        {title}
      </h2>

      <p className="mt-4 text-lg text-muted">
        {subtitle}
      </p>
    </div>
  );
}