"use client"
import React, { useEffect } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Heading2 from '@/_components/headings/Heading2';
import SpacerQuaternary from '@/_components/spacers/SpacerQuaternary';
import { ButtonSubmit } from '@/_components/buttons/ButtonSubmit';
import { useProductStore } from '@/_store/useProductStore';
import ButtonClose from '@/_components/buttons/ButtonClose';
import { _productStoreAction, _productUpdateAction, _productViewAction } from '@/_api/actions/ProductActions';
import { useCategoryStore } from '@/_store/useCategoryStore';
import SelectDefault from '@/_components/forms/SelectDefault';
import { useProductCategoryStore } from '@/_store/useProductCategoryStore';
import { IoMdAdd } from "react-icons/io";
import { FaDeleteLeft } from 'react-icons/fa6';
import { IoIosAddCircle } from "react-icons/io";
import { CategoryInterface } from '@/_data/entity/CategoryEntity';
import { toast } from 'react-toastify';
import { _productCategoryByProductStoreAction, _productCategoryDeleteAction, _productCategoryStoreAction } from '@/_api/actions/ProductCategoryActions';
import { useProductImageStore } from '@/_store/useProductImageStore';
import { useProductDetailStore } from '@/_store/useProductDetailStore';




const title = "Edit Category"

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


