import Link from "next/link";
import { ChevronRightIcon } from "@/components/ui/Icons";

export type Crumb = {
  label: string;
  href?: string;
};

/** Breadcrumb trail for dark heroes. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-[12px] text-white/60">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-white/85" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast ? (
                <ChevronRightIcon aria-hidden className="h-3 w-3 text-white/35" />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
