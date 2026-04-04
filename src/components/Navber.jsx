import { ArrowUpRight, TextAlignJustify, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";
import Button from "./Button";

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
      link: "/about",
    },
    {
      id: 3,
      text: "Project",
      link: "/project",
    },
    {
      id: 4,
      text: "BLOG",
      link: "/blog",
    },
    {
      id: 5,
      text: "Contact",
      link: "/contact",
    },
  ];
  const [menuopen, setMenuOPen] = useState(false);
  return (
    <nav className="">
      <div
        className="relative z-150"
        onClick={() => {
          setMenuOPen(!menuopen);
        }}
      >
        {menuopen ? (
          <Button variant="yellow">
            <X size={24} />
          </Button>
        ) : (
          <Button>
            <TextAlignJustify size={24} />
          </Button>
        )}
      </div>

      {menuopen && (
        <div className="absolute top-0 right-0 w-full lg:w-[458px] h-screen bg-black  z-100  ">
          <span className="flex justify-end pt-[65px]  mx-8 border-b border-gray-600" />

          <ul className="flex flex-col items-center justify-between gap-8 p-8 pt-40">
            {menuItem.map((item) => (
              <li
                onClick={() => {
                  setMenuOPen(false);
                }}
                key={item.id}
                className="border-b border-gray-500 py-3 w-full text-center uppercase"
              >
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

export default Navber;
