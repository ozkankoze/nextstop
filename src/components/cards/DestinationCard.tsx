import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ChevronRightIcon, MapPinIcon } from "@/components/ui/Icons";
import type { Destination } from "@/data/destinations";
import { countHostelsByDestination } from "@/data/hostels";

/**
 * A soft brand-pink cast over destination photography, so the grid reads as
 * NEXT STOP rather than as a generic stock-photo wall. `soft-light` keeps the
 * original detail and only shifts the colour temperature.
 */
function BrandTint() {
  return (
    <span
      aria-hidden
      className="absolute inset-0 bg-gradient-to-tr from-brand-600/70 via-brand-500/25 to-transparent mix-blend-soft-light transition-opacity duration-500 group-hover:opacity-60"
    />
  );
}

type DestinationCardProps = {
  destination: Destination;
  /** `compact` is the home-page row; `full` is the /destinations grid. */
  variant?: "compact" | "full";
};

export function DestinationCard({
  destination,
  variant = "compact",
}: DestinationCardProps) {
  const { slug, city, country, image, alt } = destination;
  const href = `/destinations/${slug}`;

  if (variant === "compact") {
    return (
      <Link
        href={href}
        className="group photo-fallback relative block aspect-5/4 overflow-hidden rounded-xl"
      >
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 230px, (min-width: 1024px) 20vw, (min-width: 640px) 32vw, 48vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <BrandTint />
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-ink-950/5"
        />
        <span
          aria-hidden
          className="absolute top-2.5 left-2.5 grid h-7 w-7 place-items-center rounded-lg bg-brand-500 text-white"
        >
          <MapPinIcon className="h-3.5 w-3.5" />
        </span>
        <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3">
          <span className="min-w-0">
            <span className="block truncate text-[14px] font-semibold text-white">
              {city}
            </span>
            <span className="block text-[11px] leading-tight text-white/70">
              {country}
            </span>
          </span>
          <span
            aria-hidden
            className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-ink-900 transition-transform duration-200 group-hover:translate-x-0.5"
          >
            <ChevronRightIcon className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
        </span>
      </Link>
    );
  }

  const hostelCount = countHostelsByDestination(slug);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink-100 bg-white shadow-[0_2px_10px_-4px_rgba(6,9,15,0.12)] transition-shadow duration-200 hover:shadow-[0_14px_34px_-16px_rgba(6,9,15,0.4)]">
      <Link
        href={href}
        className="photo-fallback relative block aspect-16/10 overflow-hidden"
      >
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 290px, (min-width: 1024px) 31vw, (min-width: 640px) 46vw, 92vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <BrandTint />
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent"
        />
        <span
          aria-hidden
          className="absolute top-3 left-3 grid h-7 w-7 place-items-center rounded-lg bg-brand-500 text-white"
        >
          <MapPinIcon className="h-3.5 w-3.5" />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-[16px] font-semibold text-ink-900">
          <Link href={href} className="after:absolute">
            {city}
          </Link>
        </h3>
        <p className="mt-0.5 text-[12px] text-ink-500">{country}</p>
        <p className="mt-3 text-[12px] text-ink-500">
          <span className="font-semibold text-ink-900">{hostelCount}</span>{" "}
          {hostelCount === 1 ? "hostel" : "hostels"} in the network
        </p>

        <Link
          href={href}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ink-900 px-4 py-2.5 text-[12.5px] font-medium text-white transition-colors hover:bg-ink-800"
        >
          Explore
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
