import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ClockIcon, MapPinIcon } from "@/components/ui/Icons";
import type { TravelRoute } from "@/data/routes";

export function RouteCard({ route }: { route: TravelRoute }) {
  const href = `/routes/${route.slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink-100 bg-white shadow-[0_2px_10px_-4px_rgba(6,9,15,0.12)] transition-shadow duration-200 hover:shadow-[0_14px_34px_-16px_rgba(6,9,15,0.4)]">
      <Link
        href={href}
        className="photo-fallback relative block aspect-16/9 overflow-hidden"
      >
        <Image
          src={route.image}
          alt={route.alt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent"
        />
        <span className="absolute inset-x-0 bottom-0 p-4">
          <span className="block text-[17px] font-semibold text-white">
            {route.name}
          </span>
          <span className="mt-1 block text-[12px] text-white/75">
            {route.summary}
          </span>
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <dl className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-ink-500">
          <div className="flex items-center gap-1.5">
            <ClockIcon aria-hidden className="h-4 w-4 text-brand-500" />
            <dt className="sr-only">Estimated length</dt>
            <dd>{route.days} days</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPinIcon aria-hidden className="h-4 w-4 text-brand-500" />
            <dt className="sr-only">Stops</dt>
            <dd>
              {route.stops.length} {route.stops.length === 1 ? "stop" : "stops"}
            </dd>
          </div>
        </dl>

        <p className="mt-3 text-[12.5px] leading-relaxed text-ink-500">
          {route.intro[0]}
        </p>

        <Link
          href={href}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ink-900 px-4 py-2.5 text-[12.5px] font-medium text-white transition-colors hover:bg-ink-800"
        >
          Explore Route
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
