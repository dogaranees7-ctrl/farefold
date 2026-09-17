import type { AnchorHTMLAttributes, ReactNode } from "react";

// Buttons in this system are rectangular and labelled in the technical
// register. A specification sheet has no pill-shaped controls on it, and the
// button is the one place the document actually asks for something back.

type ButtonVariant = "primary" | "light" | "whatsapp" | "outline" | "outlineLight";
type ButtonSize = "md" | "lg";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  children: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-ink text-paper hover:bg-crease",
  light: "bg-paper text-ink hover:bg-kraft-pale",
  whatsapp: "bg-whatsapp text-[#05331a] hover:brightness-95",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  outlineLight:
    "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-11 px-5",
  lg: "h-14 px-7",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  children,
  className = "",
  ...anchorProps
}: ButtonProps) {
  return (
    <a
      {...anchorProps}
      className={`group t-tech inline-flex items-center justify-center gap-3 transition-colors duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      style={{ transitionTimingFunction: "var(--ease-spec)" }}
    >
      {children}
      {icon && (
        <span className="inline-flex transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </a>
  );
}
