import React, { useState } from "react";
import Section from "./Section/Section";
import Container from "./Section/Container";
import SectionHeading from "./Section/SectionHeading";
import Button from "./Button";
import { ArrowUpRight, Component } from "lucide-react";
import About from "./resume/About";
import Experince from "./resume/Experince";
import Education from "./resume/Education";
import Skills from "./resume/Skills";
import Awards from "./resume/Awards";
const Resume = () => {
  const [active, setActive] = useState(1);
  const menu = [
    {
      id: 1,
      name: "About",
      component: <About />,
    },
    { id: 2, name: "Experience", component: <Experince /> },
    { id: 3, name: "Education", component: <Education /> },
    { id: 4, name: "Skills", component: <Skills /> },
    { id: 5, name: "Awards", component: <Awards /> },
  ];
  const activeContent = menu.find((item) => item.id === active);
  return (
    <Section className="bg-[#080808]/4 py-25">
      <Container>
        <div className="grid grid-cols-[416px_1fr] gap-10 items-center">
          <div className=" grid gap-6">
            <SectionHeading
              title="All over my details find here..."
              subtitle="Resume"
            />
            {menu.map((item) => (
              <Button
                key={item.id}
                onClick={() => setActive(item.id)}
                className="w-full"
                variant={active === item.id ? "black" : "white"}
              >
                {item.name} <ArrowUpRight />
              </Button>
            ))}
          </div>
          <div className="text-center">{activeContent?.component}</div>
        </div>
      </Container>
    </Section>
  );
};

export default Resume;
