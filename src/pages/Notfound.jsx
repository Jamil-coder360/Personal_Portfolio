import { ArrowUpIcon, ArrowUpRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import Button from '../components/Button'

const Notfound = () => {
  return (
    <section className='py-30'>
      <div className="container mx-auto">
        <div className=''>
          <div></div>
          <div className='text-center flex flex-col items-center gap-10'>

          <h1 className='text-black font-bold text-8xl uppercase'>page not found</h1>
          <Link to={"/"} className='flex items-center justify-center inline-block' >
          {/* <button className='flex items-center justify-between py-5 px-8 uppercase cursor-pointer bg-amber-400 text-black rounded-[8px]' > */}
            <Button variant='yellow'>

           back to home <ArrowUpRight/>
            </Button >
          {/* </buton> */}
          </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Notfound