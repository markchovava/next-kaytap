"use client"

import ButtonQuaternary from '@/_components/buttons/ButtonQuaternary'
import RecordPrimary from '@/_components/records/RecordPrimary'
import SpacerTertiary from '@/_components/spacers/SpacerTertiary'
import TitlePrimary from '@/_components/titles/TitlePrimary'
import React, { useState } from 'react'
import CategoryEditModal from './CategoryEditModal'
import { CategoryData } from '@/_data/sample/CategoryData'
import ImagePrimary from '@/_components/images/ImagePrimary'
import RecordImagePrimary from '@/_components/records/RecordImagePrimary'




export default function CategoryViewPage({id}: {id: string | number}) {
  const numId = Number(id)
  const dbData = CategoryData.find((i) => i.id === numId)

  const [data, setData] = useState(dbData)
  const [isModal, setIsModal] = useState<boolean>(false)

  console.log("CategoryData", CategoryData)
  console.log("Id", id)
  console.log("numId", numId)
  console.log("dbData", dbData)
  console.log("Data", data)

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
              onClick={() => setIsModal(!isModal)}
              title='Edit Category' 
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
                <RecordImagePrimary label="Image:" img={data.img} />
                <RecordPrimary label="Name:" value={data.name} />
              </div>
          </div>
      </section>

      <CategoryEditModal isModal={isModal} setIsModal={setIsModal} />
    </>
  )
}