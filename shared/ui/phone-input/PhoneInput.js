
import clsx from "clsx";

const countryCodes = [
  { code: "+90", label: "🇹🇷 TR" },
  { code: "+380", label: "🇺🇦 UA" },
  { code: "+7", label: "🇷🇺 RU" },
  { code: "+48", label: "🇵🇱 PL" },
  { code: "+1", label: "🇺🇸 US" },
];

export default function PhoneInput({ phoneNumber, handlePhoneNumberChange, handlePhoneNumberBlur, phoneNumberError, setCountryCode, countryCode, styles }) {


  return (
    <div className={clsx("flex gap-2 relative ", styles)}>
      <label htmlFor="countryCode" className="text-xs text-[#272727] bg-[#F5F5F5]  mb-1 absolute left-4 -top-2">
        Код страны
      </label>
      <select
        value={countryCode}
        name='countryCode'
        onChange={(e) => setCountryCode(e.target.value)}
        className="border-2 border-[#E2E2E2] bg-[#F5F5F5] rounded p-2 w-[125px] h-[46px] focus:border-black"
      >
        {countryCodes.map((c) => (
          <option key={c.code} value={c.code} className='w-[115px]  flex gap-2' >
            <span>{c.label} </span>  <span>{c.code} </span>
          </option>
        ))}
      </select>
      <label htmlFor="countryCode" className="text-xs text-[#272727] bg-[#F5F5F5] absolute left-36 -top-2">
        Номер
      </label>

      <input
        type="text"
        placeholder=""
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        onBlur={handlePhoneNumberBlur}

        className={`flex-1 p-2 border-2 h-[46px] rounded outline-none focus:border-black ${phoneNumberError ? "border-red-500" : "border-[#E2E2E2]"
          }`}
      />
    </div>
  );
}
