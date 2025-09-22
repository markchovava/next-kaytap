"use client"

import ButtonQuaternary from '@/_components/buttons/ButtonQuaternary'
import RecordPrimary from '@/_components/records/RecordPrimary'
import SpacerTertiary from '@/_components/spacers/SpacerTertiary'
import TitlePrimary from '@/_components/titles/TitlePrimary'
import React, { useState } from 'react'
import ProfileEditModal from './ProfileEditModal'
import { ProfileData } from '@/_data/sample/ProfileData'





export default function ProfilePage() {
  const [data, setData] = useState(ProfileData)
  const [isModal, setIsModal] = useState<boolean>(false)

  return (
    <>
    <section>
      <div className='mx-auto w-[92%] flex items-center justify-end'>
        <ButtonQuaternary 
            onClick={() => setIsModal(!isModal)}
            title='Edit Profile' 
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
                <RecordPrimary label="Name:" value={data.name} />
                <RecordPrimary label="Email:" value={data.email} />
                <RecordPrimary label="Phone:" value={data.phone} />
                <RecordPrimary label="Address:" value={data.address} />
                <RecordPrimary label="Password:" value={data.code} />
                { data.isAdmin ? 
                  <RecordPrimary label="Role:" value={"Admin"} />
                  :
                  <RecordPrimary label="Role:" value={"Customer"} />
                }
               
            </div>
        </div>
    </section>


    <ProfileEditModal isModal={isModal} setIsModal={setIsModal} />
    </>
  )
}
