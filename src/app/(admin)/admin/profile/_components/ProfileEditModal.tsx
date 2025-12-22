"use client"
import React from 'react'
import { toast } from 'react-toastify';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Heading2 from '@/_components/headings/Heading2';
import SpacerQuaternary from '@/_components/spacers/SpacerQuaternary';
import TextInput from '@/_components/forms/TextInput';
import { ButtonSubmit } from '@/_components/buttons/ButtonSubmit';
import { useProfileStore } from '@/_store/useProfileStore';
import ButtonClose from '@/_components/buttons/ButtonClose';
import { _profileStoreAction } from '@/_api/actions/AuthActions';


const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
        transition: {
            type: 'spring', // The type must be a specific literal
            duration: 1,
        }},
}



export default function ProfileEditModal() {
    const {
        data, 
        toggleModal, 
        errors,
        isSubmitting,
        setError,
        clearErrors,
        setIsSubmitting,
        setToggleModal, 
        setInputValue,
        validateForm,
        getData,
    } = useProfileStore()

    const handleToggleModal = () => {
        setToggleModal(false)
    }

    //console.log('data', data)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        clearErrors();
        e.preventDefault();
        // Validate form using store
        const validation = validateForm();
        if (!validation.isValid) {
            // Show the first error as toast
            const firstError =  validation.errors.name || 
                    validation.errors.phone || 
                    validation.errors.email
            toast.warn(firstError);
            return;
        }
        setIsSubmitting(true);
        const formData = {
            name: data.name,
            phone: data.phone,
            email: data.email,
        }

        try {
            const res = await _profileStoreAction(formData);
            //console.log('res', res)
            const {status, message, data} = res
            switch(status){
                case 2:
                    toast.warn(message);
                    setError('email', message)
                    setIsSubmitting(false);
                    return
                case 1:
                    toast.success(message);
                    clearErrors();
                    setIsSubmitting(false);
                    await getData();
                    setToggleModal(false)
                    return
                case 0:
                    toast.warn(message);
                    setIsSubmitting(false);
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
                       <ButtonClose onClick={handleToggleModal} />
                    </div>

                    <form className='w-full' onSubmit={handleSubmit} >
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
