import Heading5 from '@/_components/headings/Heading5'
import SpacerPrimary from '@/_components/spacers/SpacerPrimary'
import SpacerTertiary from '@/_components/spacers/SpacerTertiary'
import TitlePrimary from '@/_components/titles/TitlePrimary'
import { ServiceData } from '@/_data/sample/ServiceData'
import React from 'react'

export default function SevicePage() {
  return (
    <>
    <section className='w-full'>
        <SpacerPrimary />
        <div className='mx-auto w-[92%]'>
        <TitlePrimary title='What we do?' />
        <SpacerTertiary />
        <section className='grid grid-cols-4 gap-8'>
            {ServiceData.map((i, key) => (
                <div key={key} className='rounded-xl overflow-hidden bg-white drop-shadow'>
                    <div className='aspect-[5/4] bg-gray-500'></div>
                    <Heading5 title={i.name} css='text-center p-4' />
                </div>
            ))}
        </section>
        </div>
        <SpacerPrimary />
    </section>
    </>
  )
}
