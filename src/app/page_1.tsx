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


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Home`,
  description: AppInfoData.description,
};

export default function Page() {
  return (
   <>
    <SliderPrimary />

    <SpacerSecondary />
    <section className="w-full">
        <div className="mx-auto w-[92%]">
          <TitlePrimary 
              title="Shop by Categories" 
              btnTitle="See More" 
              href="/shop/category" 
          />
          <div className="h-[1.5rem]" />
          <CarouselPrimary dbData={CategoryData} />
          <div className="h-[5rem]" />
        </div>
    </section>


    <section className="w-full">
        <div className="mx-auto w-[92%]">
          <TitlePrimary title="Featured Products" btnTitle="See More" href="#" />
          <div className="h-[1.5rem]" />
          <GridSecondary dbData={ProductsData} />
        </div>
    </section>


    <SpacerSecondary />
    <SectionPrimary />


    <SpacerSecondary />
    <section className="w-full">
        <div className="mx-auto w-[92%]">
            <TitlePrimary title="New Arrivals" btnTitle="See More" href="#" />
          <div className="h-[1.5rem]" />
          <CarouselSecondary dbData={ProductsData} />
        </div>
    </section>


    <SpacerSecondary />
    <section className="w-full">
      <div className="mx-auto w-[92%]">
          <TitlePrimary title="Best Sellers" btnTitle="See More" href="#" />
        <div className="h-[1.5rem]" />
        <CarouselSecondary dbData={ProductsData} />  
      </div>
    </section>

    <SpacerSecondary />
    <SectionSecondary />
   </>
  );
}
