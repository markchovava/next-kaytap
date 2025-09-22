"use client"

import ButtonQuaternary from '@/_components/buttons/ButtonQuaternary'
import RecordPrimary from '@/_components/records/RecordPrimary'
import SpacerTertiary from '@/_components/spacers/SpacerTertiary'
import TitlePrimary from '@/_components/titles/TitlePrimary'
import React, { useState } from 'react'
import AppInfoEditModal from './AppInfoEditModal'
import AppInfoData from "../../../../../_data/sample/AppInfoData.json"
import RecordImagePrimary from '@/_components/records/RecordImagePrimary'




export default function ProfilePage() {
  const [data, setData] = useState(AppInfoData)
  const [isModal, setIsModal] = useState<boolean>(false)

  return (
    <>
    <section>
      <div className='mx-auto w-[92%] flex items-center justify-end'>
        <ButtonQuaternary 
            onClick={() => setIsModal(!isModal)}
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
                <RecordImagePrimary label="Image:" img={data.logo} />
                <RecordPrimary label="Name:" value={data.name} />
                <RecordPrimary label="Email:" value={data.email.details} />
                <RecordPrimary label="Address:" value={data.address.details} />
                <RecordPrimary label="Phone Number:" value={data.phone.details} />
                <RecordPrimary label="Facebook:" value={data.facebook.details} />
                <RecordPrimary label="WhatsApp:" value={data.whatsapp.details} />
                <RecordPrimary label="Tiktok:" value={data.tiktok.details} />
                <RecordPrimary label="Instagram:" value={data.instagram.details} />
                <RecordPrimary label="Twitter:" value={data.twitter.details} />
                <RecordPrimary label="LinkedIn:" value={data.linkedin.details} />
                
               
            </div>
        </div>
    </section>


    <AppInfoEditModal isModal={isModal} setIsModal={setIsModal} />

    </>
  )
}
