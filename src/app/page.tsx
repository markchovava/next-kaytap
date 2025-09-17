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
import Image from "next/image";
import SectionAbout from "@/_components/sections/SectionAbout";
import { ProjectsData } from "@/_data/sample/ProjectsData";


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Home`,
  description: AppInfoData.description,
};

export default function Home() {
  return (
   <>
    <SliderPrimary />

    <SpacerPrimary />
    <SectionAbout withHref={true} />

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
              <TitlePrimary title="Our Projects" btnTitle="See More" href="/project" />
            <div className="h-[1.5rem]" />
            <CarouselProject dbData={ProjectsData} />
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
