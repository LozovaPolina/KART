import { useRef } from "react";
import clsx from "clsx";

function TextAreaField({
  label,
  value,
  onChange,
  onBlur,
  error,
  name,
  className = "",
  placeholder = "",
}) {
  const textAreaRef = useRef(null);

  const handleInputChange = (e) => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.style.height = "28px";
      textarea.style.height = textarea.scrollHeight + "px"; // Expand
    }
    onChange(e);
  };
  console.log(error)
  return (
    <div className={`relative w-full mt-4 ${className}`}>
      <label
        htmlFor={name}
        className="sm:absolute left-2 top-0 -translate-y-1/2 sm:px-1 bg-[#F5F5F5] text-xs text-[#272727] max-w-[90%] "
      >
        {label}
      </label>
      <textarea
        ref={textAreaRef}
        name={name}
        value={value}
        onChange={handleInputChange}
        onBlur={onBlur}
        className={clsx(
          "w-full p-2 pt-5 border rounded outline-none transition text-sm resize-none",
          error ? "border-red-500" : "border-[#E2E2E2] focus:border-[#272727]"
        )}
        style={{ height: "48px", overflow: "hidden" }}
        placeholder={placeholder}
      />

      {error && (
        <p className="text-red-500 text-xs mt-1">Введите корректное значение</p>
      )}
    </div>
  );
}

export default TextAreaField;