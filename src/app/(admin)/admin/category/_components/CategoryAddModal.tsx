"use client"

import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Heading2 from '@/_components/headings/Heading2';
import SpacerQuaternary from '@/_components/spacers/SpacerQuaternary';
import TextInput from '@/_components/forms/TextInput';
import { ButtonSubmit } from '@/_components/buttons/ButtonSubmit';
import ImageInput from '@/_components/forms/ImageInput';
import { useCategoryStore } from '@/_store/useCategoryStore';
import { _categoryStoreAction } from '@/_api/actions/CategoryActions';
import TextAreaInput from '@/_components/forms/TextAreaInput';
import SelectSecondary from '@/_components/forms/SelectSecondary';
import { listNumbers } from '@/_utils/formatNumber';



const title = "Add Category"


const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
        transition: {
            type: 'spring', // The type must be a specific literal
            duration: 1,
        }},
}


export default function CategoryAddModal() {
    const {
        data, 
        toggleModal, 
        isSubmitting,
        errors,
        resetData,
        clearErrors,
        setInputValue, 
        setToggleModal, 
        setData,
        setIsSubmitting,
        setValue,
        validateForm,
        getDataList,
        setImg,
    } = useCategoryStore()

    useEffect(() => { 
        resetData() 
    }, [])

    const handleImageChange = (file: File | null): void => {
        setImg(file)
    };

    const handleToggleModal = () => {
        setToggleModal(!toggleModal)
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        clearErrors();
        e.preventDefault();
        setIsSubmitting(true);
        // Validate form using store
        const validation = validateForm();
        if (!validation.isValid) {
            // Show the first error as toast
            const firstError =  validation.errors.name
            toast.warn(firstError);
            return;
        }

        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('priority', String(data.priority))
        formData.append('desc', data.desc)
        if(data.imgFile) {
            formData.append('img', data.imgFile)
        }
        try {
            const res = await _categoryStoreAction(formData);
            const {status, message} = res;
            switch(status){
                case 1:
                    toast.success(message);
                    await getDataList();
                    clearErrors();
                    resetData();
                    setIsSubmitting(false);
                    setToggleModal(false)
                    return
                default:
                    toast.success('Something went wrong, please try again.');
                    setIsSubmitting(false);
                    return
            } 
        } catch (error) {
            toast.error('Failed to save data. Please try again.');
            console.error('Form submission error:', error);
        }
    }
    
    return (
        <>
        <AnimatePresence>
            {toggleModal &&
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
                        <button onClick={handleToggleModal} className='hover:text-red-600 transition-all ease-in-out duration-200'>
                            <IoClose className='text-3xl' />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <Heading2 title={title} css='text-center' />
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
                            onChange={setInputValue} 
                            error={errors.name}
                        />
                        <SpacerQuaternary />
                        <TextAreaInput
                            label='Description:' 
                            name='desc' 
                            value={data.desc} 
                            placeholder='Enter your Description...'
                            onChange={setInputValue} 
                        />
                        <SpacerQuaternary />
                        <SelectSecondary
                            label='Ppriority:' 
                            name='priority' 
                            data={listNumbers(12)}
                            value={data.priority} 
                            onChange={setInputValue} 
                        />
                        <SpacerQuaternary />
                        <div className='flex items-center justify-center'>
                            <ButtonSubmit 
                                title='Submit' 
                                css='px-12 text-white py-4' 
                                isSubmit={isSubmitting} 
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
