import { AboutData } from '@/_data/sample/AboutData'
import Image from 'next/image'
import React from 'react'
import Heading1 from '../headings/Heading1'
import Heading6 from '../headings/Heading6'
import SpacerPrimary from '../spacers/SpacerPrimary'
import FadeSlideIn from '../FadeSlideIn'
import { ButtonPrimary } from '../buttons/ButtonPrimary'
import Link from 'next/link'
import ImagePrimary from '../images/ImagePrimary'




export default function SectionAbout({withHref} : {withHref?: boolean}) {
  return (
    <>
    <FadeSlideIn slideDirection="right" duration={1500}>
      <section>
        <div className="mx-auto w-[92%] grid lg:grid-cols-5 grid-cols-1 gap-8">
          <div className="lg:col-span-2 bg-gray-500 lg:aspect-[4/5] lg:h-auto h-[25rem]">
              <ImagePrimary 
                img={AboutData.about.img} 
                alt={AboutData.about.title} />
          </div>
          <div className="h-[100%] lg:col-span-3 flex flex-col items-start justify-center">
            <Heading6 title={AboutData.about.subtitle} css="mb-3 text-gray-600" />
            <Heading1 title={AboutData.about.title} css="mb-4" />
            <p className="font-light text-lg text-gray-800 mb-5">
              {AboutData.about.details}</p>
              {withHref ?
                <Link href="/about">
                <ButtonPrimary title="More About Us" css="py-4 px-10 text-white"/>
                </Link>
                : ""
              }
          </div>
        </div>
      </section>
    </FadeSlideIn>

    <SpacerPrimary />
    <FadeSlideIn slideDirection="left" duration={1500}>
      <section>
        <div className="mx-auto w-[92%] grid lg:grid-cols-5 grid-cols-1 gap-8">
          <div className="h-[100%] lg:col-span-3 flex flex-col items-start justify-center">
            <Heading6 title={AboutData.coreBusiness.subtitle} css="mb-3 text-gray-600" />
            <Heading1 title={AboutData.coreBusiness.title} css="mb-4" />
            <p className="font-light text-lg text-gray-800 mb-5">
              {AboutData.coreBusiness.details}
            </p>
           
          </div>
          <div className="lg:col-span-2 bg-gray-500 lg:aspect-[4/5] lg:h-auto h-[25rem]">
            <ImagePrimary 
              img={AboutData.coreBusiness.img} 
              alt={AboutData.coreBusiness.title} />
          </div>
        </div>
      </section>
    </FadeSlideIn>
    </>
  )
}
