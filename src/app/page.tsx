import { Hero } from "@/components/home/Hero";
import { PopularDestinations } from "@/components/home/PopularDestinations";
import { FoundingPartnerHostels } from "@/components/home/FoundingPartnerHostels";
import { HowNextPassWorks } from "@/components/home/HowNextPassWorks";
import { PartnerCta } from "@/components/home/PartnerCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PopularDestinations />
      <FoundingPartnerHostels />
      <HowNextPassWorks />
      <PartnerCta />
    </>
  );
}
