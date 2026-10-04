"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Field, Select, TextArea, TextInput } from "@/components/ui/Field";
import { CheckIcon } from "@/components/ui/Icons";
import { bedRanges } from "@/data/partners";

type FieldName =
  | "hostel"
  | "city"
  | "country"
  | "website"
  | "contact"
  | "email"
  | "phone"
  | "beds"
  | "message";

type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const emptyValues: Values = {
  hostel: "",
  city: "",
  country: "",
  website: "",
  contact: "",
  email: "",
  phone: "",
  beds: "",
  message: "",
};

/** Deliberately forgiving: enough to catch typos, not enough to reject real input. */
function validate(values: Values): Errors {
  const errors: Errors = {};

  if (!values.hostel.trim()) errors.hostel = "Tell us what the hostel is called.";
  if (!values.city.trim()) errors.city = "Which city is the hostel in?";
  if (!values.country.trim()) errors.country = "Which country is the hostel in?";
  if (!values.contact.trim())
    errors.contact = "We need a name to address the reply to.";

  const email = values.email.trim();
  if (!email) errors.email = "An email address is required so we can reply.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errors.email = "That does not look like an email address.";

  if (!values.beds) errors.beds = "Pick the range that fits your property.";

  return errors;
}

export function PartnerApplicationForm() {
  const uid = useId();
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const fieldId = (name: FieldName) => `${uid}-${name}`;
  const errorId = (name: FieldName) => `${uid}-${name}-error`;

  const update = (name: FieldName) => (
    event: { target: { value: string } }
  ) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    setSubmitted(true);
  }

  function reset() {
    setValues(emptyValues);
    setErrors({});
    setSubmitted(false);
    // Hand focus back to the top of the fresh form.
    requestAnimationFrame(() => formRef.current?.querySelector("input")?.focus());
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-ink-100 bg-white p-7 text-center shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)] sm:p-10"
      >
        <span
          aria-hidden
          className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-50 text-brand-600"
        >
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="mt-5 text-[19px] font-bold text-ink-900 sm:text-[21px]">
          Application received
        </h3>
        <p className="mx-auto mt-2 max-w-[52ch] text-[13.5px] leading-relaxed text-ink-500">
          Thanks{values.contact.trim() ? `, ${values.contact.trim()}` : ""} — we
          have everything we need to start a conversation about{" "}
          {values.hostel.trim() || "your hostel"}.
        </p>

        <ol className="mx-auto mt-7 max-w-[46ch] space-y-3 text-left">
          {[
            "A member of the team reads the application and checks the hostel is a fit for the routes we are opening first.",
            "You get an email within a few working days, from a named person rather than a no-reply address.",
            "If it is a fit, we agree the terms together and send your hostel's QR code kit and the reception guide.",
          ].map((line, index) => (
            <li key={line} className="flex gap-3">
              <span
                aria-hidden
                className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink-900 text-[11px] font-bold text-white"
              >
                {index + 1}
              </span>
              <span className="text-[12.5px] leading-relaxed text-ink-600">
                {line}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-8">
          <Button type="button" variant="outline" onClick={reset}>
            Submit another application
          </Button>
        </div>

        <p className="mx-auto mt-6 max-w-[54ch] text-[11.5px] leading-relaxed text-ink-400">
          This is a front-end demo. Nothing was sent anywhere and no details were
          stored — the confirmation above shows what a real submission would do.
        </p>
      </div>
    );
  }

  const errorList = (Object.keys(errors) as FieldName[]).filter(
    (name) => errors[name]
  );

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink-100 bg-white p-6 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)] sm:p-8"
    >
      {errorList.length > 0 ? (
        <div
          role="alert"
          className="mb-6 rounded-lg border border-brand-200 bg-brand-50 px-4 py-3"
        >
          <p className="text-[12.5px] font-semibold text-brand-700">
            {errorList.length === 1
              ? "One field still needs attention."
              : `${errorList.length} fields still need attention.`}
          </p>
          <ul className="mt-1.5 space-y-1">
            {errorList.map((name) => (
              <li key={name} className="text-[12px] text-brand-700">
                {errors[name]}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Hostel name" htmlFor={fieldId("hostel")} required>
          <TextInput
            id={fieldId("hostel")}
            name="hostel"
            value={values.hostel}
            onChange={update("hostel")}
            autoComplete="organization"
            placeholder="Casa Naranja Hostel"
            aria-required
            aria-invalid={errors.hostel ? true : undefined}
            aria-describedby={errors.hostel ? errorId("hostel") : undefined}
          />
          <FieldError id={errorId("hostel")} message={errors.hostel} />
        </Field>

        <Field label="City" htmlFor={fieldId("city")} required>
          <TextInput
            id={fieldId("city")}
            name="city"
            value={values.city}
            onChange={update("city")}
            autoComplete="address-level2"
            placeholder="Valencia"
            aria-required
            aria-invalid={errors.city ? true : undefined}
            aria-describedby={errors.city ? errorId("city") : undefined}
          />
          <FieldError id={errorId("city")} message={errors.city} />
        </Field>

        <Field label="Country" htmlFor={fieldId("country")} required>
          <TextInput
            id={fieldId("country")}
            name="country"
            value={values.country}
            onChange={update("country")}
            autoComplete="country-name"
            placeholder="Spain"
            aria-required
            aria-invalid={errors.country ? true : undefined}
            aria-describedby={errors.country ? errorId("country") : undefined}
          />
          <FieldError id={errorId("country")} message={errors.country} />
        </Field>

        <Field
          label="Website"
          htmlFor={fieldId("website")}
          hint="Your own site or a listing page — whichever shows the hostel best."
        >
          <TextInput
            id={fieldId("website")}
            name="website"
            type="url"
            inputMode="url"
            value={values.website}
            onChange={update("website")}
            autoComplete="url"
            placeholder="https://"
          />
        </Field>

        <Field label="Contact name" htmlFor={fieldId("contact")} required>
          <TextInput
            id={fieldId("contact")}
            name="contact"
            value={values.contact}
            onChange={update("contact")}
            autoComplete="name"
            placeholder="Who should we reply to?"
            aria-required
            aria-invalid={errors.contact ? true : undefined}
            aria-describedby={errors.contact ? errorId("contact") : undefined}
          />
          <FieldError id={errorId("contact")} message={errors.contact} />
        </Field>

        <Field label="Email" htmlFor={fieldId("email")} required>
          <TextInput
            id={fieldId("email")}
            name="email"
            type="email"
            inputMode="email"
            value={values.email}
            onChange={update("email")}
            autoComplete="email"
            placeholder="name@hostel.com"
            aria-required
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? errorId("email") : undefined}
          />
          <FieldError id={errorId("email")} message={errors.email} />
        </Field>

        <Field
          label="Phone / WhatsApp"
          htmlFor={fieldId("phone")}
          hint="Optional, but it is usually the fastest way to get in touch."
        >
          <TextInput
            id={fieldId("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            value={values.phone}
            onChange={update("phone")}
            autoComplete="tel"
            placeholder="+34 600 000 000"
          />
        </Field>

        <Field label="Number of beds" htmlFor={fieldId("beds")} required>
          <Select
            id={fieldId("beds")}
            name="beds"
            value={values.beds}
            onChange={update("beds")}
            aria-required
            aria-invalid={errors.beds ? true : undefined}
            aria-describedby={errors.beds ? errorId("beds") : undefined}
          >
            <option value="">Select a range</option>
            {bedRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </Select>
          <FieldError id={errorId("beds")} message={errors.beds} />
        </Field>

        <Field
          label="Message"
          htmlFor={fieldId("message")}
          className="sm:col-span-2"
        >
          <TextArea
            id={fieldId("message")}
            name="message"
            rows={5}
            value={values.message}
            onChange={update("message")}
            placeholder="Free space for you to leave a note."
          />
        </Field>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <Button type="submit" variant="primary" size="lg">
          Send application
        </Button>
        <p className="text-[11.5px] text-ink-400">
          <span aria-hidden className="text-brand-500">
            *
          </span>{" "}
          marks a required field.
        </p>
      </div>

      <p className="mt-5 rounded-lg border border-ink-100 bg-ink-50 px-4 py-3 text-[11.5px] leading-relaxed text-ink-500">
        Submitting this form is a front-end demo for this preview build. Nothing
        is sent anywhere, no data leaves your browser and no account is created.
      </p>
    </form>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-[11.5px] font-medium text-brand-600">
      {message}
    </p>
  );
}
