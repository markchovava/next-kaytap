import { FaArrowRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";


interface ButtonPrimaryInterface{
    title?: string,
    iconCss?: string, 
    css?: string
    status?: boolean
    onClick?: () => void,
}

 
export function ButtonPrimary({
    title="Button", 
    css="text-white px-6 py-3", 
    iconCss="",
    status= false,
    onClick= () => {},
  }: ButtonPrimaryInterface
) {
  
  return (
    <>
    <button 
      onClick={onClick}
      type="submit"
      className={`${css} group bg-gradient-to-br from-blue-700 to-blue-950 hover:drop-shadow cursor-pointer 
      flex items-center justify-center gap-1 rounded-full`}>
      {status ?
      'Processing' :
      <>
        <span 
        className='group-hover:-translate-x-1 translate-x-2 ease-in-out duration-400 transition-all'>
          {title}
        </span>
        <FaAngleRight
        className={`${iconCss} group-hover:translate-x-1 text-transparent group-hover:text-white ease-in-out 
        duration-300 transition-all`} />
      </>
      }
    </button>
    </>
  )
}