import type { ComponentType, SVGProps } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  BackpackIcon,
  CalendarCheckIcon,
  FlagIcon,
  MapPinIcon,
  ScanIcon,
  SmartphoneIcon,
} from "@/components/ui/Icons";
import { homeJourney, type StepIcon } from "@/data/next-pass";

const stepIcons: Record<StepIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  backpack: BackpackIcon,
  scan: ScanIcon,
  pass: SmartphoneIcon,
  pin: MapPinIcon,
  calendar: CalendarCheckIcon,
  flag: FlagIcon,
};

export function HowNextPassWorks() {
  return (
    <section
      aria-labelledby="how-next-pass-works"
      className="container-page pt-14 lg:pt-16"
    >
      <SectionHeading
        id="how-next-pass-works"
        title="How"
        accent="NEXT PASS"
        titleAfter="Works"
        subtitle="Scan the QR code at reception and your digital pass appears on your phone, ready for the next city."
      />

      <ol className="mt-8 grid gap-8 lg:grid-cols-5 lg:gap-4">
        {homeJourney.map((item, index) => {
          const Icon = stepIcons[item.icon];
          const isLast = index === homeJourney.length - 1;

          return (
            <li
              key={item.step}
              className="relative flex gap-4 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
            >
              {/* Connector — horizontal on desktop, vertical on mobile */}
              {!isLast ? (
                <>
                  <span
                    aria-hidden
                    className="absolute top-14 left-[27px] h-[calc(100%+2rem-3.5rem)] border-l-2 border-dashed border-brand-200 lg:hidden"
                  />
                  <span
                    aria-hidden
                    className="absolute top-7 right-[calc(-50%+2.25rem)] left-[calc(50%+2.25rem)] hidden border-t-2 border-dashed border-brand-200 lg:block"
                  />
                </>
              ) : null}

              {/* Number + icon */}
              <div className="relative shrink-0">
                <span
                  aria-hidden
                  className="absolute -top-1 -left-1.5 z-10 grid h-5 w-5 place-items-center rounded-full bg-brand-500 text-[10.5px] font-bold text-white"
                >
                  {item.step}
                </span>
                <span
                  aria-hidden
                  className="grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-ink-900"
                >
                  <Icon className="h-6 w-6" />
                </span>
              </div>

              <div className="lg:mt-4">
                <h3 className="text-[13.5px] font-semibold text-ink-900">
                  <span className="sr-only">Step {item.step}: </span>
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-[30ch] text-[12px] leading-relaxed text-ink-500 lg:mx-auto">
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
