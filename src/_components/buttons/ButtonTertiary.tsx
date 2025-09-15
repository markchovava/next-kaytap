"use client"
import { FaAngleRight } from "react-icons/fa";


interface ButtonTertiaryInterface{
    title?: string, 
    css?: string, 
    iconCss?: string,
}


export default function ButtonTertiary({
  title, 
  css="text-gray-800", 
  iconCss="group-hover:text-gray-800"}: 
  ButtonTertiaryInterface 
) {
  return (
    <>
     <button 
        className={`${css} cursor-pointer group flex items-center justify-center gap-1 border border-gray-400 rounded-full`}>
        <span className="translate-x-1 group-hover:-translate-x-1 ease-initial duration-300 transition-all">
            {title} 
        </span>
      <FaAngleRight 
        className={`${iconCss} text-transparent ease-initial duration-300 transition-all  -translate-x-1 group-hover:translate-x-1`} />
    </button>
    </>
  )
}
