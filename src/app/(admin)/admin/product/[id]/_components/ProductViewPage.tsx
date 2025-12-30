"use client"

import ButtonQuaternary from '@/_components/buttons/ButtonQuaternary'
import RecordPrimary from '@/_components/records/RecordPrimary'
import SpacerTertiary from '@/_components/spacers/SpacerTertiary'
import TitlePrimary from '@/_components/titles/TitlePrimary'
import React, { useEffect, useState } from 'react'
import { useProductStore } from '@/_store/useProductStore'
import LoaderPrimary from '@/_components/loaders/LoaderPrimary'
import Image from 'next/image'
import { baseURL } from '@/_api/baseURL'
import StickerSecondary from '@/_components/stickers/StickerSecondary'
import { useProductImageStore } from '@/_store/useProductImageStore'
import { useProductDetailStore } from '@/_store/useProductDetailStore'


interface PropsInterface{
    id: string | number, 
    dbData: any
}


export default function ProductViewPage({id, dbData}: PropsInterface) {
    const { 
      preData,
      data, 
      toggleModal,
      isLoading, 
      setData, 
      setToggleModal 
    } = useProductStore()
    const { setImages } = useProductImageStore()
    const { setDetailList } = useProductDetailStore()

    useEffect(() => {
        if(dbData?.data) {
          setData(dbData?.data)
          setImages(dbData?.data.productImages)   
          setDetailList(dbData?.data.productDetails)   
        }
      
    }, [])


    // Handle case where product is not found
    if (!preData) {
      return (
        <section>
          <div className="w-[92%] mx-auto bg-white drop-shadow px-6 py-12 rounded-xl">
            <TitlePrimary title='Product Not Found' />
            <p className="text-gray-600 mt-4">The product with ID {id} could not be found.</p>
          </div>
        </section>
      )
    }


    if(isLoading) {
      return (
        <LoaderPrimary />
      )
    }

  /* console.log('preData::: ', preData) */

  return (
    <>
      <section className='mx-auto w-[92%] flex items-center justify-end'>
        <ButtonQuaternary 
            onClick={() => setToggleModal(!toggleModal)}
            title='Edit Product' 
            css="px-8 py-3 text-white" 
        />
      </section>
       
      <SpacerTertiary />
      <section>
          <div className="w-[92%] mx-auto bg-white drop-shadow px-6 py-12 rounded-xl">
              <TitlePrimary title='View Product' />
              <SpacerTertiary />
              <div className='flex flex-col items-start justify-center gap-4'>
                  <ProductImageView />
                  <RecordPrimary label="Name:" value={data.name} />
                  <RecordPrimary label="SKU:" value={data.sku} />
                  <RecordPrimary label="Status:" value={<StickerSecondary status={preData.status} />} />
                  <RecordPrimary label="Description:" value={data.desc} />
                  <RecordPrimary label="Quantity:" value={data.quantity.toString()} />
                  <RecordPrimary label="Price:" value={`$${data.price}`} />
                  <ProductDetailView />
                  
              </div>
          </div>
      </section>
    </>
  )
}



function ProductImageView() {
  const { preData } = useProductStore()
   
  return (
    <div className='w-[100%] flex lg:flex-row flex-col text-lg lg:gap-2'>
        <div className='md:w-[16%] w-full font-light'>Image:</div>
        <div className='flex-1 grid lg:grid-cols-4 grid-cols-2 gap-3'>
          {preData.productImages.map((i, key) => (
            <div key={key} className='overflow-hidden w-[100%] rounded-lg'>
              <Image 
                src={baseURL + i.img} 
                alt={i.img} 
                height={320} 
                width={400} 
                className='w-full h-[100%] object-cover' />
            </div>

          ))}
        </div>
    </div>
  )
}

function ProductDetailView() {
  const { detailList } = useProductDetailStore()

  return (
    <div className='w-[100%] flex lg:flex-row flex-col text-lg lg:gap-2'>
        <div className='md:w-[16%] w-full font-light'>Details:</div>
        <div className='flex-1 flex flex-col items-start justify-start'>
          {detailList.map((i, key) => (
            <div key={key} className='flex w-full items-center justify-start border border-gray-300'>
              <div className='flex-1 px-2 border-r border-gray-300'>{i.name}</div>
              <div className='flex-2 px-2'>{i.value}</div>
            </div>
          ))}
        </div>
    </div>
  )
}