
import { useTranslations } from "next-intl";
import { productLinks } from "../../data/navLinks";
import NavLink from "./NavLink";


export default function ProductLinks() {
    const t = useTranslations("Header.productLinks");

    return (
        <div className="hidden [@media(min-width:1280px)]:flex justify-center gap-[40px]">
            {productLinks.map((link) => (
                <NavLink
                    href={link.href}
                    key={link.labelKey}
                    label={t(link.labelKey)}
                />
            ))}
        </div>
    );
}

export function ProductLinksMobile({ onClose }) {
    const t = useTranslations("Header.productLinks");

    return (
        <nav className="flex flex-col ">
            {productLinks.map((link) => (
                <NavLink
                    href={link.href}
                    key={link.labelKey}
                    label={t(link.labelKey)}
                    onClick={onClose}
                    styles={"border-b border-[#EDEDED] pb-4 text-sm!"}
                />
            ))}
        </nav>
    );
}


