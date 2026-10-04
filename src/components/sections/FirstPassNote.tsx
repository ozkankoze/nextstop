import Link from "next/link";
import { DoodleArrow } from "@/components/ui/Icons";

/**
 * The pointer towards the starter-pass generator, for travellers who are not
 * standing in a partner hostel yet. Used under the scan diagram and at the
 * bottom of /next-pass and /how-it-works, so the wording stays identical.
 */
export function FirstPassNote({
  tone = "onDark",
  className = "",
}: {
  /** `onDark` sits on the ink panels, `onLight` on the white page. */
  tone?: "onDark" | "onLight";
  className?: string;
}) {
  const isDark = tone === "onDark";

  return (
    <div
      className={`rounded-xl border px-5 py-4 text-center ${
        isDark
          ? "border-white/10 bg-white/5"
          : "border-ink-100 bg-white shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)]"
      } ${className}`}
    >
      <p
        className={`text-[13px] leading-relaxed ${
          isDark ? "text-white/80" : "text-ink-600"
        }`}
      >
        Do you want to obtain a NEXT PASS to make the first reservation of your
        journey?
      </p>

      <p className="mt-2 flex items-end justify-center gap-1.5">
        <DoodleArrow
          flip
          className={`h-7 w-9 shrink-0 ${
            isDark ? "text-brand-400" : "text-brand-500"
          }`}
        />
        <Link
          href="/next-pass/first-pass"
          className={`text-[14px] font-semibold underline-offset-2 hover:underline ${
            isDark ? "text-brand-400" : "text-brand-500"
          }`}
        >
          Click here!
        </Link>
      </p>
    </div>
  );
}
