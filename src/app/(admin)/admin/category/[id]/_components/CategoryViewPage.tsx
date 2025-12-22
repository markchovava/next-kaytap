"use client"

import ButtonQuaternary from '@/_components/buttons/ButtonQuaternary'
import RecordPrimary from '@/_components/records/RecordPrimary'
import SpacerTertiary from '@/_components/spacers/SpacerTertiary'
import TitlePrimary from '@/_components/titles/TitlePrimary'
import React, { useEffect, useState } from 'react'
import CategoryEditModal from './CategoryEditModal'
import { CategoryData } from '@/_data/sample/CategoryData'
import RecordImagePrimary from '@/_components/records/RecordImagePrimary'
import { useCategoryStore } from '@/_store/useCategoryStore'
import { baseURL } from '@/_api/baseURL'
import LoaderPrimary from '@/_components/loaders/LoaderPrimary'



interface PropsInterface{
    id: string | number,
    dbData: any,
}

export default function CategoryViewPage({id, dbData}: PropsInterface) {
    const {
      data, 
      preData, 
      setData, 
      toggleModal, 
      setToggleModal,
      isLoading,
    } = useCategoryStore()

    useEffect(() => {
      setData(dbData.data)
    }, [])

    const handleToggleModal = () => {
      setToggleModal(!toggleModal)
    }

    
    if(isLoading){
      return (
        <LoaderPrimary />
      )
    }
 

    // Handle case where Category is not found
    if (!data) {
      return (
        <section>
          <div className="w-[92%] mx-auto bg-white drop-shadow px-6 py-12 rounded-xl">
            <TitlePrimary title='Category Not Found' />
            <p className="text-gray-600 mt-4">The Category with ID {id} could not be found.</p>
          </div>
        </section>
      )
    }

  return (
    <>
      <section>
        <div className='mx-auto w-[92%] flex items-center justify-end'>
          <ButtonQuaternary 
              onClick={handleToggleModal}
              title='Edit' 
              css="px-8 py-3 text-white" 
          />
        </div>
      </section>
       
      <SpacerTertiary />
      <section>
          <div className="w-[92%] mx-auto bg-white drop-shadow px-6 py-12 rounded-xl">
              <TitlePrimary title='View Category' />
              <SpacerTertiary />
              <div className='flex flex-col items-start justify-center gap-4'>
                <RecordImagePrimary label="Image:" img={baseURL + preData?.img} />
                <RecordPrimary label="Name:" value={preData?.name} />
                <RecordPrimary label="Description:" value={preData?.desc} />
                <RecordPrimary 
                  label="Priority:" 
                  value={preData?.priority ? preData?.priority.toString() : 'Not Yet Added.'} />
                <RecordPrimary 
                    label="User:" 
                    value={preData?.user.name ? preData?.user.name : preData?.user.email} />
              </div>
          </div>
      </section>

      
    </>
  )
}