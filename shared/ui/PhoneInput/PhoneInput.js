'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';

const countryCodes = [
  { code: '+90', label: '🇹🇷 TR' },
  { code: '+380', label: '🇺🇦 UA' },
  { code: '+7', label: '🇷🇺 RU' },
  { code: '+48', label: '🇵🇱 PL' },
  { code: '+1', label: '🇺🇸 US' },
];

export default function PhoneInput({
  phoneNumber,
  handlePhoneNumberChange,
  handlePhoneNumberBlur,
  phoneNumberError,
  setCountryCode,
  countryCode,
  styles,
  labelBgStyle = 'bg-[#F5F5F5]'
}) {
  const t = useTranslations('PhoneInput');

  return (
    <div className={clsx('flex gap-2 relative', styles)}>
      <label
        htmlFor="countryCode"
        className={clsx("text-xs text-[#272727]  mb-1 absolute left-4 -top-2", labelBgStyle)}
      >
        {t('countryCode')}
      </label>
      <select
        value={countryCode}
        name="countryCode"
        onChange={(e) => setCountryCode(e.target.value)}
        className="border-2 border-[#E2E2E2] text-gray-500 bg-transparent rounded p-2 w-[125px] h-[46px] focus:border-black"
      >
        {countryCodes.map((c) => (
          <option key={c.code} value={c.code}>
            {c.label} {c.code}
          </option>
        ))}
      </select>

      <label
        htmlFor="phoneNumber"
        className={clsx("text-xs text-[#272727] bg-[#F5F5F5] absolute left-36 -top-2", labelBgStyle)}
      >
        {t('phone')}
      </label>

      <input
        type="text"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        onBlur={handlePhoneNumberBlur}
        placeholder='324433221'
        className={`flex-1 p-2 border-2 h-[46px]  bg-transparent rounded outline-none focus:border-black ${phoneNumberError ? 'border-red-500' : 'border-[#E2E2E2]'
          }`}
      />
    </div>
  );
}
