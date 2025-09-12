import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import Logo from './Logo'
import AppInfoData from "../_data/sample/AppInfoData.json"
import { AboutNavData, FooterLinksData, FooterNavData, SocialLinksData } from '@/_data/sample/NavLinksData'
import Heading5 from './headings/Heading5'


export default function Footer() {
  return (
    <>
    <section className='w-[100%] bg-gradient-to-br from-blue-900 to-slate-950 text-gray-200 font-light pt-[5rem] '>
        <div className='pb-[2rem] lg:w-[94%] w-[90%] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg;gap-6 gap-8 '>
            <section className='w-[100%]'>
                <Link href='/'>
                    <div className='bg-white rounded-xl p-3 lg:mx-0 mx-auto lg:w-[70%] w-[40%] overflow-hidden'>
                       <Logo />
                    </div>
                </Link>
            </section>
            <section className='w-[100%]'>
              <ul>
                <li className='mb-3'>
                  <Heading5 title="Important Links" css='' />
                </li>
                {FooterNavData.map((i, key) => (
                    <Link key={key} href={i.href}>
                    <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                    {i.title}
                    </li>
                </Link>
                ))}
              </ul>
            </section>
            <section className='w-[100%]'>
              <ul>
                <li className='mb-3'>
                  <Heading5 title="About Us" css='' />
                </li>
                {AboutNavData.map((i, key) => (
                    <Link key={key} href={i.href}>
                    <li className='hover:underline mb-2 ease-linear transition-all duration-200'>
                    {i.title}
                    </li>
                </Link>
                ))}
              </ul>
            </section>
            <section className=''>
                <div className='uppercase font-semibold mb-3'>
                    Social Media Links
                </div>
                <div className='w-[100%] flex items-center justify-start gap-3 text-gray-200'>
                  {SocialLinksData.map((i, key) => (
                    <a 
                        key={key} 
                        href={i.href} 
                        target="_blank" 
                        className="hover:scale-110 transition-all ease-linear">
                          {i.icon}
                    </a>
                  ))}     
                </div>
            </section>
        </div>

        <div className='lg:w-[94%] w-[90%] mx-auto pb-[3rem] text-gray-300 flex lg:flex-row flex-col lg:items-center items-start lg:justify-between justify-start gap-6 font-light text-sm'>
            <ul className='flex lg:flex-row flex-col lg:items-center justify-start gap-3'>
                {FooterLinksData.map((i, key) => (
                  key < FooterLinksData.length-1 ?
                  <Link 
                    key={key}
                    href={i.href} >
                    <li className='hover:underline ease-linear transition-all duration-150'>
                      {i.title}
                      <span className='ml-3'>|</span>
                    </li>
                  </Link>
                  :
                  <Link 
                    key={key} 
                    href={i.href} 
                    className='hover:underline ease-linear transition-all duration-150'>
                    <li>{i.title}</li>
                  </Link>
                ))}
                
            </ul>
            <p className='leading-tight'>
                &copy; {new Date().getFullYear()} Developed and Maintained by {AppInfoData.developer}
            </p>
        </div>

    </section>
    </>
  )
}





