import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import clsx from 'clsx';

function HintNavigation({ links, className = "" }) {
  return (
    <nav
      className={clsx(
        "flex items-center mt-8 gap-2 text-[#404040] text-[1rem]",
        className
      )}
    >
      {links.map((link, index) => (
        <div key={index} className="flex items-center gap-2">
          <Link
            href={link.href}
            className="transition duration-150"
          >
            {link.label}
          </Link>
          {index < links.length - 1 && (
            <ChevronRight className="w-[1.25rem]" color="#E3E3E3" />
          )}
        </div>
      ))}
    </nav>
  );
}

export default HintNavigation;
