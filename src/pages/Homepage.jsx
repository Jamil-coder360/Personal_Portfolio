import React from 'react'
import Banner from '../components/Banner'
import Service from '../components/service/Service'
import Resume from '../components/Resume'
import Portfolio from '../components/Portfolio'
import Testimonial from '../components/Testimonial'

const Homepage = () => {
    return(
        <>
        <Banner />
        <Service />
        <Resume />
        <Portfolio />
        <Testimonial />
        </>
    )
}

export default Homepage