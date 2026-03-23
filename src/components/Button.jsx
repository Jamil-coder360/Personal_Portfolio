import React from 'react'

const styles = {
  black: "bg-black text-white",
  white: "bg-white text-black border border-black",
  transparent: "bg-transparent text-black border border-gray-400",
};
const Button = ({children,variant = "black"}) => {

    
  return (
   <button className={`${styles[variant]} flex items-center justify-between py-5 px-8 uppercase cursor-pointer  text text-black rounded-[8px]`} >
    {children}
   </button>
  )
}

export default Button