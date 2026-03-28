import React, { useState } from "react";
import { Link } from "react-router";

const Contactcard = ({ title, value, href }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        flex flex-col justify-between
        p-7 md:p-8
        rounded-2xl
        border border-[#2a2a2a]
        no-underline
        flex-1 min-w-0
        transition-all duration-300
        cursor-pointer
        ${hovered ? "bg-[#1a1a1a] -translate-y-1" : "bg-[#141414]"}
      `}
    >
      {/* Title */}
      <p className="text-[#aaa] text-[15px] font-normal leading-relaxed mb-8">
        {title}
      </p>

      {/* Bottom section */}
      <div className="flex items-center justify-between">
        <span className="text-[#E8A94A] text-[16px] font-medium transition-colors duration-200">
          {value}
        </span>

        {/* Icon */}
        <span
          className={`
            w-9 h-9
            rounded-full
            border border-[#333]
            flex items-center justify-center
            text-white text-sm
            transition-transform duration-300
            ${hovered ? "rotate-0" : "-rotate-45"}
          `}
        >
          ↗
        </span>
      </div>
    </Link>
  );
};

export default Contactcard;