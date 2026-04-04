import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import Button from "./Button";
import bannerImage from "../assets/banner_left.svg";
import behance from "../assets/behance.svg";
import linkedin from "../assets/linkdin.svg";
import discord from "../assets/discord.svg";
import github from "../assets/github.svg";
import Social from "./Social";

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
      link: "https://www.linkedin.com/in/md-nahid-hasan-jamil-a21086386",
    },
    {
      id: 3,
      image: discord,
      link: "https://",
    },
    {
      id: 4,
      image: github,
      link: "https://github.com/Jamil-coder360?tab=overview&from=2026-02-01&to=2026-02-28",
    },

  ];
  return (
    <section className="relative  bg-[#F5EDE0]  flex items-center">
      <div className="grid grid-cols-2 gap-10 items-center justify-between">
        <div className="relative z-20 px-16 ">
          {/* Greeting */}
          <div className="flex items-center gap-3 mb-4 max-w-[560px]">
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
                My Work <ArrowUpRight size={24} />
              </Button>
            </Link>
          </div>

          {/* Stats + Social */}
     <Social 
     social={social}
     icon={true}
     review="1.2k+"
     type={true}
     title="Worldwide client"
     />
        </div>

        <div
          className="relative hidden lg:block h-screen flex items-center justify-center"
          style={bgImage}
        ></div>
      </div>
    </section>
  );
};

export default Banner;
