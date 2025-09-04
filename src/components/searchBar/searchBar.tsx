"use client";

import { useState, useEffect } from "react";
import SearchTabButton from "../buttons/searchTabButton";
import { RiSearch2Line } from "react-icons/ri";
import { LuCalendarDays } from "react-icons/lu";
import PrimaryButton from "../buttons/primaryButton";

const TABS = ["Rent", "Buy", "Sell"] as const;
type Tab = (typeof TABS)[number];

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState<Tab>("Rent");
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsLg(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div
        className="
    flex rounded-t-lg bg-white
    w-full lg:w-7/12 xl:w-6/12 2xl:!w-4/12
    self-start
  "
      >
        {TABS.map((tab) => (
          <SearchTabButton
            key={tab}
            text={tab}
            activated={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className="flex-1"
          />
        ))}
      </div>

      <div className="p-4 flex flex-row items-center justify-between rounded-bl-lg rounded-br-lg lg:divide-x divide-shadowPrimary lg:rounded-tr-lg lg:px-2 lg:py-6 bg-white">
        <div className="lg:flex lg:flex-col px-4 2xl:w-1/3">
          <label className="hidden lg:block lg:text-gray-500">Location</label>
          <input
            type="text"
            placeholder={isLg ? "Barcelona, Spain" : "Search location"}
            className="w-full outline-none focus:ring-0 placeholder:text-gray-500 lg:placeholder:text-text lg:font-bold lg:text-lg"
          />
        </div>

        <div className="hidden lg:flex lg:flex-col px-4 2xl:w-1/3">
          <label className="lg:block lg:text-gray-500">When</label>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Select Move-in Date"
              className="w-3/4 outline-none focus:ring-0 lg:placeholder:text-text lg:font-bold lg:text-lg"
            />
            <LuCalendarDays className="text-gray-500 xl:ml-2 lg:ml-4" />
          </div>
        </div>

        <div className="px-4 2xl:w-1/3 2xl:flex 2xl:justify-center">
          <PrimaryButton
            params={{
              text: isLg ? "Browse Properties" : <RiSearch2Line />,
              onClick: () => console.log("Sign Up clicked"),
              className: isLg ? "px-8" : "px-3.5",
            }}
          />
        </div>
      </div>
    </div>
  );
}
