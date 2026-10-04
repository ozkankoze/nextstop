"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import type { ComponentType, SVGProps } from "react";
import { Logo } from "@/components/ui/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/ui/Icons";
import {
  footerColumns,
  siteTagline,
  socialLinks,
  type SocialLink,
} from "@/data/site";

const socialIcons: Record<
  SocialLink["icon"],
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
  youtube: YouTubeIcon,
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Demo only — no newsletter backend is wired up yet.
  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-ink-950 text-white">
      <div className="container-page py-12 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1.4fr] lg:gap-8">
          <div>
            <Logo variant="full" height={74} />
            <p className="mt-4 max-w-[28ch] text-[12px] leading-relaxed text-ink-400">
              {siteTagline}
            </p>
            <ul className="mt-5 flex gap-2.5">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={social.label}
                      className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-ink-300 transition-colors hover:bg-brand-500 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-labelledby={`footer-${column.title}`}>
              <h2
                id={`footer-${column.title}`}
                className="text-[13px] font-semibold text-white"
              >
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[12px] text-ink-400 transition-colors hover:text-brand-500"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-[13px] font-semibold text-white">Newsletter</h2>
            <p className="mt-4 text-[12px] leading-relaxed text-ink-400">
              Get travel tips and exclusive offers in your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full rounded-lg border border-white/12 bg-white/5 px-3.5 py-2.5 text-[12px] text-white outline-none transition-colors placeholder:text-ink-500 focus:border-brand-500"
              />
              <button
                type="submit"
                className="mt-2.5 w-full rounded-lg bg-brand-500 px-4 py-2.5 text-[12.5px] font-semibold text-white transition-colors hover:bg-brand-600"
              >
                Subscribe
              </button>
              <p
                role="status"
                className={`mt-2 text-[11.5px] text-brand-300 ${
                  subscribed ? "" : "sr-only"
                }`}
              >
                {subscribed ? "Thanks! You're on the list." : ""}
              </p>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <p className="container-page py-5 text-center text-[11.5px] text-ink-500">
          © {new Date().getFullYear()} NEXT STOP. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
