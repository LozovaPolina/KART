'use client'

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function NavLink({ label, href, styles, ...props }) {

  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      {...props}
      className={clsx("whitespace-nowrap text-[18px] hover:font-medium hover:black  text-bl py-[10px]",
        isActive ? "text-[#97B18A] " : "text-[#404040]",
        styles,
      )}
    >
      {label}
    </Link>
  );
}

export default NavLink;