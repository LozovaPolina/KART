
import { productLinks } from "../../data/navLinks";
import NavLink from "./NavLink";


export default function ProductLinks() {
    return (
        <div className="hidden [@media(min-width:1280px)]:flex justify-center py-[10px] gap-[40px]">
            {productLinks.map((link) => <NavLink href={link.href} key={link.label} label={link.label} />

            )}
        </div>
    );
}

export function ProductLinksMobile({ onClose }) {
    return (
        <nav className="flex flex-col ">
            {productLinks.map((link) => <NavLink href={link.href} key={link.label} label={link.label} onClick={onClose} styles={'border-b border-[#EDEDED] py-2 text-sm!'} />)}

        </nav>
    );
}

