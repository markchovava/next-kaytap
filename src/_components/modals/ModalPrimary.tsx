"use client"

import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { AnimatePresence, motion, Variants } from 'framer-motion';


const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
        transition: {
            type: 'spring', // The type must be a specific literal
            duration: 1,
        }},
}


interface ModalPrimaryInterface{
    isModal: boolean,
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}



export default function ModalPrimary({
    isModal, 
    setIsModal
    }: ModalPrimaryInterface
) {
   

    
  return (
    <>
    <AnimatePresence>
        {isModal &&
        <motion.section
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='w-[100vw] h-[100vh] fixed top-0 left-0 z-[200] overflow-y-auto' >
            <div className='absolute z-0 top-0 left-0 w-[100%] h-[100%] bg-black opacity-40'></div>
            <div className='w-[100%] h-[100%] absolute z-10 overflow-auto scroll__width py-[6rem]'>
            <section className='mx-auto lg:w-[50%] w-[90%] bg-white text-black p-6 rounded-2xl'>
                <div className='flex items-center justify-end'>
                    <button onClick={() => setIsModal(false)} className='hover:text-red-600 transition-all ease-in-out duration-200'>
                        <IoClose className='text-2xl' />
                    </button>
                </div>

                <form action="#" >
                   <h2 className='text-[2.5rem] font-light mb-6 text-center border-b border-gray-300'>
                        Add Brand
                    </h2> 
                </form>

            </section>
            </div>
        </motion.section>
        }
    </AnimatePresence>
    </>
  )
}
