import React from 'react';
function TextAreaField({ label, value, onChange, onBlur, error, name, className = "" }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="font-semibold text-sm">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`border border-[#E2E2E2] rounded min-h-[28px] px-3 p-1 text-sm outline-none focus:border-black resize-none `}
      />
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};

export default TextAreaField;