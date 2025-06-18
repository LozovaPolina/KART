export default function RadioGroup({ label, name, options, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-medium">{label}</p>
      <div className="flex gap-4 flex-wrap">
        {options.map((opt) => (
          <label
            key={opt}
            className="flex items-center gap-1 whitespace-nowrap cursor-pointer"
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={() => onChange(opt)}
              className="cursor-pointer"
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}
