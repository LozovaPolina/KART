"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function MultiSelect({ label, options, selected, setSelected }) {
  const [open, setOpen] = useState(false);

  const toggleOption = (opt) => {
    setSelected((s) =>
      s.includes(opt) ? s.filter((x) => x !== opt) : [...s, opt]
    );
  };

  return (
    <div className="relative ">
      <label className="block  text-color font-semibold mb-2">{label}</label>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-[80%] inline-flex items-center  rounded"
      >
        <div className="flex min-w-32 gap-4 items-center">
          <span className="">
            {selected.length > 0 ? selected.join(", ") : "Выберите"}
          </span>
          <ChevronDown
            className={`w-5 h-5  transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {open && (
        <div className="absolute bg-[#F5F5F5] w-[80%] rounded text-color  max-h-40 hide-scrollbar z-10 shadow-lg">
          {options.map((opt) => {
            const isSelected = selected.includes(opt);
            return (
              <div
                key={opt}
                onClick={() => toggleOption(opt)}
                className={`px-4 py-2 cursor-pointer select-none ${
                  isSelected ? "bg-[#E7EBE5]" : "hover:bg-[#E7EBE5]"
                }`}
              >
                {opt}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
