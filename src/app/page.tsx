import StatCard from "@/components/cards/statCard/statCard";
import SearchBar from "@/components/searchBar/searchBar";
import { RiSearch2Line } from "react-icons/ri";
import Image from "next/image";
import TestimonialCard from "@/components/cards/testimonialCard.tsx/testimonialCard";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-hero-start to-hero-end min-h-screen lg:pt-16 2xl:pt-20 px-6 lg:px-0 pt-12 lg:flex lg:flex-row lg:items-center">
      <div className="flex flex-col lg:ml-12 xl:ml-40 gap-y-12 lg:w-1/2">
        <div className="flex flex-col gap-y-8 text-center lg:text-left">
          <h1 className="font-bold lg:text-6xl text-4xl">
            Buy, rent, or sell your property easily
          </h1>
          <p className="font-medium text-xl">
            A great platform to buy, sell, or even rent your properties without
            any commisions.
          </p>
        </div>
        <div className="w-full lg:w-[150%] 3xl:max-w-[920px] 3xl:w-full lg:z-10">
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
      <div className="hidden lg:block lg:w-1/2 lg:h-full lg:relative ">
        <Image
          src="/img/house.png"
          alt="House"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />

        <div className="absolute top-[-5] left-0 2xl:top-16 3xl:top-20">
          <TestimonialCard />
        </div>

        <div className="absolute bottom-0 right-0">
          <Image
            src="/img/trustPilotCard.png"
            alt="Trust Pilot"
            width={261}
            height={156}
            className="w-56 3xl:w-[261px]"
          />
        </div>
      </div>
    </main>
  );
}
