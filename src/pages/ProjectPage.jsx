import React from "react";
import Section from "../components/Section/Section";
import Container from "../components/Section/Container";
import SectionHeading from "../components/Section/SectionHeading";
import image1 from "../assets/port-1.jpg";
import medove from "../assets/image_med.png"
import ecomerce from "../assets/image-e.png"
import portfolio from "../assets/image-p.png"
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const Card = ({ image="",href,title = "Project Title", wide }) => {
  const bgImage = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div
      style={bgImage}
      className={`relative w-full border border-[#C4C4C4] h-95 rounded-2xl overflow-hidden cursor-pointer group transition-transform duration-300 hover:-translate-y-1 ${
        wide ? "col-span-2" : ""
      }`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Bottom Content */}
      <Link to={href}>
      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center justify-between bg-black/40 backdrop-blur-sm 
      translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-[16px] font-semibold text-white">{title}</h3>

        <div className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center">
          <ArrowUpRight size={14} className="text-white" />
        </div>
      </div>
        </Link>
    </div>
  );
};

const ProjectPage = () => {
  return (
    <Section className=" pt-20 pb-30">
      <Container>
        <SectionHeading
          className="flex flex-col items-start lg:items-center pb-12"
          title="My recent work"
          subtitle="Portfolio"
        />
 <div className="flex flex-col gap-6.5">

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-5  gap-6 mb-3">
          <div className="col-span-3 lg:col-span-2">
            <Card image={medove} title="Landing Page Design" href="https://medove-fashion-jlb5.vercel.app" />
          </div>
          <div className="col-span-3">
            <Card image={image1} title="Oxilex Dashboard Design" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-3">
          <Card image={ecomerce} title="E-commerce UI" href={"https://e-commerce-five-orpin-12.vercel.app"}/>
          <Card image={portfolio} title="Portfolio Website" href={"https://personal-portfolio-tan-theta.vercel.app"} />
          <Card image={image1} title="Mobile App Design" />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="col-span-3">
            <Card image={image1} title="Admin Panel UI" />
          </div>
          <div className="col-span-3 lg:col-span-2 ">
            <Card image={image1} title="Blog Platform" />
          </div>
        </div>
  </div>
      </Container>
    </Section>
  );
};

export default ProjectPage;
