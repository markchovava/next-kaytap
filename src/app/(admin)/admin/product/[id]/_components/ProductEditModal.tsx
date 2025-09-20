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
import { ProductInterface } from '@/_data/interface/ProductInterface';
import { ProductEntity, ProductStockEntity } from '@/_data/entity/ProductEntity';
import TextAreaInput from '@/_components/forms/TextAreaInput';
import SelectPrimary from '@/_components/forms/SelectPrimary';
import ImageInput from '@/_components/forms/ImageInput';


const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
        transition: {
            type: 'spring', // The type must be a specific literal
            duration: 1,
        }},
}

interface ProductEditModalInterface{
    isModal: boolean,
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}



export default function ProductEditModal({
        isModal, 
        setIsModal
    }: ProductEditModalInterface
) {
    const [data, setData] = useState<ProductInterface>(ProductEntity)
    const [isSubmit, setIsSubmit] = useState<boolean>(false)

    const handleInput = (
        e: React.ChangeEvent<HTMLInputElement> 
        | React.ChangeEvent<HTMLTextAreaElement>
        | React.ChangeEvent<HTMLSelectElement> ) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleImageChange = (file: File | null): void => {
        setData({...data, img: file});
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
                        <Heading2 title="Edit Product" css='text-center' />
                        <SpacerQuaternary />
                        <hr className="w-[100%] border-b border-gray-100" />
                        <SpacerQuaternary />
                        <ImageInput
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
                        <div className='grid grid-cols-2 gap-3'>
                            <TextInput
                                label='Price:' 
                                name='price' 
                                type="number"
                                value={data.price} 
                                placeholder='Enter your Email...'
                                onChange={handleInput} 
                            />
                            <TextInput
                                label='Quantity:' 
                                name='quantity' 
                                type="number"
                                value={data.quantity} 
                                placeholder='Enter your Phone Number...'
                                onChange={handleInput} 
                            />

                        </div>
                        <SpacerQuaternary />
                        <SelectPrimary
                            label="Status" 
                            onChange={handleInput} 
                            name="status" 
                            dbData={ProductStockEntity}
                        />
                        <SpacerQuaternary />
                        <TextInput
                            label='SKU:' 
                            name='sku' 
                            type="text"
                            value={data.sku} 
                            placeholder='Enter SKU here...'
                            onChange={handleInput} 
                        />
                        <SpacerQuaternary />
                        <TextAreaInput
                            label='Description:' 
                            name='description' 
                            value={data.description} 
                            placeholder='Enter your Description...'
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
