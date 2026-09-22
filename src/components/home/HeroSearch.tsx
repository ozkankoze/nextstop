"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState, type FormEvent } from "react";
import {
  CalendarIcon,
  ChevronDownIcon,
  MapPinIcon,
  SearchIcon,
  UserIcon,
} from "@/components/ui/Icons";
import { popularSearchDestinations } from "@/data/destinations";
import { resolveSearchHref, searchDestinations } from "@/lib/search";

export function HeroSearch() {
  const ids = useId();
  const router = useRouter();

  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  /** Set when a suggestion is chosen, so the list does not immediately reopen. */
  const [chosen, setChosen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const listboxId = `${ids}-listbox`;

  const results = useMemo(
    () => (chosen ? [] : searchDestinations(destination)),
    [destination, chosen]
  );
  const showList = open && destination.trim().length > 0 && !chosen;
  const hasResults = results.length > 0;

  // Close the dropdown when focus or a click leaves the search bar.
  useEffect(() => {
    if (!showList) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [showList]);

  const choose = (index: number) => {
    const result = results[index];
    if (!result) return;
    setDestination(result.value);
    setChosen(true);
    setOpen(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      if (!showList || !hasResults) {
        if (destination.trim()) setOpen(true);
        return;
      }
      event.preventDefault();
      const delta = event.key === "ArrowDown" ? 1 : -1;
      setActiveIndex((current) => {
        const next = current + delta;
        if (next < 0) return results.length - 1;
        if (next >= results.length) return 0;
        return next;
      });
      return;
    }

    if (event.key === "Enter" && showList && activeIndex >= 0) {
      event.preventDefault();
      const result = results[activeIndex];
      choose(activeIndex);
      router.push(result.href);
    }
  };

  // Demo only — search routes to the destination page rather than a results API.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!destination.trim()) {
      router.push("/destinations");
      return;
    }
    router.push(resolveSearchHref(destination));
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        role="search"
        aria-label="Search hostels"
        className="flex flex-col rounded-2xl bg-white p-2 shadow-[0_18px_45px_-18px_rgba(6,9,15,0.55)] lg:flex-row lg:items-stretch"
      >
        {/* Destination + autocomplete */}
        <div ref={wrapperRef} className="relative flex flex-1 items-center gap-3 px-4 py-3.5 lg:px-5">
          <MapPinIcon className="h-[18px] w-[18px] shrink-0 text-brand-500" />
          <label htmlFor={`${ids}-dest`} className="sr-only">
            Destination
          </label>
          <input
            id={`${ids}-dest`}
            name="destination"
            type="text"
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
              setChosen(false);
              setOpen(true);
              setActiveIndex(-1);
            }}
            onFocus={() => {
              if (destination.trim() && !chosen) setOpen(true);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Where are you going next?"
            autoComplete="off"
            role="combobox"
            aria-expanded={showList}
            aria-controls={showList ? listboxId : undefined}
            aria-autocomplete="list"
            aria-activedescendant={
              activeIndex >= 0 ? `${ids}-option-${activeIndex}` : undefined
            }
            className="w-full bg-transparent text-[13.5px] text-ink-900 outline-none placeholder:text-ink-400"
          />

          {showList ? (
            <div className="absolute top-full left-0 z-30 mt-2 w-full min-w-[280px] overflow-hidden rounded-xl border border-ink-100 bg-white py-1.5 shadow-[0_22px_50px_-20px_rgba(6,9,15,0.55)] lg:w-[360px]">
              {hasResults ? (
                <ul id={listboxId} role="listbox" aria-label="Destination suggestions">
                  {results.map((result, index) => (
                    <li key={result.key} role="presentation">
                      <button
                        type="button"
                        id={`${ids}-option-${index}`}
                        role="option"
                        aria-selected={index === activeIndex}
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => {
                          choose(index);
                          router.push(result.href);
                        }}
                        className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                          index === activeIndex ? "bg-brand-50" : "bg-white"
                        }`}
                      >
                        <span
                          aria-hidden
                          className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${
                            result.type === "country"
                              ? "bg-ink-900 text-white"
                              : "bg-brand-50 text-brand-500"
                          }`}
                        >
                          <MapPinIcon className="h-3.5 w-3.5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-[13px] font-medium text-ink-900">
                            {result.label}
                          </span>
                          <span className="block truncate text-[11.5px] text-ink-400">
                            {result.sublabel}
                          </span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-4 py-5 text-center">
                  <p className="text-[13px] font-medium text-ink-900">
                    No destinations match “{destination.trim()}”
                  </p>
                  <p className="mt-1 text-[11.5px] text-ink-400">
                    We are launching in Spain and the Balkans.
                  </p>
                  <Link
                    href="/destinations"
                    className="mt-3 inline-block text-[12px] font-semibold text-brand-500 hover:underline"
                  >
                    Browse all destinations
                  </Link>
                </div>
              )}
            </div>
          ) : null}
        </div>

        <span
          aria-hidden
          className="mx-4 h-px bg-ink-100 lg:mx-0 lg:my-3 lg:h-auto lg:w-px"
        />

        <DateField
          id={`${ids}-in`}
          name="checkIn"
          label="Check-in"
          value={checkIn}
          onChange={setCheckIn}
        />

        <span
          aria-hidden
          className="mx-4 h-px bg-ink-100 lg:mx-0 lg:my-3 lg:h-auto lg:w-px"
        />

        <DateField
          id={`${ids}-out`}
          name="checkOut"
          label="Check-out"
          value={checkOut}
          min={checkIn || undefined}
          onChange={setCheckOut}
        />

        <span
          aria-hidden
          className="mx-4 h-px bg-ink-100 lg:mx-0 lg:my-3 lg:h-auto lg:w-px"
        />

        <div className="flex items-center gap-3 px-4 py-2.5 lg:w-[150px] lg:px-5">
          <UserIcon className="h-[18px] w-[18px] shrink-0 text-ink-500" />
          <div className="relative w-full">
            <label
              htmlFor={`${ids}-guests`}
              className="block text-[11px] leading-tight text-ink-400"
            >
              Guests
            </label>
            <select
              id={`${ids}-guests`}
              name="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full cursor-pointer appearance-none bg-transparent pr-5 text-[13.5px] font-medium text-ink-900 outline-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={String(n)}>
                  {n} {n === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
            <ChevronDownIcon
              aria-hidden
              className="pointer-events-none absolute right-0 bottom-1 h-4 w-4 text-ink-400"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-brand-600 lg:mt-0 lg:self-center"
        >
          <SearchIcon className="h-4 w-4" />
          Search
        </button>
      </form>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="mr-1 text-[12.5px] text-white/70">
          Popular searches:
        </span>
        {popularSearchDestinations.map((city) => (
          <Link
            key={city.slug}
            href={`/destinations/${city.slug}`}
            className="rounded-full border border-white/30 px-4 py-1.5 text-[12.5px] text-white/90 transition-colors hover:border-white/60 hover:bg-white/10"
          >
            {city.city}
          </Link>
        ))}
      </div>
    </div>
  );
}

type DateFieldProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  min?: string;
  onChange: (value: string) => void;
};

function DateField({ id, name, label, value, min, onChange }: DateFieldProps) {
  return (
    <div className="flex flex-1 items-center gap-3 px-4 py-3.5 lg:max-w-[180px] lg:px-5">
      <CalendarIcon className="h-[18px] w-[18px] shrink-0 text-ink-500" />
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="relative w-full">
        <input
          id={id}
          name={name}
          type="date"
          value={value}
          min={min}
          onChange={(e) => onChange(e.target.value)}
          className={`date-field w-full cursor-pointer bg-transparent text-[13.5px] outline-none ${
            value ? "text-ink-900" : "text-transparent"
          }`}
        />
        {!value ? (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center text-[13.5px] text-ink-400"
          >
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}
