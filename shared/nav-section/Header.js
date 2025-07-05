"use client"

import HeaderNav from "./HeaderNav";
import logotype from "../../public/assets/svg/logotype.svg"; // Adjust the path as needed
import ProductLinks from "./ProductsLinks";
import { Link } from "../../i18n/navigation";
import Image from "next/image";
import { Search, ShoppingBag } from "lucide-react";
import ProfileIcon from "./ProfIleIcon";
import CurrencySelector from "../currency-selector/CurrencySelector";



import { useState } from "react";

import MobileNav from "./MobileNav";
import LangSwitcher from "../lang-switcher/LangSwitcher";
import { navLinks } from "../../data/navLinks";
import { useTranslations } from "next-intl";


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("Header");

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-md">
      <div className="max-w-[1578px] mx-auto px-[15px]">
        <div className="flex justify-between items-center flex-wrap gap-y-4 pt-[25px] pb-[10px]">
          <Link href="/" className="flex items-center flex-wrap ">
            <Image
              className="w-[110px]  "
              src={logotype}
              alt="KART Podology"
              priority
            />
          </Link>

          <HeaderNav />

          <div className="hidden xl:block max-w-[328px] w-full">
            <form method="GET" action="/" className="w-full">
              <div className="flex items-center gap-5 px-[10px] py-[10px] bg-[#f5f5f5] rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.15)] ">
                <input
                  type="text"
                  placeholder={t("searchPlaceholder")}
                  className="flex-grow border-none text-base bg-transparent placeholder-gray-400 focus:outline-none"
                />
                <Search color="#49454F" />
              </div>
            </form>
          </div>
          <div className="flex gap-6">
            <div className="hidden xl:flex items-center gap-[15px]">
              <LangSwitcher classes='hidden xl:flex' />
              <CurrencySelector />
              <Link href="#" className="hidden xl:flex items-center px-[11px] py-[10px] rounded-full bg-[#A4D49D] shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <p className="text-white font-normal">{t("onlineEducation")}</p>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Link href={'/cart'} className="text-lg! text-[#323232]"><ShoppingBag size={20} color="#323232" /></Link>
              <ProfileIcon />
              <button onClick={() => setMobileMenuOpen(true)} className="block xl:hidden" aria-label="Open mobile menu">
                <svg className="w-[25px] h-[25px] cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                  <path d="M7.2915 6.25H17.7082..." stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>



      </div>

      <div className="max-w-[1450px] mx-auto px-[15px]">
        <ProductLinks />
      </div>

      <MobileNav navLinks={navLinks} isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}