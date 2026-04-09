import React from "react";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

const PortfolioCard = ({ image, title = "Basinik Finance App" }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="rounded">
        <img src={image} alt="image" />
      </div>
      <div>
        <div className="flex gap-2 pt-6 pb-3">
          <Button className="!py-1.5 !px-4 !rounded-3xl" variant="transparent">
            APP
          </Button>
          <Button className="!py-1.5 !px-4 !rounded-3xl" variant="transparent">
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
