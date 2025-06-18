
import { useState } from "react";
import { useInput } from "../../hooks/useInput"; // путь поправь по проекту

const countryCodes = [
  { code: "+90", label: "🇹🇷 TR" },
  { code: "+380", label: "🇺🇦 UA" },
  { code: "+7", label: "🇷🇺 RU" },
  { code: "+48", label: "🇵🇱 PL" },
  { code: "+1", label: "🇺🇸 US" },
];

export default function PhoneInput({ onPhoneChange }) {
  const [countryCode, setCountryCode] = useState("+90");

  const phoneInput = useInput("", (val) => /^\d{6,14}$/.test(val)); // только цифры, длина 6-14

  const fullPhone = `${countryCode}${phoneInput.value}`;

  function handleBlur() {
    phoneInput.handleInputBlur();
    onPhoneChange?.(fullPhone, !phoneInput.hasError);
  }

  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-1">Телефон</label>
      <div className="flex gap-2">
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="border-2 border-[#E2E2E2] rounded p-2 bg-white focus:border-black"
        >
          {countryCodes.map((c) => (
            <option key={c.code} value={c.code}>
              {c.label} {c.code}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="номер без кода"
          value={phoneInput.value}
          onChange={phoneInput.handleInputChange}
          onBlur={handleBlur}
          className={`flex-1 p-2 border-2 rounded focus:border-black ${phoneInput.hasError ? "border-red-500" : "border-[#E2E2E2]"
            }`}
        />
      </div>
      {phoneInput.hasError && (
        <p className="text-red-500 text-sm mt-1">Введите корректный номер</p>
      )}
    </div>
  );
}
