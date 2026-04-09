import React from 'react'
import Banner from '../components/Banner'
import Service from '../components/service/Service'
import Resume from '../components/Resume'
import Portfolio from '../components/Portfolio'
import Testimonial from '../components/Testimonial'
import Blog from '../components/Blog'
import Pricing from '../components/Pricing'
import Hello from '../components/Hello'

const Homepage = () => {
    return(
        <>
        <Banner />
        <Service />
        <Hello />
        <Resume />
        <Portfolio />
        <Testimonial />
        <Blog />
        <Pricing />
        </>
    )
}

export default Homepage