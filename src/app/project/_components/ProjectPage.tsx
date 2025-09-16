import ButtonTertiary from '@/_components/buttons/ButtonTertiary'
import CardProject from '@/_components/cards/CardProject'
import FadeSlideIn from '@/_components/FadeSlideIn'
import SpacerPrimary from '@/_components/spacers/SpacerPrimary'
import SpacerTertiary from '@/_components/spacers/SpacerTertiary'
import TitlePrimary from '@/_components/titles/TitlePrimary'
import React from 'react'

export default function ProjectPage() {
  return (
    <>
    <FadeSlideIn slideDirection="up" duration={1500}>
      <section>
          <div className='mx-auto w-[92%]'>
          <TitlePrimary title='Our Previous Works.' />
          
          <SpacerTertiary />
          <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>
              {[...Array(12)].map((i, key) => (
                  <CardProject />
              ))}
          </div>

          <SpacerPrimary />
          <section className='w-full flex items-center justify-center'>
              <ButtonTertiary title='Load More' css='py-3 px-10' />
          </section>

          </div>
      </section>
    </FadeSlideIn>
    </>
  )
}
