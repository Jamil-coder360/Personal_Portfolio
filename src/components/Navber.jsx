import { ArrowUpRight } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router';


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
   return (
    <nav className="absolute top-0 right-0">
      <div className=" w-[458px] h-screen bg-black">
        <ul className="flex flex-col items-center gap-8">
          {menuItem.map((item) => (
            <li key={item.id} className="border-b border-gray-500 py-3 w-full text-center">
              <Link
                to={item.link}
                className="flex items-center justify-center gap-2 text-white hover:text-blue-400 transition"
              >
                {item.text}
                <ArrowUpRight size={18} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navber