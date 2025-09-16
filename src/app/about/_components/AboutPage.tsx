"use client"
import CardTertiary from "@/_components/cards/CardTertiary";
import CarouselQuaternary from "@/_components/carousels/CarouselQuaternary";
import FadeSlideIn from "@/_components/FadeSlideIn";
import Heading2 from "@/_components/headings/Heading2";
import SectionSecondary from "@/_components/sections/SectionSecondary";
import TitlePrimary from "@/_components/titles/TitlePrimary";
import { AboutData } from "@/_data/sample/AboutData";



export default function AboutPage() {
  return (
    <>
    <div className="h-[5rem]" />
    <FadeSlideIn slideDirection="up" duration={1500}>
      <section className='w-full'>
        <div className='w-[70%] mx-auto text-2xl font-light'>
          <Heading2 title="About the Company" css='mb-3' />
          <p className='text-2xl font-light'>
            {AboutData.about}
          </p>
        </div>
      </section>
    </FadeSlideIn>

    <div className="h-[5rem]" />
    <FadeSlideIn slideDirection="up" duration={1500}>
        <section className="w-full bg-blue-950 text-gray-100">
          <div className="h-[4rem]" />
          <div className="mx-auto w-[80%]">
            <Heading2 title={AboutData.coreBusiness.title} css="mb-2" />
            <p className="text-xl font-light">{AboutData.coreBusiness.details}</p>
          </div>
          <div className="h-[4rem]" />
        </section>
    </FadeSlideIn>

    
    <div className="h-[5rem]" />
    <FadeSlideIn slideDirection="up" duration={1500}>
      <section className='w-full'>
        <div className='w-[80%] mx-auto grid grid-cols-3 gap-8 '>
          <CardTertiary dbData={AboutData.vision} />
          <CardTertiary dbData={AboutData.mission} />
          <CardTertiary dbData={AboutData.values} />
        </div>
      </section>
    </FadeSlideIn>

    <div className="h-[5rem]" />
    <section>
      <div className="w-[92%] mx-auto">
        <TitlePrimary title={AboutData.team.title} btnTitle="See More" href="#" />
        <div className="h-[1.5rem]" />
        <CarouselQuaternary dbData={AboutData.team.items} />
      </div>
    </section>

    <div className="h-[5rem]" />

     <SectionSecondary />

  


    </>
  )
}
