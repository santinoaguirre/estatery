import StatCard from "@/components/cards/statCard/statCard";
import SearchBar from "@/components/searchBar/searchBar";
import { RiSearch2Line } from "react-icons/ri";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-hero-start to-hero-end h-screen lg:mt-16 px-6 lg:px-0 mt-12">
      <div className="flex flex-col lg:ml-40 gap-y-12 lg:w-1/2">
        <div className="flex flex-col gap-y-8 text-center lg:text-left">
          <h1 className="font-bold lg:text-6xl text-4xl">
            Buy, rent, or sell your property easily
          </h1>
          <p className="font-medium text-xl">
            A great platform to buy, sell, or even rent your properties without
            any commisions.
          </p>
        </div>
        <SearchBar />
        <div className="flex flex-row items-center justify-between">
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
    </main>
  );
}
