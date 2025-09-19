"use client"
import { FaAngleRight } from "react-icons/fa6";


interface ButtonPrimaryInterface{
    title?: string,
    iconCss?: string, 
    css?: string,
    isSubmit?: boolean
}

export function ButtonSubmit({
    title="Button", 
    css="text-white px-6 py-3", 
    iconCss="",
    isSubmit
  }: ButtonPrimaryInterface
) {

  return (
    <>
    <button 
      type="submit"
      className={`${css} group bg-gradient-to-br from-blue-700 to-blue-950 hover:drop-shadow cursor-pointer 
      flex items-center justify-center gap-1 rounded-full`}>
      <span 
        className='group-hover:-translate-x-1 translate-x-2 ease-in-out duration-400 transition-all'>
        {isSubmit ? "Processing" : title}
      </span>
      <FaAngleRight
        className={`${iconCss} group-hover:translate-x-1 text-transparent group-hover:text-white ease-in-out 
        duration-300 transition-all`} />
    </button>
    </>
  )
}