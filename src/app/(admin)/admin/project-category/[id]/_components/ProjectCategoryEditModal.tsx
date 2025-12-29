"use client"
import React from 'react'
import { toast } from 'react-toastify';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Heading2 from '@/_components/headings/Heading2';
import SpacerQuaternary from '@/_components/spacers/SpacerQuaternary';
import TextInput from '@/_components/forms/TextInput';
import { ButtonSubmit } from '@/_components/buttons/ButtonSubmit';
import ImageInput from '@/_components/forms/ImageInput';
import { useCategoryStore } from '@/_store/useCategoryStore';
import SelectSecondary from '@/_components/forms/SelectSecondary';
import { listNumbers } from '@/_utils/formatNumber';
import TextAreaInput from '@/_components/forms/TextAreaInput';
import { baseURL } from '@/_api/baseURL';
import ButtonClose from '@/_components/buttons/ButtonClose';
import { _projectCategoryUpdateAction } from '@/_api/actions/ProjectCategoryActions';
import { useProjectCategoryStore } from '@/_store/useProjectCategoryStore';



const title = "Edit Project Category"


const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
        transition: {
            type: 'spring', // The type must be a specific literal
            duration: 1,
        }},
}


export default function ProjectCategoryEditModal({id}: {id: string | number}) {
    const { 
        toggleModal, 
        data, 
        errors,
        isSubmitting,
        clearErrors, 
        setIsSubmitting, 
        setInputValue, 
        setToggleModal,
        getData,
        validateForm,
    } = useProjectCategoryStore()

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

        const formData = {
            name: data.name,
            priority: data.priority,
            desc: data.desc,
        }

        try {
            const res = await _projectCategoryUpdateAction(id, formData);
            const {status, message} = res;
            switch(status){
                case 1:
                    toast.success(message);
                    await getData(id);
                    clearErrors();
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
                            data={listNumbers(7)}
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
