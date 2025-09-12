import React from 'react'
import Logo from '../Logo'
import HeaderSearch from './HeaderSearch'
import HeaderTopRight from './HeaderTopRight';
import Link from 'next/link';


export default function HeaderTopArea() {
  return (
    <>
    <section className='w-full bg-blue-950 text-gray-200'>
        <div className="mx-auto w-[92%] flex items-center justify-between gap-6 pt-4 pb-6">
            <div className='w-[90px] bg-white p-2 rounded-xl'>
             
                <Logo />
            </div>
            <div className="w-[60%]">
               <HeaderSearch />
            </div>
            <div className='w-[20%]'>
                <HeaderTopRight />
            </div>
        </div>
    </section>
    </>
  )
}
