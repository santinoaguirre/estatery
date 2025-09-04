import Image from "next/image";
import BenefitCard from "../cards/benefitCard/benefitCard";

export default function BenefitsGrid() {
  return (
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
  );
}
