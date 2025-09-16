import { Metadata } from "next";
import AppInfoData from "../_data/sample/AppInfoData.json";
import CarouselPrimary from "@/_components/carousels/CarouselPrimary"
import { CategoryData } from "@/_data/sample/CategoryData";
import TitlePrimary from "@/_components/titles/TitlePrimary";
import GridSecondary from "@/_components/grids/GridSecondary";
import { ProductsData } from "@/_data/sample/ProductsData";
import CarouselSecondary from "@/_components/carousels/CarouselSecondary";
import SectionPrimary from "@/_components/sections/SectionPrimary";
import SectionSecondary from "@/_components/sections/SectionSecondary";
import SpacerSecondary from "@/_components/spacers/SpacerSecondary";
import SliderPrimary from "@/_components/sliders/SliderPrimary";
import { AboutData } from "@/_data/sample/AboutData";
import SpacerPrimary from "@/_components/spacers/SpacerPrimary";
import FadeSlideIn from "@/_components/FadeSlideIn";
import { ButtonPrimary } from "@/_components/buttons/ButtonPrimary";
import Link from "next/link";
import CarouselService from "@/_components/carousels/CarouselService";
import { ServiceData } from "@/_data/sample/ServiceData";
import Heading6 from "@/_components/headings/Heading6";
import CarouselProject from "@/_components/carousels/CarouselProject";
import SectionContact from "@/_components/sections/SectionContact";
import Heading1 from "@/_components/headings/Heading1";


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Home`,
  description: AppInfoData.description,
};

export default function Home() {
  return (
   <>
    <SliderPrimary />

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
            <Link href="/about">
            <ButtonPrimary title="More About Us" css="py-4 px-10 text-white"/>
            </Link>
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
            <h1 className="font-bold text-[2.5rem] leading-tight mb-4">Our Core Business</h1>
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
      <section className="w-full">
          <div className="mx-auto w-[92%]">
              <TitlePrimary title="Our Services" btnTitle="See More" href="/service" />
            <div className="h-[1.5rem]" />
            <CarouselService dbData={ServiceData} />
          </div>
      </section>
    </FadeSlideIn>
      
    <SpacerPrimary />
    <FadeSlideIn slideDirection="up" duration={1500}>
      <SectionPrimary />
    </FadeSlideIn>

    <SpacerPrimary />
    <FadeSlideIn slideDirection="up" duration={1500}>
      <section className="w-full">
          <div className="mx-auto w-[92%]">
              <TitlePrimary title="Our Products" btnTitle="See More" href="#" />
            <div className="h-[1.5rem]" />
            <CarouselSecondary dbData={ProductsData} />
          </div>
      </section>
    </FadeSlideIn>

    <SpacerPrimary />
    <FadeSlideIn slideDirection="up" duration={1500}>
      <section className="w-full">
          <div className="mx-auto w-[92%]">
              <TitlePrimary title="Our Projects" btnTitle="See More" href="#" />
            <div className="h-[1.5rem]" />
            <CarouselProject />
          </div>
      </section>
    </FadeSlideIn>


    <SpacerPrimary />
     <FadeSlideIn slideDirection="up" duration={1500}>
        <SectionContact />
     </FadeSlideIn>
   </>
  );
}
