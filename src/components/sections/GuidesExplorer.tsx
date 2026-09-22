"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { GuideCard } from "@/components/cards/GuideCard";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/Misc";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { guides, type Guide } from "@/data/guides";

type Category = Guide["category"];
type Filter = Category | "all";

/** Distinct categories, in the order the guides are written. */
const categories: Category[] = [
  ...new Set(guides.map((guide) => guide.category)),
];

export function GuidesExplorer() {
  const params = useSearchParams();
  const requested = params.get("category");
  const initial: Filter =
    requested && categories.includes(requested as Category)
      ? (requested as Category)
      : "all";

  const [category, setCategory] = useState<Filter>(initial);

  const results = useMemo(
    () =>
      category === "all"
        ? guides
        : guides.filter((guide) => guide.category === category),
    [category]
  );

  return (
    <section
      aria-labelledby="all-guides"
      className="container-page pt-12 pb-14 lg:pt-14"
    >
      <SectionHeading
        id="all-guides"
        title="All travel"
        accent="guides"
        subtitle="Filter by what you need right now — a city, a budget, or the practical detail nobody tells you before you land."
      />

      <div>
        <h3 className="sr-only">Filter by category</h3>
        <ul className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          {(["all", ...categories] as Filter[]).map((option) => {
            const active = category === option;
            return (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => setCategory(option)}
                  aria-pressed={active}
                  className={`rounded-full border px-4 py-1.5 text-[12.5px] whitespace-nowrap transition-colors ${
                    active
                      ? "border-brand-500 bg-brand-500 font-semibold text-white"
                      : "border-ink-200 bg-white text-ink-600 hover:border-ink-300 hover:text-ink-900"
                  }`}
                >
                  {option === "all" ? "All" : option}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mt-6 text-[12.5px] text-ink-500" role="status">
        {results.length} {results.length === 1 ? "guide" : "guides"}
      </p>

      {results.length > 0 ? (
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((guide) => (
            <li key={guide.slug}>
              <GuideCard guide={guide} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-4">
          <EmptyState
            title="No guides in that category yet"
            description="We are writing more as the network grows. Clear the filter to read everything published so far."
            action={
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCategory("all")}
              >
                Clear filter
              </Button>
            }
          />
        </div>
      )}
    </section>
  );
}
