
import clsx from "clsx";
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
}) {
  return (
    <div className={`relative w-full mt-4 ${className}`}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={clsx(
          "w-full p-2 pt-3 border-2 rounded outline-none transition",
          error ? "border-red-500" : "border-[#E2E2E2] focus:border-[#272727]"
        )}
      />
      <label
        htmlFor={name}
        className="absolute left-2 top-0 -translate-y-1/2 px-1 bg-[#F5F5F5] text-sm text-[#272727]"
      >
        {label}
      </label>
      {error && (
        <p className="text-red-500 text-xs mt-1">Введите корректное значение</p>
      )}
    </div>
  );
}