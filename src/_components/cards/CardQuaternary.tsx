"use client"
import React from 'react'
import Heading4 from '../headings/Heading4'
import Link from 'next/link'
import ImagePrimary from '../images/ImagePrimary'


interface CardQuaternaryInterface{
    name: string,
    position: string,
    links: any[],
    img: string,
}

export default function CardQuaternary({dbData}: {dbData: CardQuaternaryInterface}) {
    const {name, position, links, img} = dbData
  return (
    <>
    <section  className='overflow-hidden rounded-xl bg-white drop-shadow'>
        <div className='w-full relative aspect-[5/4] bg-gray-500 border-b border-gray-200'>
            <ImagePrimary 
                img={img} 
                alt={name} />
        </div>
        <div className='w-full p-4 flex flex-col justify-center items-center text-center'>
            <Heading4 title={name} css='mb-2  leading-tight' />
            <p className='mb-1 leading-tight'>{position}</p>
            <ul className='flex items-center justify-center gap-2'>
                {links.map((i, key) => (
                    <Link key={key} href={i.href}>
                    <li>{i.icon}</li>
                    </Link>
                ))}
            </ul>
        </div>
    </section>
    </>
  )
}
