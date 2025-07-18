import React from "react";
function Title({ level = "h3", color = "black", className = "", children }) {
  const Tag = level === "h2" ? "h2" : "h3";

  // Color logic
  const colorClass =
    color === "green"
      ? "text-[#3EB64A]"
      : color === "white"
      ? "text-white"
      : "text-color ";

  // Base styles
  const baseClasses =
    "font-normal leading-[1] tracking-normal font-[Fira_Sans]";

  // Level styles
  const levelClasses =
    level === "h2" ? "text-[33px] uppercase" : "text-[25px] normal-case";

  // Merge all classes
  const combinedClasses = `${baseClasses} ${levelClasses} ${colorClass} ${className}`;

  return <Tag className={combinedClasses}>{children}</Tag>;
}

export default Title;
