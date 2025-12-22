"use client"

import ButtonQuaternary from '@/_components/buttons/ButtonQuaternary'
import RecordPrimary from '@/_components/records/RecordPrimary'
import SpacerTertiary from '@/_components/spacers/SpacerTertiary'
import TitlePrimary from '@/_components/titles/TitlePrimary'
import React, { useEffect, useState } from 'react'
import UserEditModal from './UserEditModal'
import { useUserStore } from '@/_store/useUserStore'
import { displayRoleName } from '@/_utils/formatRole'
import { displayIsAdminName } from '@/_utils/formatIsAdmin'
import LoaderPrimary from '@/_components/loaders/LoaderPrimary'

const ProfileData = {
  name: "Mark Chovava",
  email: "markchovava@gmail.com",
  phone: "+253 782 210021",
  address: "1 First Street, CBD, Harare",
  code: "12345678",
  isAdmin: true
}


interface PropsInterface{
    dbData: any
}



export default function UserViewPage({ dbData }: PropsInterface) {
  const { 
    preData, 
    data, 
    toggleModal,
    setData, 
    setToggleModal, 
    isLoading,
  } = useUserStore()

  useEffect(() => {
    setData(dbData.data)
  }, []);

  const handleToggleModal = () => {
      setToggleModal(!toggleModal)
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
            title='Edit' 
            css="px-8 py-3 text-white" 
        />
      </div>
    </section>
     
    <SpacerTertiary />
    <section>
        <div className="w-[92%] mx-auto bg-white drop-shadow px-6 py-12 rounded-xl">
            <TitlePrimary title='View User ' />
            <SpacerTertiary />
            <div className='flex flex-col items-start justify-center gap-4'>
                <RecordPrimary label="Name:" value={preData.name ?? "Not Added Yet"} />
                <RecordPrimary label="Email:" value={preData.email ?? "Not Added Yet"} />
                <RecordPrimary label="Phone:" value={preData.phone ?? "Not Added Yet"} />
                <RecordPrimary label="Password:" value={preData.code ?? "Not Added Yet"} />
                <RecordPrimary label="Admin:" value={preData.roleLevel ? displayIsAdminName(preData.isAdmin) : 'Not Added Yet'} />
                <RecordPrimary label="Role:" value={preData.roleLevel ? displayRoleName(preData.roleLevel) : 'Not Added Yet'} />
                 
               
            </div>
        </div>
    </section>


   
    </>
  )
}
