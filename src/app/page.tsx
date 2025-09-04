import StatCard from "@/components/cards/statCard/statCard";
import SearchBar from "@/components/searchBar/searchBar";
import { RiSearch2Line } from "react-icons/ri";
import Image from "next/image";
import TestimonialCard from "@/components/cards/testimonialCard.tsx/testimonialCard";
import SecondaryButton from "@/components/buttons/secondaryButton";
import BenefitCard from "@/components/cards/benefitCard/benefitCard";

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

          <div className="flex flex-row items-center justify-between md:justify-around lg:justify-between xl:justify-start xl:gap-x-36 lg:pr-8">
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

      <div className="lg:px-12 xl:px-40 xl:flex xl:flex-row xl:gap-x-16 xl:pb-24 4xl:justify-between">
        <div className="rounded-lg border-2 border-shadowPrimary mt-16 w-fit md:mx-auto mx-0 xl:mx-0 xl:w-[416px] xl:flex xl:flex-col xl:justify-between">
          <div className="p-8 lg:pr-16">
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
            className="w-full lg:w-10/12 lg:ml-auto rounded-br-lg"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-y-16 xl:gap-x-16 lg:gap-x-6 mt-16 xl:w-3/6 2xl:w-full">
          <BenefitCard
            title="Property Insurance"
            text="We offer our customer property protection of liability coverage and insurance for their better life."
            icon={
              <Image
                src={"/icons/propertyCheck.svg"}
                alt="Property Insurance"
                width={32}
                height={32}
              />
            }
            subIcon={
              <Image
                src={"/icons/insurance.svg"}
                alt="Insurance"
                width={32}
                height={32}
              />
            }
          />
          <BenefitCard
            title="Best Price"
            text="Not sure what you should be charging for your property? No need to worry, let us do the numbers for you."
            icon={
              <Image
                src={"/icons/ticketPrice.svg"}
                alt="Best Price"
                width={32}
                height={32}
              />
            }
            subIcon={
              <Image
                src={"/icons/discount.svg"}
                alt="Best Price"
                width={32}
                height={32}
              />
            }
          />
          <BenefitCard
            title="Lowest Commission"
            text="You no longer have to negotiate commissions and haggle with other agents it only cost 2%!"
            icon={
              <Image
                src={"/icons/lowCommission.svg"}
                alt="Lowest Commission"
                width={32}
                height={32}
              />
            }
            subIcon={
              <Image
                src={"/icons/price.svg"}
                alt="Lowest Commission"
                width={32}
                height={32}
              />
            }
          />
          <BenefitCard
            title="Overall Control"
            text="Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control."
            icon={
              <Image
                src={"/icons/locationControl.svg"}
                alt="Overall Control"
                width={32}
                height={32}
              />
            }
            subIcon={
              <Image
                src={"/icons/control.svg"}
                alt="Overall Control"
                width={32}
                height={32}
              />
            }
          />
        </div>
      </div>
    </main>
  );
}
