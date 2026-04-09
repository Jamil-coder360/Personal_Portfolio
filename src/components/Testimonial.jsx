import React from 'react'
import Section from "./Section/Section"
import Container from "./Section/Container"
import SectionHeading from "./Section/SectionHeading"
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
    const tsetimonialData =[
        {
            id:1,
            text: "“Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic theme areas and clicks-and-mortar services”"
        },
        {
            id:1,
            text: "“Unleash  energistically build alternative scenarios via cross-unit  build efficient initiatives for distinctive vortals. Synergistically strategize via adaptiv“"
        },
        {
            id:1,
            text: "“Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra nisi. Fusce et laoreet augue. Quisque pretium, ligula lectus semper urna. Aliquam vehicula.”"
        }
    ]
  return (
   <Section className='py-10 lg:py-30'>
    <Container>
  <div className='grid grid-cols-1 lg:grid-cols-[416px_auto]'>
    <SectionHeading title=" Client feedback" subtitle="Testimonial" />
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
{
    tsetimonialData.map ((text) =>(
        <TestimonialCard key={text.id} text={text.text} />
    ))
}

    </div>
  </div>
    </Container>
   </Section>
  )
}

export default Testimonial