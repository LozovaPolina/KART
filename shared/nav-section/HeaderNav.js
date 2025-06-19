"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react"; // icon import
import { navLinks } from "../../data/navLinks";



function HeaderNav() {
    const pathname = usePathname();
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="hidden xl:flex items-center gap-8 text-[15px] relative">
            {navLinks.map((link, i) => {
                const isActive = pathname === link.href;

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
                                        <Link
                                            key={j}
                                            href={item.href}
                                            className="block px-4 py-2 text-sm text-[#404040] hover:bg-gray-100"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                }

                return (
                    <Link key={link.href} href={link.href} className="relative group">
                        <p
                            className={`text-base cursor-pointer transition-colors ${isActive ? "text-black" : "text-[#404040] hover:text-gray-900"
                                }`}
                        >
                            {link.label}
                        </p>
                        {isActive && (
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-[2px] bg-[#ABABAB] rounded-full" />
                        )}
                    </Link>
                );
            })}
        </div>
    );
}

export default HeaderNav;
