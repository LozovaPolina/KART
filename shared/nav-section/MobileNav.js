"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import clsx from "clsx";
import { ProductLinksMobile } from "./ProductsLinks";
import Image from "next/image";
import logotype from "../../public/assets/svg/logotype.svg";
import LangSwitcher from "../lang-switcher/LangSwitcher";
import CurrencySelector from "../currency-selector/CurrencySelector";
import NavLink from "./NavLink";
import { useTranslations } from "next-intl";


export default function MobileNav({ navLinks, isOpen, onClose }) {
  const [openIndex, setOpenIndex] = useState(null);
  const t = useTranslations("Header.nav");

  const toggleDropdown = (index) => setOpenIndex(openIndex === index ? null : index);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  return (
    <>
      <div
        className={clsx("fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 h-dvh xl:hidden", isOpen ? "opacity-100 visible" : "opacity-0 invisible")}
        onClick={onClose}
      />
      <aside
        className={clsx(
          "fixed top-0 left-0 z-50 h-dvh w-full max-w-[320px] bg-white px-6 py-8 shadow-[0_.25rem_1.25rem_rgba(0,0,0,0.05)] transition-transform duration-300 overflow-y-auto scrollbar-hide xl:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="absolute top-2 right-2 z-[999]">
          <button onClick={onClose} aria-label="Close menu">
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <div className="flex items-center justify-between gap-4 mb-4">
          <Link href="/" onClick={onClose} className="min-w-[5.5rem]">
            <Image src={logotype} alt="KART Podology" className="w-[5.5rem] h-[1.875rem]" priority />
          </Link>
          <LangSwitcher classes="flex" />
          <CurrencySelector />
        </div>

        <nav className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) =>
              link.dropdown ? (
                <div key={index}>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="flex justify-between items-center text-[#323232] font-normal w-full"
                    aria-expanded={openIndex === index}
                    aria-controls={`dropdown-mobile-${index}`}
                  >
                    {t(link.labelKey)}
                    <ChevronDown className={clsx("w-4 h-4 transition-transform", openIndex === index && "rotate-180")} />
                  </button>
                  {openIndex === index && (
                    <div id={`dropdown-mobile-${index}`} className="flex flex-col gap-1">
                      {link.dropdown.map((item) => (
                        <NavLink href={item.href} key={item.labelKey} label={t(item.labelKey)} onClick={onClose} styles="border-b border-[#EDEDED] text-sm!" />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink href={link.href} key={link.labelKey} label={t(link.labelKey)} onClick={onClose} styles="border-b border-[#EDEDED] py-2 text-sm!" />
              )
            )}
          </div>

          <Link href="#" className="flex hover:shadow-lg justify-center items-center px-4 py-2 rounded-full bg-[#a0c287] shadow-[0_.25rem_1.25rem_rgba(0,0,0,0.05)]">
            <p className="text-white text-sm font-medium">{useTranslations("Header")("onlineEducation")}</p>
          </Link>

          <ProductLinksMobile onClose={onClose} />
        </nav>
      </aside>
    </>
  );
}