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
import SelectPrimary from '@/_components/forms/SelectPrimary';
import ImageInput from '@/_components/forms/ImageInput';
import { ProjectEntity } from '@/_data/entity/ProjectEntity';
import { ProjectInterface } from '@/_data/interface/ProjectInterface';
import { ProjectCategoryData, ProjectStatusData } from '@/_data/sample/ProjectsData';


const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
        transition: {
            type: 'spring',
            duration: 1,
        }},
}

interface ProjectEditModalInterface{
    isModal: boolean,
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ProjectEditModal({
        isModal, 
        setIsModal
    }: ProjectEditModalInterface
) {
    const [data, setData] = useState<ProjectInterface>({
        ...ProjectEntity,
        images: [
            { id: 0, image: "", imageFile: null, projectId: 0 },
            { id: 1, image: "", imageFile: null, projectId: 0 },
            { id: 2, image: "", imageFile: null, projectId: 0 },
            { id: 3, image: "", imageFile: null, projectId: 0 }
        ]
    })
    const [isSubmit, setIsSubmit] = useState<boolean>(false)

    const handleInput = (
        e: React.ChangeEvent<HTMLInputElement> 
        | React.ChangeEvent<HTMLTextAreaElement>
        | React.ChangeEvent<HTMLSelectElement> ) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleImageChange = (file: File | null, index: number): void => {
        const updatedImages = [...(data.images || [])];
        updatedImages[index] = { 
            ...updatedImages[index], 
            imageFile: file 
        };
        setData({ ...data, images: updatedImages });
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault();
            setIsSubmit(true)
            
            try {
                // Add your form submission logic here
                console.log('Form data:', data);
                
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                toast.success('Project added successfully!');
                setIsModal(false);
            } catch (error) {
                toast.error('Failed to add project. Please try again.');
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
                        <Heading2 title="Add Project" css='text-center' />
                        <SpacerQuaternary />
                        <hr className="w-[100%] border-b border-gray-100" />
                        <SpacerQuaternary />
                        
                        {/* Image Upload Section */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-4">Project Images (Up to 4)</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {Array.from({ length: 4 }, (_, index) => (
                                    <div key={index} className="">
                                        <ImageInput
                                            onImageChange={(file) => handleImageChange(file, index)}
                                            maxSize={5 * 1024 * 1024} // 5MB
                                            acceptedFormats={['image/jpeg', 'image/jpg', 'image/png', 'image/gif']}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <SpacerQuaternary />
                        <TextInput
                            label='Name:' 
                            name='name' 
                            type="text"
                            value={data.name} 
                            placeholder='Enter project name...'
                            onChange={handleInput} 
                        />
                        <SpacerQuaternary />
                        <TextInput
                            label='Location:' 
                            name='location' 
                            type="text"
                            value={data.location} 
                            placeholder='Enter project location...'
                            onChange={handleInput} 
                        />
                        <SpacerQuaternary />
                        <SelectPrimary
                            label="Status" 
                            onChange={handleInput} 
                            name="status" 
                            dbData={ProjectStatusData}
                        />
                        <SpacerQuaternary />
                        <SelectPrimary
                            label="Category" 
                            onChange={handleInput} 
                            name="category" 
                            dbData={ProjectCategoryData}
                        />
                        <SpacerQuaternary />
                        <TextAreaInput
                            label='Description:' 
                            name='description' 
                            value={data.description} 
                            placeholder='Enter project description...'
                            onChange={handleInput} 
                        />
                        <SpacerQuaternary />
                        <div className='flex items-center justify-center'>
                            <ButtonSubmit 
                                title='Add Project' 
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