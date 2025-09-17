"use client"
import React from 'react'
import ImagePrimary from '../images/ImagePrimary'


interface CardPrimaryInterface{
    title: string,
    img?: string,
}

export default function CardPrimary({dbData= {title: "", img: ""}}: {dbData:CardPrimaryInterface}) {
  const {img, title} = dbData
  return (
    <>
    <section className='cursor-pointer ease-initial transition-all duration-200 pb-5 border-b-[5px] border-b-transparent hover:border-b-[5px] hover:border-gray-400'>
        <div className='group rounded-full overflow-hidden relative bg-gray-400 overflow-hidden w-full aspect-square mb-1'>
            {img &&
            <ImagePrimary img={img} alt={title} />
            }
        </div>
        <p className='text-center font-medium'>{title}</p>
    </section>
    </>
  )
}
