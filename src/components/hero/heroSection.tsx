import Image from "next/image";
import { RiSearch2Line } from "react-icons/ri";
import StatCard from "../cards/statCard/statCard";
import SearchBar from "../searchBar/searchBar";

export default function HeroSection(){
  return(
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
  )
}