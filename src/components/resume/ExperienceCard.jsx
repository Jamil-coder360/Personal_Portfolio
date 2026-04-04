import React from 'react'

const ExperienceCard = ({company, title, date,institute,type, className="",}) => {
  return(
 <div className={`bg-[#080808]/10 py-7.5 px-6 rounded-xl flex flex-col hover:translate-y-1 transition-all duration-300 ${className}`}>
      <span className='pb-8 text-[#080808]/80 text-[14px] leading-[1.45] font-normal'>{date}</span>
      <div className='flex items-center gap-2' >
        <div className='w-2 h-2 bg-[#FFB646] rounded-full'></div>
        <p>{type?(company):(institute)}</p>
      </div>
        <h3 className='text-[#080808] font-bold text-[24px] leading-[1.5] pt-1'>{title}</h3>

      </div>
  )
}

export default ExperienceCard