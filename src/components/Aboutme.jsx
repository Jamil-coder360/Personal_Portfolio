import React from "react";
import Section from "./Section/Section";
import Container from "./Section/Container";
import SectionHeading from "./Section/SectionHeading";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";
import IMG from "../assets/Img.png"
const Aboutme = () => {
  return (
    <Section className="pb-30">
      <Container>
        <div className="grid grid-cols-[636px_auto] gap-34.5">
          <div>
            <img src={IMG} alt="" />
          </div>
          <div className="max-w-[526px]">
            <SectionHeading
              title="Mark Henry, Product Designer"
              subtitle="Hello I’m"
            />
            <h2 className="text-[44px] leading-13.5 font-bold mt-3 mb-4">Based in German</h2>
            <p className="text-[18px] leading-7 font-normal text-[#080808]/60">
              That is where I come in. A lover of words, a wrangler of copy.
              Here to create copy that not only reflects who you are and what
              you stand for, but words that truly land with those that read
              them, calling your audience in and making them .
            </p>
            <div className="flex gap-8 flex-wrap pt-6 pb-9">
              <div>
                <p className="text-3xl font-bold text-gray-900">08</p>
                <p className="text-sm text-gray-500 mt-1">Award winner</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">1.2k</p>
                <p className="text-sm text-gray-500 mt-1">Worldwide client</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">3.5k</p>
                <p className="text-sm text-gray-500 mt-1">
                  Job done successfully
                </p>
              </div>
            </div>

            <Button>
              Download my resume <ArrowUpRight />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Aboutme;
