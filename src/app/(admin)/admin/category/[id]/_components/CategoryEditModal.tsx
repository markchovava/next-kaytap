"use client"

import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Heading2 from '@/_components/headings/Heading2';
import SpacerQuaternary from '@/_components/spacers/SpacerQuaternary';
import TextInput from '@/_components/forms/TextInput';
import { ButtonSubmit } from '@/_components/buttons/ButtonSubmit';
import { CategoryInterface } from '@/_data/interface/CategoryInterface';
import ImageInput from '@/_components/forms/ImageInput';
import { CategoryEntity } from '@/_data/entity/CategoryEntity';

const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
        transition: {
            type: 'spring', // The type must be a specific literal
            duration: 1,
        }},
}

interface CategoryEditModalInterface{
    isModal: boolean,
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}



export default function CategoryEditModal({
        isModal, 
        setIsModal
    }: CategoryEditModalInterface
) {
    const [data, setData] = useState<CategoryInterface>(CategoryEntity)
    const [isSubmit, setIsSubmit] = useState<boolean>(false)

    const handleInput = (
        e: React.ChangeEvent<HTMLInputElement> 
        | React.ChangeEvent<HTMLTextAreaElement>
        | React.ChangeEvent<HTMLSelectElement> ) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleImageChange = (file: File | null): void => {
        setData({...data, imgFile: file});
    };

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
                        <Heading2 title="Edit Category" css='text-center' />
                        <SpacerQuaternary />
                        <hr className="w-[100%] border-b border-gray-100" />
                        <SpacerQuaternary />
                        <ImageInput
                            label="Image:"
                            onImageChange={handleImageChange}
                            maxSize={5 * 1024 * 1024} // 5MB
                            acceptedFormats={['image/jpeg', 'image/jpg', 'image/png', 'image/gif']}
                        />
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
