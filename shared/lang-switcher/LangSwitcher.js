import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
import React from 'react';

function LangSwitcher({ classes }) {
  return (
    <div className={clsx("items-center gap-[.3125rem] cursor-pointer", classes)}>
      <span className="text-[#323232] ">UA</span>
      <ChevronDown size={16} className="text-[#323232]" />

    </div>
  );
}

export default LangSwitcher;