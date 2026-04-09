import React from 'react'
import Banner from '../components/Banner'
import Service from '../components/service/Service'
import Resume from '../components/Resume'
import Portfolio from '../components/Portfolio'

const Homepage = () => {
    return(
        <>
        <Banner />
        <Service />
        <Resume />
        <Portfolio />
        </>
    )
}

export default Homepage