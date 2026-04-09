import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

const Mainlayout = () => {
  return (
    <main className="">
    <Header />
    <Outlet />
    <Footer />
    </main>
  )
}

export default Mainlayout