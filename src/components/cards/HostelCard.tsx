"use client";

import { Photo } from "@/components/ui/Photo";
import Link from "next/link";
import { useState } from "react";
import { ArrowRightIcon, HeartIcon, StarIcon } from "@/components/ui/Icons";
import { PriceCompare, SavingsBadge } from "@/components/ui/PriceCompare";
import type { Hostel } from "@/data/hostels";

export function HostelCard({
  hostel,
  regularLabel = "Regular price",
}: {
  hostel: Hostel;
  regularLabel?: string;
}) {
  const [saved, setSaved] = useState(false);
  const href = `/hostels/${hostel.slug}`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-ink-100 bg-white shadow-[0_2px_10px_-4px_rgba(6,9,15,0.12)] transition-shadow duration-200 hover:shadow-[0_14px_34px_-16px_rgba(6,9,15,0.4)]">
      <div className="photo-fallback relative aspect-16/10">
        <Link href={href} className="absolute inset-0 block">
          <Photo
            src={hostel.images[0]}
            alt={hostel.alt}
            fill
            sizes="(min-width: 1024px) 280px, (min-width: 640px) 300px, 80vw"
            className="object-cover"
          />
        </Link>

        <button
          type="button"
          onClick={() => setSaved((v) => !v)}
          aria-pressed={saved}
          aria-label={
            saved
              ? `Remove ${hostel.name} from favourites`
              : `Save ${hostel.name} to favourites`
          }
          className="absolute top-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-white/95 text-ink-700 shadow-sm transition-colors hover:text-brand-500"
        >
          <HeartIcon
            filled={saved}
            className={`h-4 w-4 ${saved ? "text-brand-500" : ""}`}
          />
        </button>

        <p className="pointer-events-none absolute right-3 bottom-3 inline-flex items-center gap-1 rounded-md bg-brand-500 px-2 py-1 text-[11.5px] font-semibold text-white">
          <StarIcon className="h-3 w-3" />
          <span className="sr-only">Guest rating </span>
          {hostel.rating.toFixed(1)}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-[15px] font-semibold text-ink-900">
          <Link href={href} className="transition-colors hover:text-brand-500">
            {hostel.name}
          </Link>
        </h3>
        <p className="mt-0.5 text-[12px] text-ink-500">
          {hostel.city}, {hostel.country}
        </p>
        <p className="mt-1.5 text-[11px] text-ink-400">
          {hostel.distanceToCentreKm} km to centre
          {hostel.distanceToBeachKm !== null
            ? ` · ${hostel.distanceToBeachKm} km to beach`
            : ""}
        </p>

        <div className="mt-4">
          <PriceCompare
            regularPrice={hostel.regularPrice}
            nextStopPrice={hostel.nextStopPrice}
            regularLabel={regularLabel}
          />
        </div>

        <SavingsBadge
          regularPrice={hostel.regularPrice}
          nextStopPrice={hostel.nextStopPrice}
          className="mt-3"
        />

        <Link
          href={href}
          className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ink-900 px-4 py-3 text-[12.5px] font-medium text-white transition-colors hover:bg-ink-800"
        >
          View &amp; Book
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
