'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
    { href: "/", label: "Главная" },
    { href: "/about", label: "О компании" },
    { href: "/faq", label: "FAQ" },
    { href: "/contacts", label: "Контакты" },
    { href: "/quick-order", label: "Быстрый заказ" },
];

function HeaderNav() {
    const pathname = usePathname();

    return (
        <div className="hidden text-[15px] xl:flex items-center gap-10">
            {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                    <Link key={link.href} href={link.href} className="relative group">
                        <p
                            className={clsx(
                                "text-base font-medium cursor-pointer transition-colors",
                                isActive ? "text-[#000000]" : "text-[#404040] hover:text-gray-900"
                            )}
                        >
                            {link.label}
                        </p>

                        {/* Underline for active link */}
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
