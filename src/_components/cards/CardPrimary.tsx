"use client"
import Image from 'next/image'
import React from 'react'


interface CardPrimaryInterface{
    title?: string,
    img?: string,
}

export default function CardPrimary({title="", img}: CardPrimaryInterface) {
  return (
    <>
    <section className='cursor-pointer ease-initial transition-all duration-200 pb-5 border-b-[5px] border-b-transparent hover:border-b-[5px] hover:border-gray-400'>
        <div className='rounded-full relative bg-gray-400 overflow-hidden w-full aspect-square mb-1'>
            {img &&
            <Image 
                alt={title} 
                src={img} 
                width={200}
                height={200} 
                className='w-full h-full object-fit' />
            }
        </div>
        <p className='text-center font-medium'>{title}</p>
    </section>
    </>
  )
}
