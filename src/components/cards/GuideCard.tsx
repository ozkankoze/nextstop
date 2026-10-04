import { Photo } from "@/components/ui/Photo";
import Link from "next/link";
import { ArrowRightIcon, ClockIcon } from "@/components/ui/Icons";
import { Badge } from "@/components/ui/Misc";
import type { Guide } from "@/data/guides";

export function GuideCard({ guide }: { guide: Guide }) {
  const href = `/guides/${guide.slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink-100 bg-white shadow-[0_2px_10px_-4px_rgba(6,9,15,0.12)] transition-shadow duration-200 hover:shadow-[0_14px_34px_-16px_rgba(6,9,15,0.4)]">
      <Link
        href={href}
        className="photo-fallback relative block aspect-16/10 overflow-hidden"
      >
        <Photo
          src={guide.image}
          alt={guide.alt}
          fill
          sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-2.5">
          <Badge>{guide.category}</Badge>
          <span className="inline-flex items-center gap-1 text-[11.5px] text-ink-400">
            <ClockIcon aria-hidden className="h-3.5 w-3.5" />
            {guide.readingMinutes} min read
          </span>
        </div>

        <h3 className="mt-3 text-[15.5px] font-semibold text-ink-900">
          <Link href={href} className="transition-colors hover:text-brand-500">
            {guide.title}
          </Link>
        </h3>
        <p className="mt-2 text-[12.5px] leading-relaxed text-ink-500">
          {guide.excerpt}
        </p>

        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-500"
        >
          Read guide
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
