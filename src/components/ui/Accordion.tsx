"use client";

import { useId, useState } from "react";
import { MinusIcon, PlusIcon } from "@/components/ui/Icons";

export type AccordionItem = {
  id: string;
  question: string;
  answer: string[];
};

export function Accordion({
  items,
  defaultOpenId,
}: {
  items: AccordionItem[];
  defaultOpenId?: string;
}) {
  const uid = useId();
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <div className="divide-y divide-ink-100 overflow-hidden rounded-xl border border-ink-100 bg-white">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${uid}-${item.id}`;

        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-ink-50/60"
              >
                <span className="text-[14px] font-semibold text-ink-900">
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-colors ${
                    isOpen
                      ? "bg-brand-500 text-white"
                      : "bg-brand-50 text-brand-500"
                  }`}
                >
                  {isOpen ? (
                    <MinusIcon className="h-3.5 w-3.5" strokeWidth={2.25} />
                  ) : (
                    <PlusIcon className="h-3.5 w-3.5" strokeWidth={2.25} />
                  )}
                </span>
              </button>
            </h3>

            <div id={panelId} hidden={!isOpen} className="px-5 pb-5">
              {item.answer.map((paragraph, index) => (
                <p
                  key={index}
                  className="max-w-[72ch] text-[13.5px] leading-relaxed text-ink-500 not-first:mt-3"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
