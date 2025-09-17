"use client"
import { ButtonPrimary } from "@/_components/buttons/ButtonPrimary";
import CardTertiary from "@/_components/cards/CardTertiary";
import CarouselQuaternary from "@/_components/carousels/CarouselQuaternary";
import FadeSlideIn from "@/_components/FadeSlideIn";
import SectionAbout from "@/_components/sections/SectionAbout";
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
    <SectionAbout />


    <SpacerPrimary />
      <FadeSlideIn slideDirection="up" duration={1500}>
        <SectionPrimary />
    </FadeSlideIn>

    
    <SpacerPrimary />
    <FadeSlideIn slideDirection="up" duration={1500}>
      <section className='w-full'>
        <div className='w-[80%] mx-auto grid lg:grid-cols-3 grid-cols-1 gap-8 '>
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
          <TitlePrimary title={AboutData.team.title} btnTitle="See More" href="" />
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
