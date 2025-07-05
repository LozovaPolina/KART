import clsx from "clsx";

export default function RadioGroup({ label, name, options, value, onChange, wrapStyles = '' }) {
  return (
    <div className={clsx("flex flex-col gap-2", wrapStyles)}>
      <p className="font-medium text-sm text-black">{label}</p>
      <div className="flex gap-4 flex-wrap">
        {options.map((opt) => (
          <label
            key={opt}
            className="relative  min-w-fit flex items-center gap-2 cursor-pointer select-none"
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={() => onChange(opt)}
              className="sr-only peer"
            />
            <div className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#49BA4A] transition-all duration-200 peer-checked:border-[#49BA4A]">
              <div
                className={`w-3 h-3 rounded-full transition-transform duration-200 ${value === opt ? "bg-[#49BA4A]" : "bg-transparent"
                  }`}
              />
            </div>

            {/* Label */}
            <span className="text-sm text-black">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
