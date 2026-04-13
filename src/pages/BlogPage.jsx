import React from 'react'
import Section from '../components/Section/Section'
import Container from '../components/Section/Container'
import SectionHeading from '../components/Section/SectionHeading'
import BlogCard from '../components/BlogCard'
import { blogPageData } from '../Data'

const BlogPage = () => {
  return (
    <Section className='pt-20 pb-30'>
        <Container>
                <SectionHeading
              className="flex flex-col items-start lg:items-center pb-12"
              title="My blog post"
              subtitle="Blog"
            />
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-6 gap-y-10 items-center justify-center">
            {blogPageData.map((item, index) => (
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

        </Container>
    </Section>
  )
}

export default BlogPage