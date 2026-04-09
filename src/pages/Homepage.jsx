import React from 'react'
import Banner from '../components/Banner'
import Service from '../components/service/Service'
import Resume from '../components/Resume'
import Portfolio from '../components/Portfolio'
import Testimonial from '../components/Testimonial'
import Blog from '../components/Blog'

const Homepage = () => {
    return(
        <>
        <Banner />
        <Service />
        <Resume />
        <Portfolio />
        <Testimonial />
        <Blog />
        </>
    )
}

export default Homepage