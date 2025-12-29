"use client"

import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Heading2 from '@/_components/headings/Heading2';
import SpacerQuaternary from '@/_components/spacers/SpacerQuaternary';
import TextInput from '@/_components/forms/TextInput';
import { ButtonSubmit } from '@/_components/buttons/ButtonSubmit';
import TextAreaInput from '@/_components/forms/TextAreaInput';
import SelectPrimary from '@/_components/forms/SelectPrimary';
import ImageInput from '@/_components/forms/ImageInput';
import { ProjectEntity } from '@/_data/entity/ProjectEntity';
import { ProjectInterface } from '@/_data/interface/ProjectInterface';
import { ProjectCategoryData, ProjectStatusData } from '@/_data/sample/ProjectsData';
import { _projectStoreAction } from '@/_api/actions/ProjectActions';
import { useProjectImageStore } from '@/_store/useProjectImageStore';
import { useProjectStore } from '@/_store/useProjectStore';
import ButtonClose from '@/_components/buttons/ButtonClose';
import { ProjectImageAdd } from './ProjectImageAdd';


const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
        transition: {
            type: 'spring', // The type must be a specific literal
            duration: 1,
        }},
}

interface ProjectAddModalInterface{
    isModal: boolean,
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ProjectAddModal() {
    const { 
            data, 
            isSubmitting, 
            toggleModal,
            setInputValue,
            setData,
            validateForm,
            setIsSubmitting,
            setToggleModal,
            clearErrors,
            getDataList,
            resetData,
        } = useProjectStore()
    
        const { 
            imagesList, 
            initializeImages,
            resetImages, 
        } = useProjectImageStore();
        

    
        // Initialize images array when modal opens
        useEffect(() => {
            if (toggleModal && imagesList.length === 0) {
                initializeImages();
            }
        }, [toggleModal, imagesList.length, initializeImages]);
    
        const handleToggleModal = () => {
            setToggleModal(!toggleModal)
        }
    
        async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault();
            setIsSubmitting(true);
            clearErrors();
            
            // Validate form using store
            const validation = validateForm();
            if (!validation.isValid) {
                // Show the first error as toast
                const firstError = validation.errors.name || 
                    validation.errors.status || 
                    validation.errors.address ||
                    validation.errors.projectCategoryId;
                toast.warn(firstError);
                setIsSubmitting(false);
                return;
            }
            
            try {
                // Prepare form data with images
                const formData = new FormData();
                
                // Append product data
                formData.append('name', data.name);
                formData.append('desc', data.desc);
                formData.append('sku', data.status);
                formData.append('price', data.address);
                formData.append('quantity', data.projectCategoryId.toString());
                formData.append('status', data.status);
                
                // Append images with proper indexing
                let imageIndex = 0;
                imagesList.forEach((img) => {
                    if (img.imgFile) {
                        formData.append(`images[${imageIndex}]`, img.imgFile);
                        formData.append(`priorities[${imageIndex}]`, img.priority.toString());
                        imageIndex++;
                    }
                });
                
                
                /*  console.log('Form data prepared');
                console.log("DETAIL LIST:", detailList);
                console.log('Images to upload:', imagesList.filter(img => img.imgFile)); */
                
                // Debug: Log FormData contents
                for (let pair of formData.entries()) {
                    console.log(pair[0], pair[1]);
                }
                
                // API call
                const res = await _projectStoreAction(formData);
                console.log("RES:", res);
                
                const { status, message } = res;
                
                switch(status) {
                    case 1:
                        toast.success(message);
                        await getDataList();
                        clearErrors();
                        resetData();
                        resetImages();
                        setIsSubmitting(false);
                        setToggleModal(false);
                        break;
                    default:
                        toast.error(message || 'Something went wrong, please try again.');
                        setIsSubmitting(false);
                        break;
                } 
            } catch (error) {
                toast.error('Failed to save data. Please try again.');
                console.error('Form submission error:', error);
                setIsSubmitting(false);
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

                    <form onSubmit={handleSubmit} >
                        <Heading2 title="Add Project" css='text-center' />
                        <SpacerQuaternary />
                        <hr className="w-[100%] border-b border-gray-100" />
                        <SpacerQuaternary />
                        
                        <ProjectImageAdd />

                        <SpacerQuaternary />
                        <TextInput
                            label='Name:' 
                            name='name' 
                            type="text"
                            value={data.name} 
                            placeholder='Enter project name...'
                            onChange={setInputValue} 
                        />
                        <SpacerQuaternary />
                        <TextInput
                            label='Location:' 
                            name='address' 
                            type="text"
                            value={data.address} 
                            placeholder='Enter Project address...'
                            onChange={setInputValue} 
                        />
                        <SpacerQuaternary />
                        <SelectPrimary
                            label="Status" 
                            onChange={setInputValue} 
                            name="status" 
                            dbData={ProjectStatusData}
                        />
                        <SpacerQuaternary />
                        <SelectPrimary
                            label="Category" 
                            onChange={setInputValue} 
                            name="category" 
                            dbData={ProjectCategoryData}
                        />
                        <SpacerQuaternary />
                        <TextAreaInput
                            label='Description:' 
                            name='desc' 
                            value={data.desc} 
                            placeholder='Enter project Description...'
                            onChange={setInputValue} 
                        />
                        <SpacerQuaternary />
                        <div className='flex items-center justify-center'>
                            <ButtonSubmit 
                                title='Add Project' 
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