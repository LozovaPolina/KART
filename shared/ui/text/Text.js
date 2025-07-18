import React from "react";

function Text({ className = "", children }) {
  const baseClasses =
    "text-[15px] leading-[1] tracking-normal text-color font-normal font-[Fira_Sans]";

  return <p className={`${baseClasses} ${className}`}>{children}</p>;
}

export default Text;
