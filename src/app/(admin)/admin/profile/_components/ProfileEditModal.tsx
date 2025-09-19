"use client"

import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Heading2 from '@/_components/headings/Heading2';
import SpacerQuaternary from '@/_components/spacers/SpacerQuaternary';
import TextInput from '@/_components/forms/TextInput';
import { ButtonPrimary } from '@/_components/buttons/ButtonPrimary';
import { ButtonSubmit } from '@/_components/buttons/ButtonSubmit';


const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
        transition: {
            type: 'spring', // The type must be a specific literal
            duration: 1,
        }},
}

interface ProfileEditModalInterface{
    isModal: boolean,
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}


interface InputInterface{
    name: string,
    email: string,
    address: string,
    phone: string,
    password?: string,
}

const InputData = {
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
}

export default function ProfileEditModal({
        isModal, 
        setIsModal
    }: ProfileEditModalInterface
) {
    const [data, setData] = useState<InputInterface>(InputData)
    const [isSubmit, setIsSubmit] = useState<boolean>(false)

    const handleInput = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault();
            setIsSubmit(true)
            
            try {
                // Add your form submission logic here
                console.log('Form data:', data);
                
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                toast.success('Profile updated successfully!');
                setIsModal(false);
            } catch (error) {
                toast.error('Failed to update profile. Please try again.');
                console.error('Form submission error:', error);
            } finally {
                setIsSubmit(false);
            }
    }
    
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
                            <IoClose className='text-3xl' />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} >
                        <Heading2 title="Edit Profile" css='text-center' />
                        <SpacerQuaternary />
                        <hr className="w-[100%] border-b border-gray-100" />
                        <SpacerQuaternary />
                        <TextInput
                            label='Name:' 
                            name='name' 
                            type="text"
                            value={data.name} 
                            placeholder='Enter your Name...'
                            onChange={handleInput} 
                        />
                        <SpacerQuaternary />
                        <TextInput
                            label='Email:' 
                            name='email' 
                            type="email"
                            value={data.email} 
                            placeholder='Enter your Email...'
                            onChange={handleInput} 
                        />
                        <SpacerQuaternary />
                        <TextInput
                            label='Phone Number:' 
                            name='phone' 
                            type="text"
                            value={data.phone} 
                            placeholder='Enter your Phone Number...'
                            onChange={handleInput} 
                        />
                        <SpacerQuaternary />
                        <TextInput
                            label='Address:' 
                            name='address' 
                            type="text"
                            value={data.address} 
                            placeholder='Enter your Address...'
                            onChange={handleInput} 
                        />
                        <SpacerQuaternary />
                        <div className='flex items-center justify-center'>
                            <ButtonSubmit 
                                title='Submit' 
                                css='px-12 text-white py-4' 
                                isSubmit={isSubmit} 
                            />
                        </div>
                        <SpacerQuaternary />
                    </form>

                </section>
                </div>
            </motion.section>
            }
        </AnimatePresence>
        </>
    )

}
