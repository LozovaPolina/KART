"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const countryCodes = [
  { code: "+90", countryCode: "tr", label: "TR" },
  { code: "+380", countryCode: "ua", label: "UA" },
  { code: "+7", countryCode: "ru", label: "RU" },
  { code: "+48", countryCode: "pl", label: "PL" },
  { code: "+1", countryCode: "us", label: "USA" },
];
export default function PhoneInput({
  phoneNumber,
  handlePhoneNumberChange,
  handlePhoneNumberBlur,
  phoneNumberError,
  setCountryCode,
  countryCode,
  styles,
  labelBgStyle = "bg-[#F5F5F5]",
}) {
  const t = useTranslations("PhoneInput");
  const [open, setOpen] = useState(false);
  const selected =
    countryCodes.find((c) => c.code === countryCode) || countryCodes[0];
  return (
    <div className={clsx("flex gap-2 text-color relative", styles)}>
      <label
        htmlFor="countryCode"
        className={clsx(
          "text-xs text-color  mb-1 z-10 absolute left-4 -top-2",
          labelBgStyle
        )}
      >
        {t("countryCode")}
      </label>

      {/* Кастомный селект с флагами вместо <select> */}
      <div
        onClick={() => setOpen(!open)}
        tabIndex={0}
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        className="border-2 border-[#E2E2E2] text-color  bg-transparent rounded p-2 w-[125px] h-[46px] flex items-center gap-2 cursor-pointer relative select-none"
      >
        <Image
          src={`/assets/svg/flags/${selected.countryCode}.svg`}
          alt={selected.label}
          width={24}
          height={16}
          className="object-cover rounded"
        />
        <span>{selected.code}</span>
        <svg
          className={clsx(
            "ml-auto w-4 h-4 text-color ",
            open ? "rotate-180" : "rotate-0"
          )}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={"M19 9l-7 7-7-7"}
          />
        </svg>

        {open && (
          <ul
            role="listbox"
            className={clsx(
              "absolute top-full text-color  left-0 right-0 max-h-48 overflow-auto border border-gray-300  rounded mt-1 z-10",
              labelBgStyle
            )}
          >
            {countryCodes.map(({ code, countryCode, label }) => (
              <li
                key={code}
                role="option"
                aria-selected={code === selected.code}
                onClick={() => {
                  setCountryCode(code);
                  setOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-2 text-color  hover:bg-gray-100 cursor-pointer"
              >
                <Image
                  src={`/assets/svg/flags/${countryCode}.svg`}
                  alt={label}
                  width={24}
                  height={16}
                  className="object-cover rounded"
                />
                <span>{code}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <label
        htmlFor="phoneNumber"
        className={clsx(
          "text-xs text-color  bg-[#F5F5F5] absolute left-36 -top-2",
          labelBgStyle
        )}
      >
        {t("phone")}
      </label>

      <input
        type="text"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        onBlur={handlePhoneNumberBlur}
        placeholder="324433221"
        className={`flex-1 p-2 border-2 h-[46px] text-color  bg-transparent rounded outline-none focus:border-black ${
          phoneNumberError ? "border-red-500" : "border-[#E2E2E2]"
        }`}
      />
    </div>
  );
}
