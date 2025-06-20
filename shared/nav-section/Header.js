"use client"

import HeaderNav from "./HeaderNav";
import logotype from "../../public/assets/svg/logotype.svg"; // Adjust the path as needed
import ProductLinks from "./ProductsLinks";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag } from "lucide-react";
import ProfileIcon from "./ProfIleIcon";
import CurrencySelector from "../currency-selector/CurrencySelector";



import { useState } from "react";

import MobileNav from "./MobileNav";
import LangSwitcher from "../lang-switcher/LangSwitcher";
import { navLinks } from "../../data/navLinks";



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-md">
      <div className="max-w-[1578px] mx-auto px-[15px]">
        <div className="flex justify-between items-center flex-wrap gap-y-4 pt-[25px] pb-[15px]">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-wrap gap-[30px]">
            <Image
              className="w-[88px] h-[30px] min-w-[88px]"
              src={logotype}
              alt="KART Podology"
              priority
            />
          </Link>

          <HeaderNav className="hidden xl:flex items-center gap-[40px]" />

          <div className="hidden xl:block max-w-[328px] w-full">
            <form method="GET" action="/" className="w-full">
              <div
                className="flex items-center gap-5 px-[10px] py-[10px] bg-[#f5f5f5] rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.15)] "
              >
                <input
                  type="text"
                  placeholder="Ищите то, что вас интересует"
                  className="flex-grow border-none text-base bg-transparent placeholder-gray-400 focus:outline-none"
                />
                <Search color="#49454F" />
              </div>
            </form>
          </div>
          <div className=" items-center hidden xl:flex gap-[15px] flex-wrap">
            <LangSwitcher classes={'hidden xl:flex'} />
            <CurrencySelector />

            {/* Education button */}
            <Link
              href="#"
              className="hidden xl:flex items-center px-[11px] py-[10px] rounded-full bg-[#a0c287] shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
            >
              <p className="text-white font-normal">Онлайн навчання</p>
            </Link>

            {/* Profile icon */}
          </div >


          <div className="flex items-center gap-2">
            <Link href={'/cart'} className="text-lg! text-[#323232]"><ShoppingBag size={20} color="#323232" /></Link>
            <ProfileIcon />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="block xl:hidden"
              aria-label="Open mobile menu"
            >
              {/* Hamburger icon SVG */}
              <svg
                className="w-[25px] h-[25px] cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M7.2915 6.25H17.7082..."
                  stroke="#262626"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <div className="max-w-[1450px] mx-auto px-[15px]">
        <ProductLinks />
      </div>

      {/* Mobile navigation */}
      <MobileNav
        navLinks={navLinks}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}

