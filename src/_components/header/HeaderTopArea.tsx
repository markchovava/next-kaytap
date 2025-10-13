"use client"
import React, { useState } from 'react'
import AppInfoData from "../../_data/sample/AppInfoData.json"
import ItemSecondary from '../items/ItemSecondary'
import ItemTertiary from '../items/ItemTertiary'
import Link from 'next/link'

export default function HeaderTopArea() {
  return (
    <>
    <section className='bg-blue-950 text-gray-200 md:py-2 py-4'>
        <div className='w-[92%] mx-auto flex lg:flex-row flex-col items-center justify-between gap-4 '>
           {/*  */} 
            <ul className='flex lg:flex-row flex-col items-center justify-start lg:gap-4 gap-2'>
                <ItemSecondary css='text-gray-200' iconType='phone' details={AppInfoData.phone.details} />
                <ItemSecondary css='text-gray-200' iconType='email' details={AppInfoData.email.details} />
                <ItemSecondary css='text-gray-200' iconType='address' details={AppInfoData.address.details} />
            </ul>
            {/*  */}
            <div className='flex items-center justify-end gap-3'>
                <Link href="#">
                <ItemTertiary 
                    iconType="facebook" 
                    css="text-lg text-gray-200 hover:text-white hover:scale-110 ease-initial duration-200 transition-all" />
                </Link>
                <Link href="#">
                <ItemTertiary 
                    iconType="whatsapp" 
                    css="text-lg text-gray-200 hover:text-white hover:scale-110 ease-initial duration-200 transition-all" />
                </Link>
                <Link href="#">
                <ItemTertiary 
                    iconType="instagram" 
                    css="text-lg text-gray-200 hover:text-white hover:scale-110 ease-initial duration-200 transition-all" />
                </Link>
            </div>
        </div>
    </section>
    </>
  )
}
