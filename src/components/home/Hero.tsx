import Image from "next/image";
import { HeroSearch } from "@/components/home/HeroSearch";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[620px] flex-col justify-end overflow-hidden bg-ink-950 pt-[104px] pb-12 sm:min-h-[660px] lg:min-h-[700px] lg:pb-14"
    >
      <Image
        src="https://images.unsplash.com/photo-1586022045497-31fcf76fa6cc?auto=format&fit=crop&w=2000&q=80"
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

        <p className="mt-5 max-w-[46ch] text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
          Discover trusted hostels, get local recommendations and book your next
          adventure.
        </p>

        <div className="mt-8 lg:mt-10">
          <HeroSearch />
        </div>
      </div>
    </section>
  );
}
