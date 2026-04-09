import { ArrowUpRight } from "lucide-react";


const PricingCard = ({ type, time, title, subtitle }) => {
  return (
    <div className="flex flex-col items-start p-8 max-w-104 max-h-52 hover:bg-white bg-[#080808]/4  hover:-translate-y-2.5 duration-300 shadow-xl rounded-2xl">
      <div className="flex items-center justify-between w-full">
        <p className=" text-[14px] leding-[20px] font-normal">{type}</p>
        <p className="text-[#FFB646] text-[14px] leding-[20px] font-normal">
          {time}
        </p>
      </div>
      <strong className="text-[32px] font-bold text-[#080808] leading-[40px]  pt-12 pb-0.5">
        {subtitle}
      </strong>
      <div className="flex items-end justify-between w-full">
        <h3 className="text-[18px] font-normal text-[#080808]/60  ">{title}</h3>
        <ArrowUpRight size={32} />
      </div>
    </div>
  );
};

export default PricingCard;
