import Image from "next/image";
import { RiDoubleQuotesR } from "react-icons/ri";

export default function TestimonialCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md lg:w-[270px]">
      <div className="flex flex-row gap-x-4 items-center">
        <Image
          src="/img/manuel-villa.png"
          alt="Manuel Villa"
          width={64}
          height={64}
          className="rounded-full w-16 h-16"
        />
        <div>
          <p className="font-bold">Manuel Villa</p>
          <span className="text-gray-500 text-xs">Renter</span>
          <div className="flex flex-row items-center mt-2 gap-x-0.5">
            <span className="text-gray-500 text-xs">Moved width</span>
            <Image
              src="/logos/logo.png"
              alt="Estatery Logo"
              width={65}
              height={16}
            />
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-row gap-x-4">
        <div className="flex items-center justify-center rounded-full bg-text w-8 h-8 p-2 text-white">
          <RiDoubleQuotesR />
        </div>

        <p className="text-text text-xs">
          I loved how smooth the move was, and finally got the house we wanted.
        </p>
      </div>
      <hr className="my-6 text-backgroundNavbar" />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <span className="font-extrabold text-lg">$1,500</span>
          <span className="text-gray-500 text-xs">Saved up to</span>
        </div>
        <div className="flex flex-col">
          <span className="font-extrabold text-lg">-24 hrs</span>
          <span className="text-gray-500 text-xs">Process time</span>
        </div>
      </div>
    </div>
  );
}
