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
    <section
        style={{backgroundImage: `url(${img})`}}
        className='w-full bg-center bg-fixed bg-cover h-[20rem] relative bg-blue-950 text-gray-100'>
        <div className='w-full h-full absolute z-10 top-0 left-0 bg-gradient-to-br from-black to-transparent opacity-70'></div>
        <div className="absolute z-20 top-0 left-0 w-full h-full">
            <div className='w-[92%%] h-[100%] gap-3 flex flex-col items-center justify-center text-center'> 
                <Heading6 title={subtitle} css='text-gray-200 uppercase' />
                <Heading1 title={title} css='uppercase' />
            </div>

        </div>
    </section>
    </>
  )
}
