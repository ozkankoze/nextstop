"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Field, TextInput } from "@/components/ui/Field";
import { PriceCompare, SavingsBadge } from "@/components/ui/PriceCompare";
import { CheckCircleIcon, TicketIcon } from "@/components/ui/Icons";
import type { Hostel } from "@/data/hostels";

export function HostelBookingPanel({ hostel }: { hostel: Hostel }) {
  const [code, setCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Demo only — there is no booking or payment backend yet.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-xl border border-ink-100 bg-white p-5 shadow-[0_2px_14px_-8px_rgba(6,9,15,0.3)]">
      <p className="text-[12px] text-ink-500">Dorm bed from</p>
      <div className="mt-3">
        <PriceCompare
          regularPrice={hostel.regularPrice}
          nextStopPrice={hostel.nextStopPrice}
          size="detail"
        />
      </div>
      <SavingsBadge
        regularPrice={hostel.regularPrice}
        nextStopPrice={hostel.nextStopPrice}
        className="mt-3"
      />

      {submitted ? (
        <div
          role="status"
          className="mt-5 rounded-lg border border-brand-200 bg-brand-50 p-4"
        >
          <p className="flex items-center gap-2 text-[13px] font-semibold text-brand-700">
            <CheckCircleIcon aria-hidden className="h-4 w-4" />
            Booking is not live yet
          </p>
          <p className="mt-2 text-[12px] leading-relaxed text-ink-600">
            This is a preview of the NEXT STOP network. Nothing was submitted
            and no code was checked. When booking opens, the pass on your phone
            will unlock {hostel.name}&apos;s NEXT STOP rate here.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setCode("");
            }}
            className="mt-3 text-[12px] font-semibold text-brand-600 hover:underline"
          >
            Back to the form
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5">
          <Field
            label="NEXT PASS code"
            htmlFor="next-pass-code"
            hint="Shown on your phone after you scan the QR code at your current partner hostel."
          >
            <TextInput
              id="next-pass-code"
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="NS-VLC-0000"
              autoComplete="off"
              inputMode="text"
            />
          </Field>

          <Button type="submit" className="mt-4 w-full" size="lg">
            <TicketIcon aria-hidden className="h-4 w-4" />
            Book with NEXT PASS
          </Button>

          <p className="mt-3 text-center text-[11.5px] text-ink-400">
            No account needed ·{" "}
            <Link href="/next-pass" className="text-brand-500 hover:underline">
              What is a NEXT PASS?
            </Link>
          </p>
        </form>
      )}
    </div>
  );
}
