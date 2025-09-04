import Image from "next/image";
import TestimonialCard from "../cards/testimonialCard.tsx/testimonialCard";

export default function HeroImageSection() {
  return (
    <div className="hidden lg:block lg:w-1/2 lg:h-full lg:relative 2xl:-mt-16 3xl:-mt-32 4xl:-mt-64">
      <Image
        src="/img/house.png"
        alt="House"
        width={500}
        height={500}
        className="object-cover w-full h-full"
      />

      <div className="absolute top-[-5] left-0 2xl:top-16 3xl:top-20 4xl:top-64">
        <TestimonialCard />
      </div>

      <div className="absolute bottom-0 right-0">
        <Image
          src="/img/trustPilotCard.png"
          alt="Trust Pilot Card"
          width={261}
          height={156}
          className="w-56 2xl:w-[261px]"
        />

        <Image
          src="/img/trustpilot.png"
          alt="Trust Pilot Logo"
          width={82}
          height={20}
          className="absolute top-4.5 right-3 2xl:top-6 2xl:right-4 z-10"
        />
      </div>
    </div>
  );
}
