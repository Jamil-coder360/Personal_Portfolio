import React from "react";
import { Link } from "react-router";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";
import Navber from "./Navber";
// import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="relative  flex items-center justify-between  border-b border-[#080808]/40 sticky top-0 z-1000">
      <div className="pl-12 ">
        <Link to="/">
          <img src="./logo.svg" alt="logo" className="w-28" />
        </Link>
      </div>

      <div className="flex justify-end gap-2">
        <span className="hidden lg:block">
          <Button variant="white">
            Let’s Talk
            <ArrowUpRight size={24} />
          </Button>
        </span>

        <Navber />
      </div>
    </header>
  );
};

export default Header;
