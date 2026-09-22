import type { ReactNode } from "react";

/**
 * Readable long-form typography for editorial and legal pages.
 * Kept as explicit classes rather than a plugin so the design tokens stay
 * the single source of truth.
 */
export function Prose({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`max-w-[72ch] text-[14.5px] leading-[1.75] text-ink-600 [&_a]:text-brand-500 [&_a:hover]:underline [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-[19px] [&_h2]:font-bold [&_h2]:text-ink-900 [&_h3]:mt-7 [&_h3]:mb-2 [&_h3]:text-[15.5px] [&_h3]:font-semibold [&_h3]:text-ink-900 [&_li]:mb-1.5 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:my-4 [&_strong]:font-semibold [&_strong]:text-ink-900 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-5 ${className}`}
    >
      {children}
    </div>
  );
}

/** A numbered legal/section block with an anchor for table-of-contents links. */
export function ProseSection({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 not-first:mt-10">
      <h2 className="mb-3 text-[19px] font-bold text-ink-900">{heading}</h2>
      <Prose>{children}</Prose>
    </section>
  );
}
