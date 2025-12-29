"use client"
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Heading2 from '@/_components/headings/Heading2';
import SpacerQuaternary from '@/_components/spacers/SpacerQuaternary';
import TextInput from '@/_components/forms/TextInput';
import { ButtonSubmit } from '@/_components/buttons/ButtonSubmit';
import TextAreaInput from '@/_components/forms/TextAreaInput';
import SelectPrimary from '@/_components/forms/SelectPrimary';
import { useProductStore } from '@/_store/useProductStore';
import ButtonClose from '@/_components/buttons/ButtonClose';
import { useProductDetailStore } from '@/_store/useProductDetailStore';
import { _productStoreAction, _productUpdateAction, _productViewAction } from '@/_api/actions/ProductActions';
import { ProductStockData } from '@/_data/sample/ProductStockData';
import { ProductDetailEdit } from './ProductDetailEdit';
import { ProductImageEdit } from './ProductImageEdit';
import { useProductImageStore } from '@/_store/useProductImageStore';




const title = "Edit Product"

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


export default function ProductEditModal({id}: {id: string | number}) {
    const { 
        data, 
        isSubmitting, 
        toggleModal,
        setData,
        setInputValue,
        validateForm,
        setIsSubmitting,
        setToggleModal,
        clearErrors,
    } = useProductStore()
    
    const { 
        detailList,
        setDetailList,
    } = useProductDetailStore();

    const { 
        imagesList, 
        initializeImages,
        setImages,
        deletedImagesList,
    } = useProductImageStore()

    // Initialize images array when modal opens
    useEffect(() => {
        if (toggleModal && imagesList.length === 0) {
            initializeImages();
        }
    }, [toggleModal, imagesList.length, initializeImages]);

    const handleToggleModal = () => {
        setToggleModal(!toggleModal)
    }

    async function getProductData(id: string | number) {
        try {
            const res = await _productViewAction(id);
            if(res?.data) {
              setData(res?.data)
              setImages(res?.data.productImages)   
              setDetailList(res?.data.productDetails)   
            }
        } catch(error){
            toast.error('Failed to fetch data. Please try again.');
            console.error('Error:', error);
        }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true)
        clearErrors();
        e.preventDefault();
        setIsSubmitting(true);
        // Validate form using store
        const validation = validateForm();
        if (!validation.isValid) {
            // Show the first error as toast
            const firstError = validation.errors.name || 
                validation.errors.price || 
                validation.errors.quantity ||
                validation.errors.status;
            toast.warn(firstError);
            return;
        }
        try {
            // Prepare form data with images
            const formData = new FormData();
            // Append product data
            formData.append('name', data.name);
            formData.append('desc', data.desc);
            formData.append('sku', data.sku);
            formData.append('price', data.price.toString());
            formData.append('quantity', data.quantity.toString());
            formData.append('status', data.status);
            // Append images (only those with files)
            let i = 1;
            imagesList.forEach((img) => {
                if (img.imgFile) {    
                    formData.append(`images[]`, img.imgFile);
                    formData.append(`priorities[]`, i.toString());
                    i++
                }
            });
            deletedImagesList.map((id) => {
                formData.append('deletedImageIds[]', id)
            })
            // Append product details
            detailList.forEach((i, index) => {
                formData.append(`details[${index}][name]`, i.name);
                formData.append(`details[${index}][value]`, i.value);
            });
            
            // API call
            const res = await _productUpdateAction(id, formData);
            const { status, message } = res;
            switch(status) {
                case 1:
                    toast.success(message);
                    await getProductData(id);
                    clearErrors();
                    //resetData();
                    //resetDetailList();
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
                {toggleModal && (
                    <motion.section
                        variants={variants}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        className='w-[100vw] h-[100vh] fixed top-0 left-0 z-[200] overflow-y-auto'>
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
                                    
                                    <ProductImageEdit />
                                    <SpacerQuaternary />

                                    <TextInput
                                        label='Name:' 
                                        name='name' 
                                        type="text"
                                        value={data.name} 
                                        placeholder='Enter product name...'
                                        onChange={setInputValue} 
                                    />
                                    <SpacerQuaternary />

                                    <div className='grid grid-cols-2 gap-3'>
                                        <TextInput
                                            label='Price:' 
                                            name='price' 
                                            type="number"
                                            value={data.price} 
                                            placeholder='Enter price...'
                                            onChange={setInputValue} 
                                        />
                                        <TextInput
                                            label='Quantity:' 
                                            name='quantity' 
                                            type="number"
                                            value={data.quantity} 
                                            placeholder='Enter quantity...'
                                            onChange={setInputValue} 
                                        />
                                    </div>
                                    <SpacerQuaternary />

                                    <SelectPrimary
                                        label="Status" 
                                        onChange={setInputValue} 
                                        name="status" 
                                        value={data.status}
                                        dbData={ProductStockData}
                                    />
                                    <SpacerQuaternary />
                                    
                                    <TextInput
                                        label='SKU:' 
                                        name='sku' 
                                        type="text"
                                        value={data.sku} 
                                        placeholder='Enter SKU here...'
                                        onChange={setInputValue} 
                                    />
                                    <SpacerQuaternary />

                                    <TextAreaInput
                                        label='Description:' 
                                        name='desc' 
                                        value={data.desc} 
                                        placeholder='Enter product description...'
                                        onChange={setInputValue} 
                                    />
                                    <SpacerQuaternary />
                                    
                                    <ProductDetailEdit />
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
        </>
    )
}





