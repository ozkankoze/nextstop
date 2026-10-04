import Image from "next/image";
import Link from "next/link";
import { HeroSearch } from "@/components/home/HeroSearch";
import { DoodleArrow } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[620px] flex-col justify-end overflow-hidden bg-ink-950 pt-[104px] pb-12 sm:min-h-[680px] lg:min-h-[720px] lg:pb-14"
    >
      <Image
        src="https://images.unsplash.com/photo-1586022045497-31fcf76fa6cc?auto=format&fit=crop&w=2400&q=85"
        alt="Backpacker looking out over a lakeside town at sunset"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      {/* Readability layers — dark from the left and along the bottom */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/70 to-ink-950/25"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink-950/85 to-transparent"
      />

      <div className="container-page">
        <h1
          id="hero-title"
          className="max-w-[16ch] text-[40px] leading-[1.08] font-bold text-white sm:text-[54px] lg:text-[64px]"
        >
          Your Journey.
          <br />
          Your <span className="text-brand-500">NEXT STOP.</span>
        </h1>

        <p className="mt-5 max-w-[62ch] text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
          Together, we build the first-ever backpacker ecosystem: better value
          for guests, more profit for hostels, and independence from big booking
          platforms.
        </p>

        <div className="mt-8 lg:mt-10">
          <HeroSearch />
        </div>

        {/* Booking prerequisite — the one thing a first-time visitor must know */}
        <div className="mt-6 flex items-start gap-3 sm:gap-4">
          <DoodleArrow className="-mt-1 h-10 w-14 shrink-0 text-brand-500 sm:h-12 sm:w-16" />
          <p className="max-w-[58ch] text-[12.5px] leading-relaxed text-white/75 sm:text-[13px]">
            Booking requires a valid{" "}
            <Link
              href="/next-pass"
              className="font-semibold text-brand-400 underline-offset-2 hover:underline"
            >
              NEXT PASS
            </Link>
            , available only at your current NEXT STOP partner hostel.
          </p>
        </div>
      </div>
    </section>
  );
}
