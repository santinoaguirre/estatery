"use client";

import { useState } from "react";
import SearchTabButton from "../buttons/searchTabButton";
import { RiSearch2Line } from "react-icons/ri";

const TABS = ["Rent", "Buy", "Sell"] as const;
type Tab = (typeof TABS)[number];

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState<Tab>("Rent");

  return (
    <div className="bg-white rounded-lg flex flex-col">
      <div className="flex w-full">
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

      <div className="p-4 flex flex-row items-center justify-between">
        <input
          type="text"
          placeholder="Search location"
          className="w-full outline-none focus:ring-0 placeholder:text-gray-500"
        />
        <button className="bg-primary p-3.5 rounded-lg cursor-pointer">
          <RiSearch2Line className="text-white w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
