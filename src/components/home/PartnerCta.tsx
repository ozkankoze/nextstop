import Image from "next/image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import {
  ArrowRightIcon,
  GlobeIcon,
  TrendingUpIcon,
  UsersIcon,
} from "@/components/ui/Icons";
import { partnerPerks, type PartnerPerkIcon } from "@/data/next-pass";

const perkIcons: Record<
  PartnerPerkIcon,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  bookings: TrendingUpIcon,
  globe: GlobeIcon,
  community: UsersIcon,
};

export function PartnerCta() {
  return (
    <section aria-labelledby="partner-cta" className="container-page py-14">
      <div className="relative isolate overflow-hidden rounded-2xl bg-ink-950">
        <Image
          src="https://images.unsplash.com/photo-1651946827402-e233188fd59c?auto=format&fit=crop&w=1600&q=80"
          alt="Travellers celebrating together at sunset"
          fill
          sizes="(min-width: 1240px) 1160px, 100vw"
          className="-z-10 object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/35"
        />

        <div className="flex flex-col gap-8 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-11">
          <div className="max-w-[44ch]">
            <h2
              id="partner-cta"
              className="text-[24px] font-bold text-white sm:text-[27px]"
            >
              Become a <span className="text-brand-500">NEXT STOP</span> Partner
            </h2>
            <p className="mt-3 text-[13.5px] leading-relaxed text-white/75">
              Join our global hostel network and connect with travelers from
              around the world.
            </p>
            <Link
              href="/partners"
              className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Join as a Partner
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <ul className="flex flex-wrap gap-8 sm:gap-10 lg:shrink-0">
            {partnerPerks.map((perk) => {
              const Icon = perkIcons[perk.icon];
              return (
                <li
                  key={perk.label}
                  className="flex w-[92px] flex-col items-center gap-2.5 text-center"
                >
                  <span
                    aria-hidden
                    className="grid h-11 w-11 place-items-center rounded-full bg-brand-100/95 text-brand-600"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-[11.5px] leading-snug text-white/85">
                    {perk.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
