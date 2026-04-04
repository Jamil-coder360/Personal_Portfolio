import React from "react";
import Section from "../components/Section/Section";
import SectionHeading from "../components/Section/SectionHeading";
import Container from "../components/Section/Container";
import Button from "../components/Button";
import { ArrowUpRight } from "lucide-react";
import Social from "../components/Social";
import Behance from "../components/icons/Behance.jsx";
import LinkedIn from "../components/icons/Linkdin.jsx";
import Discord from "../components/icons/Discord.jsx";
import Github from "../components/icons/Github.jsx";
const ContactPage = () => {
  const social = [
    {
      id: 1,
      image: <Behance />,
      link: "/",
    },
    {
      id: 2,
      image: <LinkedIn />,
      link: "https://www.linkedin.com/in/md-nahid-hasan-jamil-a21086386",
    },
    {
      id: 3,
      image: <Discord />,
      link: "https://",
    },
    {
      id: 4,
      image: <Github />,
      link: "https://github.com/Jamil-coder360?tab=overview&from=2026-02-01&to=2026-02-28",
    },
  ];

  return (
    <Section className="pb-30 pt-20 ">
      <Container>
        <div className="grid grid-cols-2 gap-10">

        <div>
       <SectionHeading title="Let’s connect"  subtitle="Contact me" />
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full border rounded p-4"
                placeholder="Your name*"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border rounded p-4"
                placeholder="Your email*"
              />
            </div>
            <div>
              <label htmlFor="Phone">Phone</label>
              <input
                type="tel"
                id="Phone"
                className="w-full border rounded p-4"
                placeholder="Your phone*"
              />
            </div>
            <div className="w-full">
              <label htmlFor="Subject*">Subject</label>
              <input
                type="text"
                id="Subject*"
                className="w-full border rounded p-4"
                placeholder="Your subject*"
              />
            </div>
            <div className="w-full col-span-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full border rounded p-4"
                placeholder="Type your message"
              ></textarea>
            </div>
          </div>
          <div className="pb-18.5 pt-5">
            <Button>
              Submit <ArrowUpRight />{" "}
            </Button>
          </div>
          <Social social={social} review="Follow me" type={true} />
        </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactPage;
