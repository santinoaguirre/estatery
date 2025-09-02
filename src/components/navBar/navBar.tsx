"use client";

import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../buttons/primaryButton";
import SecondaryButton from "../buttons/secondaryButton";
import { FaChevronDown } from "react-icons/fa6";

export default function NavBar() {
  return (
    <nav className="bg-[#edecfb] px-12 py-7 flex flex-row items-center justify-between">
      <div className="gap-x-12 flex flex-row items-center">
        <Image
          src="/logos/logo.png"
          alt="Estatery Logo"
          width={118}
          height={32}
        />
        <ol className="flex gap-x-12 font-medium">
          <li>
            <Link href="/rent">Rent</Link>
          </li>
          <li>
            <Link href="/buy">Buy</Link>
          </li>
          <li>
            <Link href="/sell">Sell</Link>
          </li>
          <li>
            <Link href="/manage-property" className="flex items-center gap-2">
              Manage Property{" "}
              <FaChevronDown className="w-4 h-4" aria-hidden="true" />
            </Link>
          </li>
          <li>
            <Link href="/resources" className="flex items-center gap-2">
              Resources <FaChevronDown className="w-4 h-4" aria-hidden="true" />
            </Link>
          </li>
        </ol>
      </div>
      <div className="flex gap-4">
        <SecondaryButton
          params={{
            text: "Login",
            onClick: () => console.log("Login clicked"),
          }}
        />
        <PrimaryButton
          params={{
            text: "Sign Up",
            onClick: () => console.log("Sign Up clicked"),
          }}
        />
      </div>
    </nav>
  );
}
