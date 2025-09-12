"use client"

import { BsCart } from "react-icons/bs"
import { FaRegUserCircle } from "react-icons/fa"

export default function HeaderTopRight() {
  return (
    <>
    <ul className='w-full flex items-center justify-end gap-3'>
        <li className='relative'>
            <button className='cursor-pointer  rounded-xl p-2 flex items-center justify-center gap-2'>
                <span className=''>
                    <FaRegUserCircle className='text-3xl' /></span>
                <span className='font-medium text-sm'>Sign In</span>
            </button>
        </li>
            <li className='relative'>
            <button className='cursor-pointer rounded-xl p-2 flex items-center justify-center gap-2'>
                <div className='flex items-start justify-center relative'>
                    <BsCart className='text-3xl ' />
                    <span className='-ml-[10px] -mt-[5px] bg-red-600 flex items-center justify-center px-1 pt-0.5 pb-1 text-xs w-[15px] h-[15px] rounded-full z-20'>
                        0
                    </span>
                </div>
                <span className='font-medium text-sm'>Cart</span>
            </button>
        </li>
    </ul>
    </>
  )
}
