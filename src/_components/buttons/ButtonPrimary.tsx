import { FaArrowRight } from "react-icons/fa";


interface ButtonPrimaryInterface{
    title?: string,
    iconCss?: string, 
    css?: string
}


export function ButtonPrimary({
    title="Button", 
    css="text-white px-6 py-3", 
    iconCss=""
  }: ButtonPrimaryInterface
) {
  return (
    <>
    <button 
    className={`${css} group bg-gradient-to-br from-blue-700 to-blue-950 hover:drop-shadow cursor-pointer flex items-center justify-center gap-1 rounded-full`}>
        <span 
        className='group-hover:-translate-x-1 translate-x-2 ease-in-out duration-400 transition-all'>
          {title}
        </span>
        <FaArrowRight 
        className={`${iconCss} group-hover:translate-x-1 text-transparent group-hover:text-white ease-in-out duration-300 transition-all`} />
    </button>
    </>
  )
}