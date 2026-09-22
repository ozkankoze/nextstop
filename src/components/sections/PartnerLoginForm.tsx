"use client";

import Link from "next/link";
import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Field, TextInput } from "@/components/ui/Field";
import { EyeIcon, EyeOffIcon, LockIcon } from "@/components/ui/Icons";

export function PartnerLoginForm() {
  const uid = useId();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState(false);

  const emailId = `${uid}-email`;
  const passwordId = `${uid}-password`;
  const rememberId = `${uid}-remember`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Never pretend to authenticate: there is no partner portal behind this yet.
    setNotice(true);
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="grid gap-5">
        <Field label="Email" htmlFor={emailId} required>
          <TextInput
            id={emailId}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="name@hostel.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-required
          />
        </Field>

        <Field label="Password" htmlFor={passwordId} required>
          <div className="relative">
            <TextInput
              id={passwordId}
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Your portal password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="pr-11"
              aria-required
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              aria-controls={passwordId}
              className="absolute inset-y-0 right-0 grid w-11 place-items-center rounded-r-lg text-ink-400 transition-colors hover:text-ink-700"
            >
              {showPassword ? (
                <EyeOffIcon aria-hidden className="h-[18px] w-[18px]" />
              ) : (
                <EyeIcon aria-hidden className="h-[18px] w-[18px]" />
              )}
            </button>
          </div>
        </Field>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <input
            id={rememberId}
            name="remember"
            type="checkbox"
            checked={remember}
            onChange={(event) => setRemember(event.target.checked)}
            className="h-4 w-4 shrink-0 cursor-pointer rounded border-ink-300 accent-brand-500"
          />
          <label
            htmlFor={rememberId}
            className="cursor-pointer text-[12.5px] text-ink-600"
          >
            Remember me
          </label>
        </div>

        <Link
          href="/contact"
          className="text-[12.5px] font-medium text-ink-600 transition-colors hover:text-brand-500"
        >
          Forgot password?
        </Link>
      </div>

      <Button type="submit" variant="primary" size="lg" className="mt-6 w-full">
        <LockIcon aria-hidden className="h-4 w-4" />
        Log in
      </Button>

      {notice ? (
        <p
          role="status"
          className="mt-5 rounded-lg border border-ink-100 bg-ink-50 px-4 py-3 text-[12px] leading-relaxed text-ink-600"
        >
          <span className="font-semibold text-ink-900">
            The partner portal is not live yet.
          </span>{" "}
          There is nothing to sign in to while NEXT STOP is pre-launch, so no
          credentials were checked, sent anywhere or stored — the details you
          typed stayed in this browser tab. Founding partners get portal access
          as soon as it opens.
        </p>
      ) : null}
    </form>
  );
}
