"use client";

import { ReactNode } from "react";

type StatCardProps = {
  title: string;
  text: string;
  icon: ReactNode;
  subIcon: ReactNode;
};

export default function StatCard({
  title,
  text,
  icon,
  subIcon,
}: StatCardProps) {
  return (
    <div className="flex flex-col items-start text-left">
      <div className="border border-shadowPrimary rounded-full">
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full border-2 border-white bg-shadowPrimary">
          <span className="text-primary text-2xl">{icon}</span>

          <div className="absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 rounded-lg bg-primary text-white">
            {subIcon}
          </div>
        </div>
      </div>

      <h3 className="mt-6 text-xl font-bold text-primary">{title}</h3>
      <p className="text-sm text-blackText mt-1">{text}</p>
    </div>
  );
}
