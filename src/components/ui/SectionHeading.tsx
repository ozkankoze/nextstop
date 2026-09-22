import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/ui/Icons";

type SectionHeadingProps = {
  /** Plain leading words, rendered in ink. */
  title: string;
  /** Trailing words rendered in the brand pink. */
  accent?: string;
  /** Optional trailing plain words after the accent. */
  titleAfter?: string;
  subtitle?: ReactNode;
  action?: { label: string; href: string };
  id?: string;
};

/** Joins heading fragments with a space, unless the fragment is punctuation. */
function lead(fragment: string) {
  return /^[?!.,:;)]/.test(fragment) ? fragment : ` ${fragment}`;
}

export function SectionHeading({
  title,
  accent,
  titleAfter,
  subtitle,
  action,
  id,
}: SectionHeadingProps) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
      <div className="flex gap-3">
        <span
          aria-hidden
          className="mt-1 w-[3px] shrink-0 self-stretch rounded-full bg-brand-500"
        />
        <div>
          <h2
            id={id}
            className="text-[22px] font-bold text-ink-900 sm:text-[26px]"
          >
            {title}
            {accent ? <span className="text-brand-500">{lead(accent)}</span> : null}
            {titleAfter ? <span>{lead(titleAfter)}</span> : null}
          </h2>
          {subtitle ? (
            <p className="mt-1.5 text-[13px] text-ink-500">{subtitle}</p>
          ) : null}
        </div>
      </div>

      {action ? (
        <Link
          href={action.href}
          className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-600 transition-colors hover:text-brand-500"
        >
          {action.label}
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      ) : null}
    </div>
  );
}
