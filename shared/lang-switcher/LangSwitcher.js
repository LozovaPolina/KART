'use client';

import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import clsx from 'clsx';


const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
];

function replaceLocaleInPath(pathname, newLocale, locales) {
  const segments = pathname.split('/');
  if (locales.includes(segments[1])) {
    segments[1] = newLocale;
  } else {
    segments.splice(1, 0, newLocale);
  }
  return segments.join('/');
}

export default function LangSwitcher({ classes }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();

  const locales = LANGS.map((lang) => lang.code);

  async function onSelectChange(nextLocale) {
    await fetch('/api/revalidate', { method: 'POST' });

    const newPathname = replaceLocaleInPath(pathname, nextLocale, locales);

    const queryString = searchParams.toString();
    const url = queryString ? `${newPathname}?${queryString}` : newPathname;

    router.replace(url);
  }

  return (
    <div className={clsx('flex items-center gap-1 cursor-pointer', classes)}>
      <select
        className="text-[#323232] bg-white border-none outline-none cursor-pointer"
        value={locale}
        onChange={(e) => onSelectChange(e.target.value)}
      >
        {LANGS.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>

    </div>
  );
}
