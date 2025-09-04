import Image from "next/image";
import SecondaryButton from "../buttons/secondaryButton";

export default function PropertyCard() {
  return (
    <div className="rounded-lg border-2 border-shadowPrimary bg-[#f7f7fd] mt-16 w-fit md:mx-auto mx-0 xl:mx-0 xl:w-[416px] xl:flex xl:flex-col xl:justify-between">
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
  );
}
