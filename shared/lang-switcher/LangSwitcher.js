'use client';
import { locales, localeNames, usePathname, useRouter, Locale } from '../../i18n/navigation';
import { useLocale } from 'next-intl';

export default function LocaleSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onChange = (e) => {
    const next = e.target.value;
    localStorage.setItem('preferred-locale', next);
    router.replace(pathname, { locale: next });
  };

  return (
    <select className='px-3 py-2 rounded-md bg-transparent text-[#323232] text-sm  focus:bg-white  focus:outline-none focus:border-transparent transition' value={currentLocale} onChange={onChange}>
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {localeNames[loc]}
        </option>
      ))}
    </select>
  );
}