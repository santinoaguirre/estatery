"use client";

import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../buttons/primaryButton";
import SecondaryButton from "../buttons/secondaryButton";
import { FaChevronDown } from "react-icons/fa6";
import { TbMenu } from "react-icons/tb";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main"
        className="bg-backgroundNavbar px-9 xl:px-12 py-6 xl:py-7 flex flex-row items-center justify-between"
      >
        <div className="gap-x-12 flex flex-row items-center">
          <Image
            src="/logos/logo.png"
            alt="Estatery Logo"
            width={118}
            height={32}
          />
          <ul className="xl:flex gap-x-12 font-medium hidden">
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
                Resources{" "}
                <FaChevronDown className="w-4 h-4" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="xl:flex gap-4 hidden">
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
              className: "p-6",
            }}
          />
        </div>

        <button
          className="xl:hidden"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <TbMenu className="w-6 h-6 text-text" />
          <span className="sr-only">Open main menu</span>
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className={`xl:hidden bg-backgroundNavbar px-9 overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
          }`}
        >
          <ul className="flex flex-col gap-4 font-medium">
            <li>
              <Link href="/rent" onClick={() => setIsOpen(false)}>
                Rent
              </Link>
            </li>
            <li>
              <Link href="/buy" onClick={() => setIsOpen(false)}>
                Buy
              </Link>
            </li>
            <li>
              <Link href="/sell" onClick={() => setIsOpen(false)}>
                Sell
              </Link>
            </li>
            <li>
              <Link href="/manage-property" onClick={() => setIsOpen(false)}>
                Manage Property
              </Link>
            </li>
            <li>
              <Link href="/resources" onClick={() => setIsOpen(false)}>
                Resources
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <SecondaryButton
              params={{
                text: "Login",
                onClick: () => {
                  console.log("Login clicked");
                  setIsOpen(false);
                },
              }}
            />
            <PrimaryButton
              params={{
                text: "Sign Up",
                onClick: () => {
                  console.log("Sign Up clicked");
                  setIsOpen(false);
                },
                className: "p-6",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
