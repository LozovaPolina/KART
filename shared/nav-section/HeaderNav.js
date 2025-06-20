"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react"; // icon import
import { navLinks } from "../../data/navLinks";
import NavLink from "./NavLink";



function HeaderNav() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="hidden xl:flex items-center gap-8 text-[15px] relative">
            {navLinks.map((link, i) => {

                if (link.dropdown) {
                    const isOpen = openIndex === i;

                    return (
                        <div key={i} className="relative">
                            <button
                                onClick={() => toggleDropdown(i)}
                                className="flex items-center gap-1 text-base cursor-pointer text-[#404040] hover:text-black"
                            >
                                {link.label}
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            {isOpen && (
                                <div className="absolute top-full left-0 mt-2 bg-white rounded shadow-md z-50 min-w-[200px]">
                                    {link.dropdown.map((item, j) => (
                                        <NavLink
                                            label={item.label}
                                            key={j}
                                            styles={"block px-4! py-2! text-sm! text-[#404040]  hover:bg-[#E7EBE5]"}
                                            href={item.href}
                                        >
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                }

                return (
                    <NavLink label={link.label} key={link.href} href={link.href} className="relative group text-sm!">

                    </NavLink>
                );
            })}
        </div>
    );
}

export default HeaderNav;
