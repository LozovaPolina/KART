import clsx from "clsx";

export default function RadioGroup({ label, name, options, value, onChange, wrapStyles = '' }) {
  return (
    <div className={clsx("flex flex-col gap-2", wrapStyles)}>
      <p className="font-medium text-sm text-black">{label}</p>
      <div className="flex gap-4 flex-wrap">
        {options.map((opt) => (
          <label
            key={opt}
            className="relative flex items-center gap-2 cursor-pointer select-none"
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={() => onChange(opt)}
              className="sr-only peer"
            />
            <div className="w-5 h-5 rounded-full border-2 border-[#0066FF] peer-checked:border-[#97B18A] flex items-center justify-center transition-colors duration-200">
              <div className="w-2.5 h-2.5 rounded-full bg-[#97B18A] opacity-0 peer-checked:opacity-100 transition-opacity duration-200" />
            </div>
            <span className="text-sm text-black  ">
              {opt}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
