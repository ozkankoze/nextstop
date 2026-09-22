import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

type PageHeroProps = {
  /** Plain leading words of the heading. */
  title: string;
  /** Words rendered in the brand pink, after the plain ones. */
  accent?: string;
  /** Plain words after the accent. */
  titleAfter?: string;
  eyebrow?: string;
  subtitle?: ReactNode;
  /** Optional background photo; without one the hero is flat ink. */
  image?: string;
  imageAlt?: string;
  crumbs?: Crumb[];
  /** Buttons, search bars, stat rows — rendered under the copy. */
  children?: ReactNode;
  /** Compact heroes suit content pages; tall ones suit landing pages. */
  size?: "sm" | "md" | "lg";
  align?: "left" | "center";
};

const sizes = {
  sm: "pt-[112px] pb-10 lg:pt-[128px] lg:pb-12",
  md: "pt-[124px] pb-14 lg:pt-[152px] lg:pb-16",
  lg: "pt-[140px] pb-16 lg:min-h-[520px] lg:pt-[176px] lg:pb-20",
};

/** Joins heading fragments with a space, unless the fragment is punctuation. */
function lead(fragment: string) {
  return /^[?!.,:;)]/.test(fragment) ? fragment : ` ${fragment}`;
}

export function PageHero({
  title,
  accent,
  titleAfter,
  eyebrow,
  subtitle,
  image,
  imageAlt = "",
  crumbs,
  children,
  size = "md",
  align = "left",
}: PageHeroProps) {
  return (
    <section
      className={`relative isolate flex flex-col justify-end overflow-hidden bg-ink-950 ${sizes[size]}`}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/40"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink-950/80 to-transparent"
          />
        </>
      ) : null}

      <div
        className={`container-page ${align === "center" ? "text-center" : ""}`}
      >
        {crumbs ? <Breadcrumbs items={crumbs} /> : null}

        {eyebrow ? (
          <p
            className={`mb-3 text-[11.5px] font-semibold tracking-[0.18em] text-brand-400 uppercase ${
              crumbs ? "mt-5" : ""
            }`}
          >
            {eyebrow}
          </p>
        ) : null}

        <h1
          className={`text-[32px] leading-[1.12] font-bold text-white sm:text-[42px] lg:text-[52px] ${
            align === "center" ? "mx-auto max-w-[18ch]" : "max-w-[20ch]"
          }`}
        >
          {title}
          {accent ? (
            <span className="text-brand-500">{lead(accent)}</span>
          ) : null}
          {titleAfter ? <span>{lead(titleAfter)}</span> : null}
        </h1>

        {subtitle ? (
          <div
            className={`mt-4 text-[14px] leading-relaxed text-white/75 sm:text-[15px] ${
              align === "center" ? "mx-auto max-w-[62ch]" : "max-w-[58ch]"
            }`}
          >
            {subtitle}
          </div>
        ) : null}

        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
