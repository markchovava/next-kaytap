"use client";
import { FaAngleRight } from "react-icons/fa6";


interface  ButtonQuaternaryInterface{
    title: string, 
    css: string
}


export default function ButtonQuaternary({title, css}: ButtonQuaternaryInterface) {
  return (
    <button 
        className={`${css} bg-gray-500 hover:bg-gray-600 group bg-gray hover:drop-shadow cursor-pointer flex items-center 
            justify-center gap-1 rounded-full`}>
        <span 
            className='group-hover:-translate-x-1 translate-x-2 ease-in-out duration-400 transition-all'>
            {title}
        </span>
        <FaAngleRight
            className={`group-hover:translate-x-1 text-transparent group-hover:text-white ease-in-out duration-300 transition-all`} />
    </button>
  )
}
