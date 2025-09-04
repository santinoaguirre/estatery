"use client";

import { ReactNode } from "react";

type BenefitCardProps = {
  title: string;
  text: string | ReactNode;
  icon: ReactNode;
  subIcon: ReactNode;
};

export default function BenefitCard({
  title,
  text,
  icon,
  subIcon,
}: BenefitCardProps) {
  return (
    <div className="flex flex-row lg:flex-col items-start text-left">
      <div className="border border-shadowPrimary rounded-full">
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full border-2 border-white bg-shadowPrimary">
          <span className="text-primary text-2xl">{icon}</span>

          <div className="absolute bottom-0 right-0 w-6">{subIcon}</div>
        </div>
      </div>
      <div className="flex flex-col gap-y-6 sm:gap-y-2 ml-4 lg:ml-0 lg:mt-6">
        <h3 className="text-2xl font-bold text-text">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}
