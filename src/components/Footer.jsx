import React from "react";
import Contactcard from "./Contactcard";
import behance from "../assets/wbehance.svg";
import linkedin from "../assets/wlinkdin.svg";
import discord from "../assets/wdiscord.svg";
import github from "../assets/wgithub.svg";
import Social from "./Social";
import { Link } from "react-router";
import Container from "./Section/Container";
import Section from "./Section/Section";

const Footer = () => {
  const date = new Date();
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
    <footer className="bg-black lg:pb-15 py-10 lg:pt-30">
      <Container>

      {/* <div className="container mx-auto"> */}
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-white text-[30px] lg:text-[62px] font-bold leading-[1.3] pb-10">
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
          <div className="flex text-center w-full size-full py-5">
            <h1 className=" text-[#FFE9D9] text-center text-2xl lg:text-[115.5px] leading-[1.5]   uppercase w-full">
              md:nahid hasan jamil
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
              © {date.getFullYear()} MD:Nahid Hasan Jamil, All Rights Reserved
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
      {/* </div> */}
      </Container>
    </footer>
  );
};

export default Footer;
