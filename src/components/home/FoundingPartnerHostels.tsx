"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { HostelCard } from "@/components/cards/HostelCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/Icons";
import { featuredHostels } from "@/data/hostels";

export function FoundingPartnerHostels() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
  }, []);

  useEffect(() => {
    syncArrows();
    window.addEventListener("resize", syncArrows);
    return () => window.removeEventListener("resize", syncArrows);
  }, [syncArrows]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 20 : 300;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="founding-partner-hostels"
      className="container-page pt-12 lg:pt-14"
    >
      <SectionHeading
        id="founding-partner-hostels"
        title="Founding Partner"
        accent="Hostels"
        subtitle="The first hostels joining the NEXT STOP network, starting in Valencia."
        action={{ label: "View all hostels", href: "/hostels" }}
      />

      <div className="relative">
        <ul
          ref={trackRef}
          onScroll={syncArrows}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-1"
        >
          {featuredHostels.map((hostel) => (
            <li
              key={hostel.slug}
              className="w-[270px] shrink-0 snap-start sm:w-[300px] lg:w-[calc((100%-60px)/4)]"
            >
              <HostelCard hostel={hostel} />
            </li>
          ))}
        </ul>

        <CarouselButton
          side="left"
          disabled={atStart}
          onClick={() => scrollByCard(-1)}
        />
        <CarouselButton
          side="right"
          disabled={atEnd}
          onClick={() => scrollByCard(1)}
        />
      </div>
    </section>
  );
}

function CarouselButton({
  side,
  disabled,
  onClick,
}: {
  side: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  const isLeft = side === "left";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isLeft ? "Previous hostels" : "Next hostels"}
      className={`absolute top-[30%] z-10 hidden h-9 w-9 place-items-center rounded-full border border-ink-100 bg-white text-ink-700 shadow-[0_6px_18px_-8px_rgba(6,9,15,0.5)] transition-all hover:text-brand-500 disabled:pointer-events-none disabled:opacity-0 sm:grid ${
        isLeft ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
      }`}
    >
      {isLeft ? (
        <ChevronLeftIcon className="h-4 w-4" strokeWidth={2.25} />
      ) : (
        <ChevronRightIcon className="h-4 w-4" strokeWidth={2.25} />
      )}
    </button>
  );
}
