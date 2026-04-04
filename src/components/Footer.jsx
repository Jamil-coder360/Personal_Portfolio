import React from "react";
import Contactcard from "./Contactcard";
import behance from "../assets/wbehance.svg";
import linkedin from "../assets/wlinkdin.svg";
import discord from "../assets/wdiscord.svg";
import github from "../assets/wgithub.svg";
import Social from "./Social";
import { Link } from "react-router";

const Footer = () => {
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
    <section className="bg-black pb-15 pt-30">
      <div className="container mx-auto">
        <div className="">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-white text-[62px] font-bold leading-[1.3] pb-10">
                Let’s work together
              </h3>
              <Social icon={true} social={social} title="Based in Germany" color={true} />
            </div>
            <Contactcard
              title="Email me"
              value="jamil595@gmail.com"
              href="mailto:jamil595@gmail.com"
            />
            <Contactcard
              title="call me"
              value="01608141595"
              href="tel:01608141595"
            />
          </div>
          <div>
            <h1 className="flex text-[#FFE9D9] text-center text-[220px] uppercase">
              markhenry
            </h1>
          </div>
          <div
            className="flex items-center justify-between border-amber-200 "
            style={{ paddingTop: "20px", borderTop: "1px solid #1e1e1e" }}
          >
            <span
              style={{
                color: "#555",
                fontSize: "13px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              ©2023 Mark Henry, All Rights Reserved
            </span>
            <a
              href="#top"
              className="back-top text-[#555] hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Back to Top <span className="arrow-up">↑</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