export default function ProductCategoryEditModal({ dbData }: {dbData: any}) {
    const { 
        preData,
        setData,
        toggleModal2,
        setToggleModal2,
    } = useProductStore()

    const { setImages } = useProductImageStore()
    const { setDetailList } = useProductDetailStore()
    
    const {
        isSubmitting,
        categoryList,
        selectedCategory,
        dbProductCategoryList,
        setSelectedCategory,
        addCategoryList,
        setDbProductCategoryList, 
        removeDbProductCategoryList,
        setIsSubmitting,
        removeCategoryList
    } = useProductCategoryStore();
    const { 
        categoryAll,
        setCategoryByProduct 
    } = useCategoryStore();
    const handleToggleModal = () => {
        setToggleModal2(!toggleModal2)
    }
    const handleCategorySelect = (id: string | number) => {
        const selectedCategory = categoryAll.find(i => Number(i.id) === Number(id))
        if(!selectedCategory) {
          toast.warn('Category not available.')
          return
        }
        setSelectedCategory(selectedCategory)  
    }
    const handleAdd = () => {
        if(!selectedCategory.id) {
            toast.warn('Category not selected.')
            return
        }
        addCategoryList(selectedCategory)  
    }

    const handleRemove = (id: string | number) => {
      removeCategoryList(id)
    }

    const handleDbRemove = async (id: string | number) => {
        removeDbProductCategoryList(id)
        try{
            const res = await _productCategoryDeleteAction(id) 
            const {data, status, message} = res
            switch(status) {
              case 1:
                toast.success(message)
                await getProductData(preData.id)
                return
              default:
                toast.warn('Something went wrong, please try again.')
                return
            }
        }catch(error){
          console.error('Delete error: ', error);
        } 
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let list = []
        for(let i = 0; i < categoryList.length; i++) {
            list[i] = categoryList[i].id
        }
        const formData = {
          productId: preData.id,
          categoryIds: list
        }
        setIsSubmitting(true)
        try {
          const res = await _productCategoryByProductStoreAction(formData);
          const {status, message} = res;
          switch(status){
              case 1:
                  toast.success(message);
                  await getProductData(preData.id);
                  setIsSubmitting(false);
                  setToggleModal2(false)
                  return
              default:
                  toast.warn('Something went wrong, please try again.');
                  setIsSubmitting(false);
                  return
          } 
      } catch (error) {
          toast.error('Failed to save data. Please try again.');
          console.error('Form submission error:', error);
      }
    }
    
    async function getProductData(id: string | number) {
        try {
            const res = await _productViewAction(id);
            if(res?.data) {  
                res?.productCategory ? setDbProductCategoryList(res?.productCategory) : null
                res?.category ? setCategoryByProduct(res?.category) : null
                setData(res?.data)
                setImages(res?.data.productImages)   
                setDetailList(res?.data.productDetails)
            }
        } catch(error){
            toast.error('Failed to fetch data. Please try again.');
            console.error('Error:', error);
        }
    }
  

    return (
      <>
      <AnimatePresence>
        {toggleModal2 && (
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

                    <Heading2 title={title} css='text-center' />
                    <SpacerQuaternary />
                    <hr className="w-[100%] border-b border-gray-100" />
                    <SpacerQuaternary />

                    {/* PRODUCT NAME */}
                    <div className='w-full'>
                      <p className='font-light text-sm'>Name:</p>
                      <h3 className='text-3xl'>{preData.name}</h3>
                    </div>
                    <SpacerQuaternary />

                    {/* HEADER */}
                    <div className='font-bold grid grid-cols-4 gap-1 w-full bg-gray-100 border border-gray-300'>
                        <div className='col-span-3 border-r border-gray-300 py-1 px-2'>
                          DETAILS
                        </div>
                        <div className='col-span-1 py-1 px-2 text-end'>ACTION</div>
                    </div>
                    <div className='my-2 border-b border-gray-300' />

                    {/* ADD */}
                    <section className='grid grid-cols-4 gap-1 w-full'>
                        <div className='col-span-3'>
                          <SelectDefault
                            label=''
                            name='categoryId'
                            data={categoryAll}
                            onChange={(e) => {
                              handleCategorySelect(e.target.value)
                            }}
                            value={selectedCategory.id}
                          />
                        </div>
                        <div className='col-span-1'>
                          <button 
                            onClick={handleAdd}
                            type='button' 
                            className='cursor-pointer py-1 group bg-white hover:bg-gray-50 w-full h-full flex items-center justify-center border border-gray-300'>
                            <IoIosAddCircle className='text-xl text-blue-800 group-hover:scale-110 duration-200 transition-all ease-in-out' />
                          </button>
                        </div>
                    </section>
                    <div className='my-2 border-b border-gray-300' />

                    {categoryList.map((i, key) => (
                      <section 
                          key={key} 
                          className='grid grid-cols-4 gap-1 w-full border-b border-gray-300'>
                            <div className='col-span-3 pt-2 pb-1 px-2'>
                              <p className='text-gray-700 font-medium text-sm'>{i.name}</p>
                            </div>
                            <div className='col-span-1 py-1'>
                              <button 
                                  type='button' 
                                  onClick={() => handleRemove(i.id)}
                                  className='cursor-pointer py-1 group w-full flex items-center justify-center'>
                                  <FaDeleteLeft className='text-xl text-red-600 group-hover:scale-110 duration-200 transition-all ease-in-out' />
                                </button>
                            </div>
                      </section>
                    ))}

                    {dbProductCategoryList.map((i, key) => (
                      <section 
                          key={key} 
                          className='grid grid-cols-4 gap-1 w-full border-b border-gray-300'>
                            <div className='col-span-3 pt-2 pb-1 px-2'>
                              <p className='text-gray-700 font-medium text-sm'>{i.category.name}</p>
                            </div>
                            <div className='col-span-1 py-1'>
                              <button 
                                  type='button' 
                                  onClick={() => handleDbRemove(i.id)}
                                  className='cursor-pointer py-1 group w-full flex items-center justify-center'>
                                  <FaDeleteLeft className='text-xl text-red-600 group-hover:scale-110 duration-200 transition-all ease-in-out' />
                                </button>
                            </div>
                      </section>
                    ))}
                        
                    <SpacerQuaternary />
                    <form onSubmit={handleSubmit} className='flex items-center justify-center'>
                        <ButtonSubmit 
                            title='Submit' 
                            css='px-12 text-white py-4' 
                            isSubmit={isSubmitting} 
                        />
                    </form>
                    <SpacerQuaternary />
                    
                </section>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
      </>
    )
}





