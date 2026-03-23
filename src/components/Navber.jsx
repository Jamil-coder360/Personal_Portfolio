import { ArrowUpRight, TextAlignJustify, X } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router';
import Button from './Button';


const Navber = () => {
   const menuItem = [
    {
      id: 1,
      text: "HOME",
      link: "/",
    },
    {
      id: 2,
      text: "About",
      link: "/shop",
    },
    {
      id: 3,
      text: "Projec",
      link: "/product",
    },
    {
      id: 5,
      text: "BLOG",
      link: "/blog",
    },
       {
      id: 4,
      text: "content",
      link: "/content",
    },
  ]; 
  const [menuopen,setMenuOPen]=useState(false);
   return (
    <nav className="">

<div className="relative z-50" onClick={()=>{setMenuOPen(!menuopen)}}>
  <Button> 

{menuopen?
  <X size={24} className='bg-amber-300' />:
  <TextAlignJustify size={24}  /> 
}
  </Button>
</div>
{menuopen &&(

      <div className="absolute top-0 right-0  w-[458px] h-screen bg-black ">
        <ul className="flex flex-col items-center justify-between gap-8 p-8">
          {menuItem.map((item) => (
            <li key={item.id} className="border-b border-gray-500 py-3 w-full text-center">
              <Link
                to={item.link}
                className="flex items-center justify-between gap-2 text-white hover:text-blue-400 transition"
              >
                {item.text}
                <ArrowUpRight size={18} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
)}
    </nav>
  );
};

export default Navber