"use client"
import React from 'react'
import Heading2 from '../headings/Heading2'
import SpacerSecondary from '../spacers/SpacerSecondary'
import { ButtonPrimary } from '../buttons/ButtonPrimary'
import { FaPlus } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import Heading6 from '../headings/Heading6'


const SectionData = {
    subtitle: "About Company",
    title: "Need a partner for your next construction project?",
    btnTitle: "Get In Touch",
    items: [
        {id: 1, icon: <MdOutlineCategory className='text-white text-[1.8rem]' />, quantity: 20, details: "Active Projects" },
        {id: 2, icon: <MdOutlineCategory className='text-white text-[1.8rem]' />, quantity: 100, details: "Completed Projects" },
        {id: 3, icon: <MdOutlineCategory className='text-white text-[1.8rem]' />, quantity: 13, details: "Years of Experience" },
    ]
}



export default function SectionPrimary() {
  return (
    <>
    <div className='relative lg:mb-[9rem] mb-[22rem]'>
        <section className='bg-slate-900 text-white relative lg:h-[15rem] h-[25rem]'>
            <SpacerSecondary />
            <div className='absolute left-[4%] w-[92%] flex lg:flex-row flex-col lg:items-center justify-between lg:gap-4 gap-6'>
                <div className='flex-1'>
                    <Heading6 title={SectionData.subtitle} css="mb-2 text-white" />
                    <Heading2 title={SectionData.title} />
                </div>
                <div className=''>
                    <ButtonPrimary title={SectionData.btnTitle} css="px-10 py-3.5 text-white" />
                </div>
            <div>

                </div>
            </div>
            <div className='absolute lg:h-[14rem] h-[30rem] left-[4%] top-[68%] bg-green-500 w-[92%] text-white p-4 flex lg:flex-row flex-col items-center justify-center lg:justify-around gap-6'>
                {SectionData.items.map((i, key) => (
                    <div key={key} className='flex flex-col justify-center items-start gap-2'>
                        {i.icon}
                        <div className='flex items-center leading-tight justify-center gap-1 text-[1.7rem] font-bold'>
                            {i.quantity} <FaPlus className='text-white text-[1.3rem]' />
                        </div>
                        <div className='font-bold text-[1rem]'>{i.details}</div>
                    </div>
                ))}

            </div>
            <SpacerSecondary />
        </section>
    </div>
    </>
  )
}
