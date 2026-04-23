import React from "react";
import Qout from "./icons/Qout";

const TestimonialCard = ({text}) => {
  return (
    <div className="w-full lg:w-76.5">
      <Qout />
      <p className="pt-10 pb-6 text-[20px] leading-7 font-bold text-[#080808]/80">
     {text}
      </p>
      <div className="flex items-center gap-2 mt-3">
        <span className="block w-12 h-0.5 bg-[#080808]/40"></span>
        <strong className="text-[18px] font-extrabold leading-[28px]  text-[#080808]">
          Jamil
        </strong>
      </div>
      
    </div>
    
  );
};

export default TestimonialCard;
