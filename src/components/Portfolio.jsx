import React from "react";
import Section from "./Section/Section";
import Container from "./Section/Container";
import SectionHeadding from "./Section/SectionHeading";
import PortfolioCard from "./PortfolioCard";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

import port1 from "../assets/port-1.jpg";
import port2 from "../assets/port-2.jpg";
import { Link } from "react-router";

const Portfolio = () => {
  return (
    <Section className="py-25 bg-[#FFE9D9]">
      <Container>
        <div>
          <div className="pb-10">
            <SectionHeadding
              className="flex flex-col items-center"
              title="My recent work"
              subtitle="Portfolio"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 pb-12">
            <PortfolioCard image={port1} />
            <PortfolioCard image={port2} title="Oxilex Dashboard design" />
          </div>
          {/* <Link to= "/pro"> */}
          <Button
            className="w-full justify-center "
            Tagname="a"
            href="/project"
          >
            View All Project
            <ArrowUpRight />
          </Button>
          {/* </Link> */}
        </div>
      </Container>
    </Section>
  );
};

export default Portfolio;
