"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/professional-feet", label: "Professional Feet" },
    { href: "#", label: "Feeto Care" },
    { href: "#", label: "Tools" },
    { href: "#", label: "Disposable caps" },
    { href: "#", label: "Nail Cutters" },
    { href: "#", label: "Unloading material" },
    { href: "#", label: "Accessories" },
];

export default function ProductLinks() {
    const pathname = usePathname();

    return (
        <div className="hidden [@media(min-width:1280px)]:flex justify-center py-[10px] gap-[40px]">
            {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={`whitespace-nowrap text-[18px] font-medium  text-bl py-[10px] ${isActive ? "text-[#97B18A] " : "text-[#404040]"
                            }`}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </div>
    );
}

