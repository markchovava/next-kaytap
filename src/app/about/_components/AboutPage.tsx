"use client"
import { ButtonPrimary } from "@/_components/buttons/ButtonPrimary";
import CardTertiary from "@/_components/cards/CardTertiary";
import CarouselQuaternary from "@/_components/carousels/CarouselQuaternary";
import FadeSlideIn from "@/_components/FadeSlideIn";
import Heading1 from "@/_components/headings/Heading1";
import Heading2 from "@/_components/headings/Heading2";
import Heading6 from "@/_components/headings/Heading6";
import SectionPrimary from "@/_components/sections/SectionPrimary";
import SectionSecondary from "@/_components/sections/SectionSecondary";
import SpacerPrimary from "@/_components/spacers/SpacerPrimary";
import TitlePrimary from "@/_components/titles/TitlePrimary";
import { AboutData } from "@/_data/sample/AboutData";
import Link from "next/link";



export default function AboutPage() {
  return (
    <>
    

    <SpacerPrimary />
    <FadeSlideIn slideDirection="right" duration={1500}>
      <section>
        <div className="mx-auto w-[92%] grid lg:grid-cols-5 grid-cols-1 gap-8">
          <div className="lg:col-span-2 bg-gray-500 aspect-[4/5] ">
          </div>
          <div className="h-[100%] lg:col-span-3 flex flex-col items-start justify-center">
            <Heading6 title={AboutData.about.subtitle} css="mb-3 text-gray-600" />
            <Heading1 title={AboutData.about.title} css="mb-4" />
            <p className="font-light text-lg text-gray-800 mb-5">
            {AboutData.about.details}</p>
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
          <div className="lg:col-span-2 bg-gray-500 aspect-[4/5] ">
          </div>
        </div>
      </section>
    </FadeSlideIn>


    <SpacerPrimary />
      <FadeSlideIn slideDirection="up" duration={1500}>
        <SectionPrimary />
    </FadeSlideIn>

    
    <SpacerPrimary />
    <FadeSlideIn slideDirection="up" duration={1500}>
      <section className='w-full'>
        <div className='w-[80%] mx-auto grid grid-cols-3 gap-8 '>
          <CardTertiary dbData={AboutData.vision} />
          <CardTertiary dbData={AboutData.mission} />
          <CardTertiary dbData={AboutData.values} />
        </div>
      </section>
    </FadeSlideIn>


    <SpacerPrimary />
    <FadeSlideIn slideDirection="left" duration={1500}>
      <section>
        <div className="w-[92%] mx-auto">
          <TitlePrimary title={AboutData.team.title} btnTitle="See More" href="#" />
          <div className="h-[1.5rem]" />
          <CarouselQuaternary dbData={AboutData.team.items} />
        </div>
      </section>
    </FadeSlideIn>



    <SpacerPrimary />
    <FadeSlideIn slideDirection="right" duration={1500}>
      <SectionSecondary />
    </FadeSlideIn>

  


    </>
  )
}
