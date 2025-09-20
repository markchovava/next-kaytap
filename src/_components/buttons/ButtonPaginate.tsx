"use client"
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";


interface ButtonPaginateInterface{
    title?: string, 
    css?: string, 
    iconCss?: string,
    direction: string,
    onClick: () => void
}


export default function 
({
  title, 
  direction= "right",
  css="text-gray-800", 
  iconCss="group-hover:text-gray-800",
  onClick= () => {}
}: ButtonPaginateInterface 
) {
  return (
    <>
     {direction === "right" ?
        <button 
            onClick={() => onClick()}
            className={`${css} cursor-pointer group flex items-center justify-center gap-1 border border-gray-400 rounded-full`}>
            <span className="translate-x-1 group-hover:-translate-x-1 ease-initial duration-300 transition-all">
                {title} 
            </span>
            <FaAngleRight 
            className={`${iconCss} text-transparent ease-initial duration-300 transition-all  -translate-x-1 group-hover:translate-x-1`} />
        </button>
        : ""
    }

    {direction === "left" ?
     <button 
        onClick={() => onClick()}
        className={`${css} cursor-pointer group flex items-center justify-center gap-1 border border-gray-400 rounded-full`}>
        <FaAngleLeft 
            className={`${iconCss} text-transparent ease-initial duration-300 transition-all translate-x-1 group-hover:-translate-x-1`} />
        <span className="-translate-x-1 group-hover:translate-x-1 ease-initial duration-300 transition-all">
            {title} </span>
    </button>
    : ""
    }
    </>
  )
}
