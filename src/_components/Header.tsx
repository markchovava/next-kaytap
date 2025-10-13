"use client"
import { useState } from 'react'
import HeaderPrimary from './header/HeaderPrimary'
import HeaderTopArea from './header/HeaderTopArea'
import Logo from './Logo'
import { NavLinksData } from '@/_data/sample/NavLinksData'
import NavListPrimary from './navs/NavListPrimary'




export default function Header() {
  


  return (
    <>
    <HeaderPrimary />
    {/* <HeaderTopArea /> */}

   {/*  <section className='bg-white py-4'> 
     
      <div className="mx-auto w-[92%] flex items-center justify-between py-2 gap-4">
        <div className='w-[140px] bg-white p-2 rounded-xl'>
          <Logo />
        </div>

        <NavListPrimary />
        

      </div>

    </section> */}
    </>
  )
}
