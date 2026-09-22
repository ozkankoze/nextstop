import Image from "next/image";
import Link from "next/link";
import compactLockup from "../../../public/brand/next-stop-network-compact.png";
import fullLockup from "../../../public/brand/next-stop-network.png";
import markOnly from "../../../public/brand/next-stop-mark.png";

type LogoVariant = "compact" | "full" | "mark";

const sources = {
  compact: compactLockup,
  full: fullLockup,
  mark: markOnly,
} as const;

const heights: Record<LogoVariant, number> = {
  compact: 34,
  full: 64,
  mark: 36,
};

type LogoProps = {
  variant?: LogoVariant;
  /** Rendered height in px; width follows the artwork's aspect ratio. */
  height?: number;
  className?: string;
  priority?: boolean;
};

/** The brand lockup on its own, for use outside a link. */
export function LogoImage({
  variant = "compact",
  height,
  className = "",
  priority = false,
}: LogoProps) {
  const source = sources[variant];
  const h = height ?? heights[variant];
  const width = Math.round((source.width / source.height) * h);

  return (
    <Image
      src={source}
      alt="NEXT STOP Network"
      height={h}
      width={width}
      priority={priority}
      className={className}
      style={{ height: h, width: "auto" }}
    />
  );
}

/** The brand lockup linking home — the default in the navbar and footer. */
export function Logo({
  variant = "compact",
  height,
  className = "",
  priority = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="NEXT STOP Network — home"
      className={`inline-flex shrink-0 items-center transition-opacity hover:opacity-85 ${className}`}
    >
      <LogoImage variant={variant} height={height} priority={priority} />
    </Link>
  );
}
