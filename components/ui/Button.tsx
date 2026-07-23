type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const base =
    "rounded-xl px-8 py-4 font-semibold transition-all duration-200";

  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-md",
    secondary:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
  };

  return (
    <button
      type={type}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}