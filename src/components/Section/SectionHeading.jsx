import React from "react";

const SectionHeading = ({ title="hjjkk", subtitle,className="" }) => {
  return (
    <div className={className}>
      <p className="text-[20px] leading-[1.4] font-bold text-[#FF9330] pb-2">
        {subtitle}
      </p>
      <h2 className="text-[64px] leading-[1.2] font-bold text-[#080808] tracking-[-1.25%] relative ">
        <span className="absolute left-0 top-[8px] w-[70px] h-[70px] bg-[#F5A623] rounded-full -z-10" />
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
