type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
  className = "",
}: ButtonProps) {
  const base =
    "rounded-xl px-8 py-4 font-semibold transition-all duration-200";

  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-md disabled:cursor-not-allowed disabled:opacity-50",
    secondary:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}