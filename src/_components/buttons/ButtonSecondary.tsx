"use client"

import { FaAngleRight } from "react-icons/fa";


interface ButtonSecondaryInterface{
    title?: string, 
    css?: string, 
    iconCss?: string,
}

export default function ButtonSecondary({
  title, 
  css="text-gray-800", 
  iconCss="group-hover:text-gray-800"}: 
  ButtonSecondaryInterface 
) {
  return (
    <>
     <button className={`${css} cursor-pointer group flex items-center justify-center gap-1`}>
      <span className="translate-x-1 group-hover:-translate-x-1 ease-initial duration-300 transition-all">
      {title} 
      </span>
      <FaAngleRight className={`${iconCss} text-transparent ease-initial duration-300 transition-all  -translate-x-1 group-hover:translate-x-1`} />
    </button>
    </>
  )
}
