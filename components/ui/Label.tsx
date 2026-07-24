import { LabelHTMLAttributes } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({
  className = "",
  ...props
}: LabelProps) {
  return (
    <label
      {...props}
      className={`mb-2 block font-medium text-heading ${className}`}
    />
  );
}
