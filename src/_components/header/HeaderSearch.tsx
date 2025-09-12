"use client"
import { IoIosSearch } from "react-icons/io";


export default function HeaderSearch() {
  return (
    <>
    <div className='w-full flex items-center justify-start border border-gray-300 rounded-full overflow-hidden'>
        <input 
            type="text" 
            placeholder="Search..." 
            className='w-full px-5 py-3 outline-none border-r border-gray-300' />
        <button type='submit' className='group px-5 cursor-pointer py-2 rounded-full'>
            <IoIosSearch className="text-xl group-hover:scale-105 transition-all duration-200" title="Search Button" />
        </button>
    </div>
    </>
  )
}
