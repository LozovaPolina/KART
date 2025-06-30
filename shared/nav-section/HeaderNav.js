"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react"; // icon import
import { navLinks } from "../../data/navLinks";
import NavLink from "./NavLink";
import { useTranslations } from "next-intl";



function HeaderNav() {
    const [openIndex, setOpenIndex] = useState(null);
    const t = useTranslations("Header.nav");
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpenIndex(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = (index) =>
        setOpenIndex(openIndex === index ? null : index);

    return (
        <div className="hidden xl:flex items-center gap-8 text-[15px] relative" ref={ref}>
            {navLinks.map((link, i) =>
                link.dropdown ? (
                    <div key={i} className="relative">
                        <button
                            onClick={() => toggleDropdown(i)}
                            className="flex items-center gap-1 text-[18px] text-[#404040] hover:font-medium"
                        >
                            {t(link.labelKey)}
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {openIndex === i && (
                            <div className="absolute top-full left-0 mt-2 bg-white rounded shadow-md z-50 min-w-[200px]">
                                {link.dropdown.map((item, j) => (
                                    <NavLink
                                        key={j}
                                        label={t(item.labelKey)}
                                        href={item.href}
                                        onClick={() => setOpenIndex(null)}
                                        styles="block px-4! py-2! text-sm! text-[#404040] hover:bg-[#E7EBE5]"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <NavLink
                        key={link.href}
                        label={t(link.labelKey)}
                        href={link.href}
                        className="relative group text-sm!"
                    />
                )
            )}
        </div>
    );
}

export default HeaderNav;
