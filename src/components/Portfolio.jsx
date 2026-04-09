import React from 'react'
import Section from "./Section/Section"
import Container from "./Section/Container"
import SectionHeadding from "./Section/SectionHeading"
import PortfolioCard from './PortfolioCard'
import Button from './Button'
import { ArrowUpRight } from 'lucide-react'
const Portfolio = () => {
  return (
    <Section className='py-25 bg-[#FFE9D9]'>
      <Container>
      <div className='flex flex-col items-center justify-center'>
        <SectionHeadding 
        className='flex flex-col items-center'
        title="My recent work"
        subtitle="Portfolio"
        />
      </div>
        <div className='grid grid-cols-2 gap-6 pb-12'>
            
        <PortfolioCard />
        <PortfolioCard />
        </div>
        <Button className="w-full justify-center">
        View All Project
        <ArrowUpRight />
      </Button>
      </Container>
    </Section>
  )
}

export default Portfolio