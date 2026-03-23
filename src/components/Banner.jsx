import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import Button from "./Button";
import bannerImage from "../assets/banner_left.svg"
import behance from "../assets/behance.svg";
import linkedin from "../assets/linkdin.svg";
import discord from "../assets/discord.svg";
import github from "../assets/github.svg";
const Banner = () => {
 const bgImage = {
    background: `url(${bannerImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const social = [
    {
      id: 1,
      image: behance,
      link: "/",
    },
    {
      id: 2,
      image: linkedin,
      link: "/about",
    },
    {
      id: 3,
      image: discord,
      link: "/project",
    },
    {
      id: 4,
      image: github,
      link: "/blog",
    },
  ];
  return (
    <section className="relative min-h-screen bg-[#F5EDE0] overflow-hidden flex items-center">
 
      <div className="relative z-20 px-16 max-w-[560px]">
        {/* Greeting */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-[2px] bg-[#1a1a1a]" />
          <p className="text-[15px] font-medium text-[#1a1a1a] tracking-wide">
            Hello, I'm
          </p>
        </div>

        {/* Name */}
        <h1
          className="font-black leading-none text-[#1a1a1a] mb-2"
          style={{
            fontSize: "clamp(64px, 9vw, 100px)",
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "-1px",
          }}
        >
          <span className="block relative">
            {/* Yellow circle behind M */}
            <span className="absolute left-0 top-[8px] w-[70px] h-[70px] bg-[#F5A623] rounded-full -z-10" />
            MD Nahid
          </span>
          <span
            className="block"
            style={{ WebkitTextStroke: "2px #1a1a1a", color: "transparent" }}
          >
            Hasan Jamil
          </span>
        </h1>

        {/* Blue underline */}

        {/* Subtitle */}
        <p className="text-[15px] text-[#1a1a1a] font-medium mb-8 tracking-wide">
          Product Designer | Based in Germany
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 mb-16">
          <Link to="/contact">
            <Button>
              Let's Talk <ArrowUpRight size={24} />
            </Button>
          </Link>

          <Link to="/work">
            <Button variant="transparent">
              My Work <ArrowUpRight size={16} />
            </Button>
          </Link>
        </div>

        {/* Stats + Social */}
        <div className="flex items-center gap-6">
          {/* Stats */}
          <div>
            <span className="text-2xl font-black text-[#1a1a1a]">1.2k+</span>
            <span className="text-sm text-[#555] ml-2">Worldwide client</span>
          </div>

          <div className="w-[1px] h-8 bg-[#ccc]" />

          {/* Social Icons */}
          <ul className="flex items-center gap-4">
            {social.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="flex items-center gap-2 text-[#1a1a1a] hover:text-blue-500 transition"
                >
                  <img
                    src={item.image}
                    alt="icon"
                    className="w-5 h-5 object-contain"
                  />
                  <ArrowUpRight size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact Me circular badge */}
      <div style={bgImage} className="absolute bottom-[60px] right-[60px] z-20">
        <div className="relative w-[90px] h-[90px]">
          {/* Rotating text ring */}
          <svg
            className="absolute inset-0 animate-spin"
            style={{ animationDuration: "8s" }}
            viewBox="0 0 90 90"
          >
            <defs>
              <path
                id="circle"
                d="M 45,45 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
              />
            </defs>
            <text fontSize="9" fill="#fff" letterSpacing="3.2" fontWeight="600">
              <textPath href="#circle">CONTACT ME • CONTACT ME •</textPath>
            </text>
          </svg>
          {/* Center arrow button */}
          <Link
            to="/contact"
            className="absolute inset-0 m-auto w-[50px] h-[50px] bg-[#F5A623] rounded-full flex items-center justify-center hover:bg-[#e09610] transition"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <ArrowDownToLine size={18} color="#1a1a1a" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
