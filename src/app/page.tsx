import StatCard from "@/components/cards/statCard/statCard";
import SearchBar from "@/components/searchBar/searchBar";
import { RiSearch2Line } from "react-icons/ri";
import Image from "next/image";
import TestimonialCard from "@/components/cards/testimonialCard.tsx/testimonialCard";
import SecondaryButton from "@/components/buttons/secondaryButton";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-hero-start to-hero-end min-h-screen lg:pt-16 2xl:pt-0 px-6 lg:px-0 pt-12">
      <div className="lg:flex lg:flex-row lg:items-center">
        <div className="flex flex-col lg:ml-12 xl:ml-40 gap-y-12 lg:w-1/2">
          <div className="flex flex-col gap-y-8 text-center lg:text-left 2xl:pr-16">
            <h1 className="font-bold lg:text-6xl text-4xl">
              Buy, rent, or sell your property easily
            </h1>
            <p className="font-medium text-xl">
              A great platform to buy, sell, or even rent your properties
              without any commisions.
            </p>
          </div>
          <div className="w-full lg:w-[150%] xl:w-[145%] lg:z-10">
            <SearchBar />
          </div>

          <div className="flex flex-row items-center justify-between xl:justify-start xl:gap-x-36 lg:pr-8">
            <StatCard
              title="50k+ renters"
              text="believe in our service"
              icon={
                <Image
                  src="/icons/people.svg"
                  alt="people"
                  width={32}
                  height={32}
                />
              }
              subIcon={
                <Image src="/icons/key.svg" alt="key" width={16} height={16} />
              }
            />

            <StatCard
              title="10k+ properties"
              text={
                <>
                  <span className="hidden lg:inline">
                    and house ready for occupancy
                  </span>
                  <span className="inline lg:hidden">ready for occupancy</span>
                </>
              }
              icon={
                <Image
                  src="/icons/apartaments.svg"
                  alt="apartaments"
                  width={32}
                  height={32}
                />
              }
              subIcon={<RiSearch2Line className="w-4 h-4 text-white" />}
            />
          </div>
        </div>
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
      </div>

      <div className="rounded-lg border-2 border-shadowPrimary mt-16">
        <div className="p-8">
          <h3 className="font-bold text-3xl text-secondary">
            The new way to find your new home
          </h3>
          <p className="text-secondary opacity-70 my-5">
            Find your dream place to live in with more than 10k+ properties
            listed.
          </p>
          <SecondaryButton
            params={{
              text: "Browse Properties",
              className: "px-4",
            }}
          />
        </div>
        <Image
          src="/img/property.png"
          alt="Property"
          width={500}
          height={400}
        />
      </div>

      
    </main>
  );
}
