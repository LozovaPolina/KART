"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react"; // icon import
import { navLinks } from "../../data/navLinks";
import NavLink from "./NavLink";
import { useTranslations } from "next-intl";



function HeaderNav() {
    const [openIndex, setOpenIndex] = useState(null);
    const t = useTranslations("Header.nav");

    const toggleDropdown = (index) => setOpenIndex(openIndex === index ? null : index);

    return (
        <div className="hidden xl:flex items-center gap-8 text-[15px] relative">
            {navLinks.map((link, i) => (
                link.dropdown ? (
                    <div key={i} className="relative">
                        <button onClick={() => toggleDropdown(i)} className="flex items-center gap-1 text-base cursor-pointer text-[#404040] hover:text-black">
                            {t(link.labelKey)}
                            <ChevronDown size={16} className={`transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`} />
                        </button>
                        {openIndex === i && (
                            <div className="absolute top-full left-0 mt-2 bg-white rounded shadow-md z-50 min-w-[200px]">
                                {link.dropdown.map((item, j) => (
                                    <NavLink label={t(item.labelKey)} key={j} styles="block px-4! py-2! text-sm! text-[#404040] hover:bg-[#E7EBE5]" href={item.href} />
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <NavLink label={t(link.labelKey)} key={link.href} href={link.href} className="relative group text-sm!" />
                )
            ))}
        </div>
    );
}

export default HeaderNav;
