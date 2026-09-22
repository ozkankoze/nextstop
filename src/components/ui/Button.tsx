import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "dark" | "outline" | "light" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand-500 text-white hover:bg-brand-600",
  dark: "bg-ink-900 text-white hover:bg-ink-800",
  outline:
    "border border-ink-200 bg-white text-ink-900 hover:border-ink-300 hover:bg-ink-50",
  light: "border border-white/25 text-white hover:border-white/50 hover:bg-white/10",
  ghost: "text-ink-700 hover:text-brand-500",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[12.5px]",
  md: "px-5 py-3 text-[13px]",
  lg: "px-6 py-3.5 text-[14px]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60";

export function buttonClasses(
  variant: Variant = "primary",
  size: Size = "md",
  className = ""
) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant,
  size,
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: CommonProps & { href: string } & Omit<
    React.ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >) {
  return (
    <Link
      href={href}
      className={`group ${buttonClasses(variant, size, className)}`}
      {...props}
    >
      {children}
    </Link>
  );
}
