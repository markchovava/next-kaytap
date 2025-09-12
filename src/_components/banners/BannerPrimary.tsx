import React from 'react'
import Heading1 from '../headings/Heading1'
import Image from 'next/image'


interface BannerPrimaryInterface{
    title?: string,
    subtitle?: string,
    img?: string,
}

export default function BannerPrimary({title, subtitle, img=""}: BannerPrimaryInterface) {
  
    return (
    <>
    <section className='w-full h-[20rem] flex items-center justify-start overflow-hidden'>
        <div className='w-[100%] h-[100%] pl-[6%]'>
            <section className='h-full w-full flex flex-col items-start justify-center'>
                <p className='tracking-wide uppercase text-xl text-blue-700'>
                {subtitle}
                </p>
                <Heading1 title={title} css='uppercase' />
            </section>
        </div>
        <div className='w-[100%] h-[100%] bg-gradient-to-br from-green-600 to-blue-900'>
            {img ? 
                <Image src={img} alt="" width={500} height={400} className='object-cover w-full h-full' />
            : ""}
        </div>
    </section>
    </>
  )
}
