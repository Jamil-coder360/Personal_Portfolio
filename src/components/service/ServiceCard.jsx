import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const ServiceCard = ({service}) => {
  return (
    <div className='group flex flex-col items-start gap-8 max-w-full  lg:max-w-[270px] max-h-full lg:max-h-[192px] rounded-2xl bg-[#080808]/4 px-6 py-7 hover:bg-[#ffffff] hover:shadow hover:-translate-y-1 transition-all duration-300'>
      <div className='flex items-center justify-center bg-[#FFFFFF] group-hover:bg-[#080808]/4  rounded-full p-4'>
            <img src={service.image} alt="" />
          </div>
        <div className='flex items-center justify-between w-full'>
            <h3 className='text-[20px] font-bold text-[#080808]  '>
              {service.title}
            </h3>
            <ArrowUpRight />
        </div>
    </div>
  )
}

export default ServiceCard