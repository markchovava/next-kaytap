"use client"
import ButtonQuaternary from '@/_components/buttons/ButtonQuaternary'
import RecordPrimary from '@/_components/records/RecordPrimary'
import SpacerTertiary from '@/_components/spacers/SpacerTertiary'
import TitlePrimary from '@/_components/titles/TitlePrimary'
import React, { useEffect, useState } from 'react'
import { useProfileStore } from '@/_store/useProfileStore'
import LoaderPrimary from '@/_components/loaders/LoaderPrimary'



const title = "Edit Profile";

interface PropsInterface{
  dbData: any
}

export default function ProfilePage({ dbData }: PropsInterface) {
    const { 
      preData, 
      isLoading,
      setData, 
      setToggleModal
    } = useProfileStore()

    
    useEffect(() => {
      setData(dbData.data)
    }, [])

    const handleToggleModal = () => {
      setToggleModal(true)
    }

    if(isLoading) {
      return (
        <LoaderPrimary />
      )
    }


  return (
    <>
    <section>
      <div className='mx-auto w-[92%] flex items-center justify-end'>
        <ButtonQuaternary 
            onClick={handleToggleModal}
            title={title}
            css="px-8 py-3 text-white" 
        />
      </div>
    </section>
     
    <SpacerTertiary />
    <section>
        <div className="w-[92%] mx-auto bg-white drop-shadow px-6 py-12 rounded-xl">
            <TitlePrimary title='User Proflie' />
            <SpacerTertiary />
            <div className='flex flex-col items-start justify-center gap-4'>
                <RecordPrimary label="Name:" value={preData.name ?? "Not Added Yet"} />
                <RecordPrimary label="Email:" value={preData.email ?? "Not Added Yet"} />
                <RecordPrimary label="Phone:" value={preData.phone ?? "Not Added Yet"} />
                <RecordPrimary label="Password:" value={preData.code ?? "Not Added Yet"} />
                <RecordPrimary label="Role:" value={preData.isAdmin ? "Admin": "Customer"} />       
            </div>
        </div>
    </section>

    </>
  )
}
