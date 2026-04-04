import React from 'react'

const styles = {
  black: "bg-black text-white",
  white: "bg-white text-black ",
  transparent: "bg-transparent text-black border border-gray-400",
  yellow:"bg-[#FFB646] text-white"
};
const Button = ({children,variant = "black"}) => {
  return (
   <button className={`${styles[variant]} flex items-center justify-between gap-2 py-5 px-8 uppercase cursor-pointer text-black rounded-[8px]`} >
    {children}
   </button>
  )

}

export default Button;
