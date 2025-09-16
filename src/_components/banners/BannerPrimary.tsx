import React from 'react'
import Heading1 from '../headings/Heading1'
import Image from 'next/image'
import Heading6 from '../headings/Heading6'


interface BannerPrimaryInterface{
    title?: string,
    subtitle?: string,
    img?: string,
}

export default function BannerPrimary({title, subtitle, img=""}: BannerPrimaryInterface) {
  
    return (
    <>
    <section className='w-full h-[20rem] bg-blue-950 text-gray-100'>
        <div className='w-[92%%] h-[100%] gap-3 flex flex-col items-center justify-center text-center'> 
            <Heading6 title={subtitle} css='text-gray-200 uppercase' />
            <Heading1 title={title} css='uppercase' />
        </div>
    </section>
    </>
  )
}
