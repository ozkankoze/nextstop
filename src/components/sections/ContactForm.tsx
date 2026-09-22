"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Field, Select, TextArea, TextInput } from "@/components/ui/Field";
import { DemoNote } from "@/components/ui/Misc";
import { CheckCircleIcon } from "@/components/ui/Icons";
import { contactSubjects } from "@/data/site";

/**
 * Front-end only contact form. Submitting swaps the form for a success panel;
 * nothing is sent anywhere in this preview build.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-xl border border-ink-100 bg-white p-6 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)] sm:p-8">
        <div role="status">
          <span
            aria-hidden
            className="grid h-12 w-12 place-items-center rounded-full bg-brand-50 text-brand-600"
          >
            <CheckCircleIcon className="h-6 w-6" />
          </span>
          <h3 className="mt-4 text-[19px] font-bold text-ink-900">
            Message sent
          </h3>
          <p className="mt-2 max-w-[56ch] text-[13.5px] leading-relaxed text-ink-600">
            Thanks for writing. This preview shows you the confirmation you
            would get once messaging is switched on.
          </p>
        </div>

        <h4 className="mt-6 text-[15px] font-semibold text-ink-900">
          What happens next
        </h4>
        <ol className="mt-3 space-y-3">
          {[
            "Messages are routed by subject — traveller questions to support, hostel enquiries to the partnerships side.",
            "The reply goes to the email address you entered, written by a person rather than an autoresponder.",
            "If you asked about joining as a hostel, that reply carries the partner application and what we need from you.",
          ].map((step, index) => (
            <li key={step} className="flex gap-3">
              <span
                aria-hidden
                className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink-900 text-[11px] font-bold text-white"
              >
                {index + 1}
              </span>
              <span className="text-[12.5px] leading-relaxed text-ink-600">
                {step}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-6">
          <Button type="button" variant="dark" onClick={() => setSent(false)}>
            Send another message
          </Button>
        </div>

        <DemoNote>
          This is a front-end demo. Nothing was transmitted, stored or emailed —
          the form exists to show the flow while NEXT STOP is in pre-launch.
        </DemoNote>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      className="rounded-xl border border-ink-100 bg-white p-6 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)] sm:p-8"
    >
      <h3 className="text-[15px] font-semibold text-ink-900">
        Send us a message
      </h3>
      <p className="mt-1.5 max-w-[56ch] text-[12.5px] leading-relaxed text-ink-500">
        Fields marked with an asterisk are required. Pick the subject that fits
        best so the message lands with the right person.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="contact-name" required>
          <TextInput
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Ana Ruiz"
          />
        </Field>

        <Field label="Email address" htmlFor="contact-email" required>
          <TextInput
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
          />
        </Field>

        <Field
          label="Subject"
          htmlFor="contact-subject"
          required
          className="sm:col-span-2"
        >
          <Select id="contact-subject" name="subject" required defaultValue="">
            <option value="" disabled>
              Choose a subject
            </option>
            {contactSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </Select>
        </Field>

        <Field
          label="Message"
          htmlFor="contact-message"
          required
          className="sm:col-span-2"
          hint="Tell us where you are, what you are trying to do, and anything we would need to answer properly."
        >
          <TextArea
            id="contact-message"
            name="message"
            rows={6}
            required
            placeholder="Write your message here…"
          />
        </Field>
      </div>

      <div className="mt-6">
        <Button type="submit" variant="primary" size="lg">
          Send message
        </Button>
      </div>

      <DemoNote>
        This is a front-end demo build. Submitting the form shows the
        confirmation state only — nothing is transmitted, stored or emailed.
      </DemoNote>
    </form>
  );
}
