import { ArrowUpRight } from "lucide-react";
import React from "react";

const BlogCard = ({ image ,title="Right-lo-left behind development in mobile web design" }) => {
  return (
    <div className="max-w-full lg:max-w-76.5  hover:-translate-y-3.5 duration-300">
      <div className="w-full lg:w-76.5 h-95">
        <img src={image} alt="image" className="rounded-2xl w-full h-full"/>
      </div>
      <div className="flex  items-center gap-3 w-51 pt-6 pb-3">
        <div className="flex items-center justify-between w-full">
          <div className="w-2 h-2 bg-[#100f0f] rounded-full"></div>
          <p className=" text-[14px] leding-[20px] font-normal">UI Designt</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="w-2 h-2 bg-[#FFB646] rounded-full"></div>
          <p className="text-[#FFB646] text-[14px] leding-[20px] font-normal">03 May 2019</p>
        </div>
      </div>
         <div className="flex items-end justify-between w-full">
          <h3 className="text-[20px] font-bold text-[#080808]  ">{title}</h3>
          <ArrowUpRight size={32} />
        </div>
    </div>
  );
};

export default BlogCard;
