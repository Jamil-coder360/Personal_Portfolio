import React from 'react'
import Banner from '../components/Banner'
import Service from '../components/service/Service'
import Resume from '../components/Resume'
import Portfolio from '../components/Portfolio'
import Testimonial from '../components/Testimonial'
import Blog from '../components/Blog'
import Pricing from '../components/Pricing'
import Aboutme from '../components/Aboutme'

const Homepage = () => {
    return(
        <>
        <Banner />
        <Service />
        <Aboutme />
        <Resume />
        <Portfolio />
        <Testimonial />
        <Blog />
        <Pricing />
        </>
    )
}

export default Homepage