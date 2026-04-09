import React from "react";
import Section from "./Section/Section";
import Container from "./Section/Container";
import SectionHeading from "./Section/SectionHeading";
import Button from "./Button";
import PricingCard from "./PricingCard";
import { pricingData } from "../Data";
const Pricing = () => {
  return (
    <Section className="py-10 lg:py-30">
      <Container>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-[500px_auto] items-end justify-between gap-5">
            <SectionHeading
              title="Stay chill and pick your plan"
              subtitle="Pricing"
            />
            <Button Tagname="a" href="/contact">Contact for Custom Project</Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-16">
            {pricingData.map((item) => (
              <PricingCard
                key={item.id}
                type={item.type}
                time={item.time}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Pricing;
