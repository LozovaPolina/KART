"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";

export default function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  className = "",
  labelBgColor = "bg-[#F5F5F5]",
}) {
  const t = useTranslations("Field");

  return (
    <div className={`relative w-full ${className}`}>
      <label
        htmlFor={name}
        className={clsx(
          "sm:absolute left-2 top-0 -translate-y-1/2 sm:px-1  text-xs text-color  max-w-[90%]",
          labelBgColor
        )}
        title={name}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={clsx(
          "w-full p-2 pt-3 border-1 rounded outline-none text-color  transition",
          error ? "border-red-500" : "border-[#E2E2E2] focus:border-[#272727]"
        )}
      />

      {error && <p className="text-red-500 text-xs mt-1">{t("invalid")}</p>}
    </div>
  );
}
