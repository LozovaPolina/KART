'use client'

import clsx from 'clsx';
import { Link } from "../../i18n/navigation";
import { usePathname } from 'next/navigation';
import React from 'react';

function NavLink({ label, href, styles, ...props }) {
  const pathname = usePathname();


  const pathnameWithoutLang = pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');

  const isActive = pathnameWithoutLang === href || pathnameWithoutLang.startsWith(href + '/');
  return (
    <Link
      href={href}
      {...props}
      className={clsx("whitespace-nowrap text-[15px] hover:font-medium   text-bl py-[10px]",
        isActive ? "text-[#5EAC41]! " : "text-[#404040]",
        styles,
      )}
    >
      {label}
    </Link>
  );
}

export default NavLink;