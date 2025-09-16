"use client"
import React from 'react'
import AppInfoData from "../../_data/sample/AppInfoData.json"
import ItemSecondary from '../items/ItemSecondary'
import ItemTertiary from '../items/ItemTertiary'
import Link from 'next/link'
import Logo from '../Logo'
import { NavLinksData } from '@/_data/sample/NavLinksData'
import { useNavigationStore } from '@/_store/useNavigationStore'
import { FaAngleDown } from 'react-icons/fa6'
import { FaRegUserCircle } from 'react-icons/fa'
import { BsCart } from 'react-icons/bs'
import { IoIosSearch } from 'react-icons/io'



export default function HeaderPrimary() {
  const { navLinks, setCurrentNavLink, currentNavLink } = useNavigationStore()


  return (
    <>
    <section className='bg-blue-950 text-gray-200'>
        <div className='w-[92%] mx-auto flex lg:flex-row flex-col items-center justify-between gap-4'>
            <ul className='flex lg:flex-row flex-col items-center justify-start lg:gap-4 gap-2 py-2'>
              <ItemSecondary css='text-gray-800' iconType='phone' details={AppInfoData.phone.details} />
              <ItemSecondary css='text-gray-800' iconType='email' details={AppInfoData.email.details} />
              <ItemSecondary css='text-gray-800' iconType='address' details={AppInfoData.address.details} />
            </ul>
            <div className='flex items-center justify-end gap-3'>
              <Link href="#">
                <ItemTertiary 
                  iconType="facebook" 
                  css="text-lg text-gray-200 hover:scale-110 ease-initial duration-200 transition-all" />
              </Link>
              <Link href="#">
                <ItemTertiary 
                  iconType="whatsapp" 
                  css="text-lg text-gray-200 hover:scale-110 ease-initial duration-200 transition-all" />
              </Link>
              <Link href="#">
                <ItemTertiary 
                  iconType="instagram" 
                  css="text-lg text-gray-200 hover:scale-110 ease-initial duration-200 transition-all" />
              </Link>
            </div>
        </div>
    </section>

    <section className='bg-white drop-shadow relative z-40'>
      <div className="mx-auto w-[92%] flex items-center justify-between py-2 gap-4">
        <div className='w-[140px] bg-white p-2 rounded-xl'>
          <Logo />
        </div>
        
        <ul className='w-[60%] flex items-center justify-start gap-5 font-semibold'>
          { navLinks.map((i, key) => (
            i.withDropdown ? 
            <li key={key} className="relative"  onClick={() => setCurrentNavLink(i.id)} >
              <button 
                className={`${currentNavLink?.id === i.id ? 'text-blue-800' : ''} py-2.5 px-3 cursor-pointer hover:text-blue-800 flex items-center gap-1 transition-all duration-200`}>
                {i.title}
                <FaAngleDown className={`transition-transform duration-300 ${i.isOpen ? 'rotate-180' : 'rotate-0'}`} />
              </button>
              
              {/* Dropdown with smooth transitions */}
              <div className={`absolute top-full left-0 z-10 transition-all duration-300 ease-in-out transform ${
                i.isOpen 
                  ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto border-t border-gray-200' 
                  : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
              }`}>
                <ul className="rounded-b-xl overflow-hidden bg-white text-gray-800 shadow-lg w-48">
                  {i.items.map((item, ikey) => (
                    <Link key={ikey} href={item.href}>
                      <li 
                        className={`px-2 hover:text-blue-800 py-2 cursor-pointer duration-200 transform transition-all`} >
                        {item.title}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </li>
            :
            <Link key={key} href={i.href}>
              <li 
                onClick={() => setCurrentNavLink(i.id)} 
                className={`${currentNavLink?.id === i.id ? 'text-blue-800' : ''} py-2.5 px-3 cursor-pointer hover:text-blue-800 flex items-center gap-1 transition-all duration-200`}>
                {i.title}
              </li>
            </Link>
          ))}
        </ul>


        <ul className='flex items-center justify-end gap-3'>
          <li className='relative'>
            <button className='cursor-pointer  rounded-xl p-2 flex items-center justify-center gap-2'>
              <span className=''>
                <IoIosSearch className='text-3xl text-gray-700' />
              </span>
            </button>
          </li>
          <li className='relative'>
              <button className='cursor-pointer  rounded-xl p-2 flex items-center justify-center gap-2'>
                  <span className=''>
                      <FaRegUserCircle className='text-3xl text-gray-700' /></span>
                  <span className='font-medium text-sm'>Sign In</span>
              </button>
          </li>
          <li className='relative'>
              <button className='cursor-pointer rounded-xl p-2 flex items-center justify-center gap-2'>
                  <div className='flex items-start justify-center relative'>
                      <BsCart className='text-3xl text-gray-700' />
                      <span className='-ml-[10px] -mt-[5px] text-white bg-red-600 flex items-center justify-center px-1 pt-0.5 pb-1 text-xs w-[15px] h-[15px] rounded-full z-20'>
                          0
                      </span>
                  </div>
                  <span className='font-medium text-sm'>Cart</span>
              </button>
          </li>
        </ul>
        

      </div>
    </section>


    </>
  )
}
