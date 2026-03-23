import React from "react";
import { Link } from "react-router";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";
import Navber from "./Navber";
// import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="relative flex items-center justify-between p-4">
      <Link to="/">
        <img src="./logo.svg" alt="logo" className="w-28" />
      </Link>

      <Button variant="transparent">
        Let’s Talk
        <ArrowUpRight size={24} />
      </Button>
      <Navber/>
    </header>
  );
};

export default Header;