'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const LOCALES = ['en', 'ru'];

export default function LocaleRedirector() {
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const preferredLocale = localStorage.getItem('preferred-locale');
    if (preferredLocale && LOCALES.includes(preferredLocale)) {
      const segments = pathname.split('/');
      const currentLocale = segments[1];
      if (preferredLocale !== currentLocale) {
        segments[1] = preferredLocale;
        const newPath = segments.join('/');
        router.replace(newPath);
        return;
      }
    }
    setChecked(true); // no redirect needed, render children
  }, []);

  if (!checked) {
    return null; // or spinner/skeleton here
  }

  return null; // render nothing, allow server content to show
}
