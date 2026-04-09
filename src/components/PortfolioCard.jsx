import React from "react";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

const PortfolioCard = ({ image, title = "Basinik Finance App" }) => {
  return (
    <div className="flex flex-col items-start">
      <div>
        <img src={image} alt="image"  className=" rounded-2xl hover:-translate-y-1.5 duration-300"/>
      </div>
      <div>
        <div className="flex gap-2 pt-6 pb-3 ">
          <Button className="!py-1.5 !px-4 !rounded-3xl hover:!bg-[#9b7f7f] hover:text-white hover:-translate-y-1 " variant="transparent">
            APP
          </Button>
          <Button className="!py-1.5 !px-4 !rounded-3xl hover:!bg-[#9b7f7f] hover:text-white hover:-translate-y-1" variant="transparent">
            DEVELOPMENT
          </Button>
        </div>
      </div>
        <div className="flex items-center justify-between w-full">
          <h3 className="text-[20px] font-bold text-[#080808]  ">{title}</h3>
          <ArrowUpRight />
        </div>
    
    </div>
  );
};

export default PortfolioCard;
