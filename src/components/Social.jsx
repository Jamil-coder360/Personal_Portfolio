import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Social = ({social,title,review,color,type,icon}) => {
  return (
        <div className="flex items-center gap-6">
            <div>
              <span className="text-2xl font-black text-[#1a1a1a]">{review}</span>
              <span className={`inline-block ${type ? "text-sm text-[#555]":"text-bold text-white" } `}>{title}</span>
            </div>

            <div className="w-[1px] h-8 bg-[#ccc]" />

            <ul className="flex items-center gap-4">
              {(social).map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className={`flex items-center gap-2  hover:text-blue-500 transition ${color ? "text-white": "text-[#1a1a1a]" } ` }
                  >
                   {icon?( <img
                     src={item.image}
                     alt="icon"
                     className="w-5 h-5 object-contain  "
                   /> ):
                    (item.image)}
                    <ArrowUpRight  className='size-4 ' />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
  )
}

export default Social