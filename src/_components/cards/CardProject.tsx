import Image from 'next/image'
import React from 'react'
import Heading4 from '../headings/Heading4'


interface CardProjectInterface{
    dbData: {
        img?: string,
        id?: number,
        address?: string,
        contractor?: string,
        client?: string,
        name?: string,
    }
}


export default function CardProject(
    {dbData} : CardProjectInterface
) {
    const {img, name, id, address, contractor, client, } = dbData

    return (
        <div className="pb-[6rem]">
            <section className='relative h-[15rem] group text-white'>
                <div className='overflow-hidden rounded-lg bg-gray-400 z-10 w-[100%] h-[15rem] aspect-[5/4] absolute border-y-[8px] border-transparent group-hover:border-blue-900'>
                { img ?
                        <div className='relative w-full h-full'>
                            <Image 
                                alt='Image' 
                                src={img} 
                                height={500} 
                                width={400} 
                                className='w-full h-full object-cover' />
                        </div>
                    : "" } 
                </div>
                <div className={`overflow-hidden rounded-lg left-[10%] top-[70%] z-20 w-[80%] cursor-pointer bg-blue-800 group-hover:bg-blue-900 ease-initial duration-200 transition-all absolute h-[10rem]`}>
                    <div className='w-full h-full flex items-center justify-center text-center p-2'>
                        { name ? 
                            <Heading4 title={name} />
                        : "" }
                    </div>
                </div>
            </section>
        </div>
    )

}
