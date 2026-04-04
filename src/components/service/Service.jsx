import React from "react";
import SectionHeading from "../Section/SectionHeading";
import Section from "../Section/Section";
import Container from "../Section/Container";
import ServiceCard from "./ServiceCard";

import image1 from "../../assets/mobile.svg";
import image2 from "../../assets/uiux.svg";
import image3 from "../../assets/web.svg";
import image4 from "../../assets/webflow.svg";
import image5 from "../../assets/brand.svg";
import image6 from "../../assets/interaction.svg";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
const serviceMenu = [
  {
    id: 1,
    title: "UI/UX Design",
    image: image1,
  },
  {
    id: 2,
    title: "Web Development",
    image: image2,
  },
  {
    id: 3,
    title: "Mobile App Development",
    image: image3,
  },
  {
    id: 4,
    title: "Digital Marketing",
    image: image4,
  },
  {
    id: 4,
    title: "Digital Marketing",
    image: image5,
  },
  {
    id: 4,
    title: "Digital Marketing",
    image: image6,
  },
];
const Service = () => {
  return (
    <Section className="py-30">
      <Container>
        <div>
          <div className="flex items-center justify-between">
            <SectionHeading title="My specialties" subtitle="Services" />
            <p className="w-[636px] text-[#080808]/60 text-[18px] leading-[1.6] font-normal">
              Synergistically seize front-end methods of empowerment without
              extensive core competencies. Progressively repurpose alternative
              platforms{" "}
            </p>
          </div>
          <div className="grid grid-cols-[auto_416px] gap-6">
            <div className="grid grid-cols-3 gap-10 mt-16">
              {serviceMenu.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            <Link
              href="mailto:hello@henry.com"
              className="flex flex-col justify-between p-8 rounded-2xl bg-[#0d0d0d] border border-[#1f1f1f] no-underline w-full min-h-[340px] group cursor-pointer mt-16"
            >
              {/* Top Row */}
              <div className="flex items-start justify-end">
                <div className="w-10 h-10 rounded-full border border-[#2e2e2e] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} className="text-[#E8A94A]" />
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Bottom */}
              <div className="flex flex-col gap-2">
                <span className="text-[#E8A94A] text-[18px] leading-[1.6] font-normal tracking-[0.2em] uppercase">
                  Say Hello!
                </span>
                <p className="text-white text-[32px] font-bold leading-[1.2] ">
                  hello@henry.com
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Service;
