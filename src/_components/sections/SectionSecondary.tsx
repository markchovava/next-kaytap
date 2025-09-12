"use client"
import React from 'react'
import { ButtonPrimary } from '../buttons/ButtonPrimary'
import Heading2 from '../headings/Heading2'
import Link from 'next/link'


export default function SectionSecondary() {
  return (
    <>
    <section className='bg-slate-900 text-white'>
        <div className='h-[4rem]' />
        <div className='mx-auto w-[92%] flex items-center justify-between gap-5'>
            <div></div>
            <div className='flex flex-col justify-center lg:items-end'>
                <Heading2 title="Get help exactly when you need it" css="text-gray-200 mb-2" />
                <p className='font-light text-xl mb-4 lg:text-end'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, in.
                </p>
                <Link href="#">
                    <ButtonPrimary
                        title="Talk to us"
                        css="text-sm text-white px-8 py-3" 
                        iconCss='' 
                    />
                </Link>
            </div>
        </div>
        <div className='h-[4rem]' />
    </section>
    </>
  )
}
