import React from "react";
import Section from "./Section/Section";
import Container from "./Section/Container";
import SectionHeading from "./Section/SectionHeading";
import BlogCard from "./BlogCard";
import { blogData } from "../Data";

const Blog = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="pb-10">
            <SectionHeading
              className="flex flex-col items-start lg:items-center"
              title="My blog post"
              subtitle="Blog"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-6 gap-y-10 items-center justify-center">
            {blogData.map((item, index) => (
              <div
                key={item.id}
                className={`${index % 2 !== 0 ? "mt-0 lg:mt-10" : ""}`}
              >
                <BlogCard
                  image={item.image}
                  title={item.title}
                  category={item.category}
                  date={item.date}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Blog;
