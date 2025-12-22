"use client"

import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Heading2 from '@/_components/headings/Heading2';
import SpacerQuaternary from '@/_components/spacers/SpacerQuaternary';
import TextInput from '@/_components/forms/TextInput';
import { ButtonSubmit } from '@/_components/buttons/ButtonSubmit';
import TextAreaInput from '@/_components/forms/TextAreaInput';
import { useAppInfoStore } from '@/_store/useAppInfoStore';
import ButtonClose from '@/_components/buttons/ButtonClose';
import { _appInfoStoreAction } from '@/_api/actions/AppInfoActions';


const title = "Edit App Information"


const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1,
        }
    },
}


export default function AppInfoEditModal() {
    const { 
        data, 
        errors,
        toggleModal,
        isSubmitting,
        setData, 
        getData,
        setInputValue, 
        setToggleModal, 
        setError, 
        clearErrors,
        setIsSubmitting,
        validateForm,
    } = useAppInfoStore()

    const handleToggleModal = () => {
        setToggleModal(!toggleModal)
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        clearErrors();
        e.preventDefault();
        // Validate form using store
        const validation = validateForm();
        if (!validation.isValid) {
            // Show the first error as toast
            const firstError =  validation.errors.name || 
                validation.errors.phone || 
                validation.errors.email ||
                validation.errors.website ||
                validation.errors.address;
            toast.warn(firstError);
            return;
        }
        setIsSubmitting(true);
        const formData = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            website: data.website,
            address: data.address,
            desc: data.desc,
            whatsapp: data.whatsapp,
            facebook: data.facebook,
            instagram: data.instagram,
            tiktok: data.tiktok,
            linkedIn: data.linkedIn,
            twitter: data.twitter,
        }
        
        try {
            const res = await _appInfoStoreAction(formData);
            // console.log('res:::', res)
            const {status, message} = res
            if(status === 1) {
                toast.success(message);
                clearErrors();
                setIsSubmitting(false);
                await getData();
                setToggleModal(false)
                return
            }
            toast.warn('Something went wrong, please try again.')
            setIsSubmitting(false);
            return;
        } catch (error) {
            toast.error('Failed to save data. Please try again.');
            console.error('Form submission error:', error);
        }
    }
   
    return (
        <AnimatePresence>
            {toggleModal && (
                <motion.section
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    className='w-[100vw] h-[100vh] fixed top-0 left-0 z-[200] overflow-y-auto'
                >
                    <div className='absolute z-0 top-0 left-0 w-[100%] h-[100%] bg-black opacity-40'></div>
                    <div className='w-[100%] h-[100%] absolute z-10 overflow-auto scroll__width py-[6rem]'>
                        <section className='mx-auto lg:w-[60%] w-[90%] bg-white text-black p-6 rounded-2xl'>
                            <div className='flex items-center justify-end'>
                                <ButtonClose onClick={handleToggleModal} />
                            </div>

                            <form onSubmit={handleSubmit}>
                                <Heading2 title={title} css='text-center' />
                                <SpacerQuaternary />
                                <hr className="w-[100%] border-b border-gray-100" />
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
                                
                                <TextInput
                                    label='Email:' 
                                    name='email' 
                                    type="email"
                                    value={data.email} 
                                    placeholder='Enter your Email...'
                                    onChange={setInputValue} 
                                    error={errors.email}
                                />
                                <SpacerQuaternary />
                                
                                <TextInput
                                    label='Phone Number:' 
                                    name='phone' 
                                    type="text"
                                    value={data.phone} 
                                    placeholder='Enter your Phone Number...'
                                    onChange={setInputValue} 
                                    error={errors.phone}
                                />
                                <SpacerQuaternary />

                                <TextInput
                                    type="text"
                                    label='Website:' 
                                    name='website' 
                                    value={data.website} 
                                    placeholder='Enter your Website...'
                                    onChange={setInputValue} 
                                    error={errors.website}
                                />
                                <SpacerQuaternary />
                                
                                <TextAreaInput
                                    label='Address:' 
                                    name='address' 
                                    value={data.address} 
                                    placeholder='Enter your Address...'
                                    onChange={setInputValue} 
                                    error={errors.address}
                                />
                                <SpacerQuaternary />
                                
                                <TextInput
                                    label='Facebook:' 
                                    name='facebook' 
                                    type="text"
                                    value={data.facebook} 
                                    placeholder='Enter Facebook Link...'
                                    onChange={setInputValue} 
                                />
                                <SpacerQuaternary />
                                
                                {/* Add other social media inputs */}
                                <TextInput
                                    label='Instagram:' 
                                    name='instagram' 
                                    type="text"
                                    value={data.instagram} 
                                    placeholder='Enter Instagram Link...'
                                    onChange={setInputValue} 
                                />
                                <SpacerQuaternary />
                                
                                <TextInput
                                    label='WhatsApp:' 
                                    name='whatsapp' 
                                    type="text"
                                    value={data.whatsapp} 
                                    placeholder='Enter WhatsApp Number...'
                                    onChange={setInputValue} 
                                />
                                <SpacerQuaternary />
                                
                                <TextInput
                                    label='TikTok:' 
                                    name='tiktok' 
                                    type="text"
                                    value={data.tiktok} 
                                    placeholder='Enter TikTok Link...'
                                    onChange={setInputValue}
                                    
                                />
                                <SpacerQuaternary />
                                
                                <TextInput
                                    label='LinkedIn:' 
                                    name='linkedIn' 
                                    type="text"
                                    value={data.linkedIn} 
                                    placeholder='Enter LinkedIn Link...'
                                    onChange={setInputValue} 
                                />
                                <SpacerQuaternary />
                                
                                <TextInput
                                    label='Twitter:' 
                                    name='twitter' 
                                    type="text"
                                    value={data.twitter} 
                                    placeholder='Enter Twitter Link...'
                                    onChange={setInputValue} 
                                />
                                <SpacerQuaternary />
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
            )}
        </AnimatePresence>
    )
}