"use client"

import ButtonQuaternary from '@/_components/buttons/ButtonQuaternary'
import RecordPrimary from '@/_components/records/RecordPrimary'
import SpacerTertiary from '@/_components/spacers/SpacerTertiary'
import TitlePrimary from '@/_components/titles/TitlePrimary'
import React, { useEffect, useState } from 'react'
import AppInfoEditModal from './AppInfoEditModal'
import AppInfoData from "../../../../../_data/sample/AppInfoData.json"
import RecordImagePrimary from '@/_components/records/RecordImagePrimary'
import { useAppInfoStore } from '@/_store/useAppInfoStore'
import Logo from '@/_components/Logo'
import LoaderPrimary from '@/_components/loaders/LoaderPrimary'
import NoDataPrimary from '@/_components/no-datas/NoDataPrimary'


interface PropsInterface {
  dbData: any
}


export default function AppInfoPage({ dbData }: PropsInterface ) {
  const { 
    data, 
    setData, 
    preData,
    toggleModal,
    setToggleModal,
    isLoading
  } = useAppInfoStore()

  console.log('dbData:; ', dbData)
  useEffect(() => {
    setData(dbData.data)
  }, [])
 
  const handleToggleModal = () => {
    setToggleModal(true)
  }

  if(isLoading) {
    return ( <LoaderPrimary /> )
  }


  console.log('preData', preData)

  return (
    <>
    <section>
      <div className='mx-auto w-[92%] flex items-center justify-end'>
        <ButtonQuaternary 
            onClick={handleToggleModal}
            title='Edit App Information' 
            css="px-8 py-3 text-white" 
        />
      </div>
    </section>
     
    <SpacerTertiary />
    <section>
        <div className="w-[92%] mx-auto bg-white drop-shadow px-6 py-12 rounded-xl">
            <TitlePrimary title='App Information' />
            <SpacerTertiary />
            
          <div className='flex flex-col items-start justify-center gap-4'>
              <RecordPrimary label="Image:" value={<div className="w-[12rem]"><Logo /></div>} />
              
              {/* If data is "" or null, show "Not yet added." */}
              <RecordPrimary label="Name:" value={preData.name || "Not yet added."} />
              <RecordPrimary label="Email:" value={preData.email || "Not yet added."} />
              <RecordPrimary label="Address:" value={preData.address || "Not yet added."} />
              <RecordPrimary label="Phone Number:" value={preData.phone || "Not yet added."} />
              
              {/* Social Media Links */}
              <RecordPrimary label="Facebook:" value={preData.facebook || "Not yet added."} />
              <RecordPrimary label="WhatsApp:" value={preData.whatsapp || "Not yet added."} />
              <RecordPrimary label="Tiktok:" value={preData.tiktok || "Not yet added."} />
              <RecordPrimary label="Instagram:" value={preData.instagram || "Not yet added."} />
              <RecordPrimary label="Twitter:" value={preData.twitter || "Not yet added."} />
              <RecordPrimary label="LinkedIn:" value={preData.linkedIn || "Not yet added."} />
          </div>
           
        </div>
    </section>


    

    </>
  )
}
