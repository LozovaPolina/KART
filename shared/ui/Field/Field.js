
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
    <div className={`relative w-full  ${className}`}>
      <label
        htmlFor={name}
        className="sm:absolute left-2 top-0 -translate-y-1/2 sm:px-1 bg-[#F5F5F5] text-xs text-[#272727] max-w-[90%] "
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
          "w-full p-2 pt-3 border-1 rounded outline-none transition",
          error ? "border-red-500" : "border-[#E2E2E2] focus:border-[#272727]"
        )}
      />

      {error && (
        <p className="text-red-500 text-xs mt-1">Введите корректное значение</p>
      )}
    </div>
  );
}