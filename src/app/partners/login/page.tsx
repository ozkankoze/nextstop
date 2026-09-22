import type { Metadata } from "next";
import Link from "next/link";
import { LogoImage } from "@/components/ui/Logo";
import { Badge } from "@/components/ui/Misc";
import { ShieldIcon } from "@/components/ui/Icons";
import { PartnerLoginForm } from "@/components/sections/PartnerLoginForm";

export const metadata: Metadata = {
  title: "Partner Login",
  description:
    "Sign in to the NEXT STOP Partner Portal. The portal opens to founding partner hostels when the network launches.",
};

export default function PartnerLoginPage() {
  return (
    <section
      aria-labelledby="partner-login"
      className="flex min-h-[calc(100svh-68px)] flex-col justify-center bg-ink-950 pt-[128px] pb-16 lg:pt-[152px] lg:pb-24"
    >
      <div className="container-page">
        <div className="mx-auto w-full max-w-[440px]">
          <div className="flex flex-col items-center text-center">
            <LogoImage variant="full" priority />
            <p className="mt-5">
              <Badge tone="light">Partner Portal</Badge>
            </p>
          </div>

          <div className="mt-7 rounded-2xl border border-ink-100 bg-white p-6 shadow-[0_18px_50px_-24px_rgba(6,9,15,0.9)] sm:p-8">
            <h1
              id="partner-login"
              className="text-[21px] font-bold text-ink-900 sm:text-[23px]"
            >
              Sign in to the <span className="text-brand-500">Partner</span>{" "}
              Portal
            </h1>
            <p className="mt-2 text-[12.5px] leading-relaxed text-ink-500">
              For hostels already in the NEXT STOP network. Your reception staff
              never need an account — this is for owners and managers.
            </p>

            <div className="mt-6">
              <PartnerLoginForm />
            </div>
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-center text-[11.5px] text-white/45">
            <ShieldIcon aria-hidden className="h-3.5 w-3.5" />
            Preview build — the portal is not connected to any account system.
          </p>

          <p className="mt-5 text-center text-[13px] text-white/70">
            Not a partner yet?{" "}
            <Link
              href="/partners"
              className="font-semibold text-brand-400 underline-offset-4 transition-colors hover:text-brand-300 hover:underline"
            >
              Become a Partner
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
