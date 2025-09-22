"use client"
import ButtonTertiary from '@/_components/buttons/ButtonTertiary'
import CarouselPrimary from '@/_components/carousels/CarouselPrimary'
import SelectPrimary from '@/_components/forms/SelectPrimary'
import GridSecondary from '@/_components/grids/GridSecondary'
import Heading2 from '@/_components/headings/Heading2'
import Heading3 from '@/_components/headings/Heading3'
import Heading5 from '@/_components/headings/Heading5'
import SpacerPrimary from '@/_components/spacers/SpacerPrimary'
import SpacerQuaternary from '@/_components/spacers/SpacerQuaternary'
import SpacerSecondary from '@/_components/spacers/SpacerSecondary'
import TitlePrimary from '@/_components/titles/TitlePrimary'
import { CategoryData } from '@/_data/sample/CategoryData'
import { PriceRangeData } from '@/_data/sample/PriceData'
import { ProductsData } from '@/_data/sample/ProductsData'
import { PageListData, SortData } from '@/_data/sample/SortData'
import React from 'react'
import { IoIosSearch } from 'react-icons/io'



export default function ShopPage() {
  return (
    <>
    <SpacerPrimary />
    <section className="w-full">
        <div className="mx-auto w-[94%]">
            <TitlePrimary 
                title="Shop by Categories" 
                btnTitle="See More" 
                href="/shop/category" 
            />
          <div className="h-[1.5rem]" />
          <CarouselPrimary dbData={CategoryData} />
        </div>
    </section>
    
    <SpacerSecondary />
    <section className='w-full grid lg:grid-cols-5 grid-cols-1 gap-4'>
      <div className='lg:col-span-1 bg-gray-100 drop-shadow rounded-r-lg py-6 px-4'>
        <div className='mb-6'>
          <Heading5 title="Categories" css="mb-3" />
          <ul className='flex flex-col item-start gap-2'>
            {CategoryData.map((i, key) => (
              <li 
                key={key} 
                className={`w-full cursor-pointer text-left text-gray-700 hover:bg-gray-200 
                hover:text-black ease-initial transition-all duration-200 pl-4`}>
                  <span className=' font-light'>{i.name}</span> ({key * 5})
              </li>
            ))}
          </ul>
        </div>
        <div className='mb-6'>
          <Heading5 title="Prices" css="mb-3" />
          <ul className='flex flex-col item-start gap-2'>
            {PriceRangeData.map((i, key) => (
              <li 
                key={key} 
                className={`w-full cursor-pointer text-left text-gray-700 hover:bg-gray-200 
                hover:text-black ease-initial transition-all duration-200 pl-[1rem]`}>
                  <span className=' font-light'>{i.min} - {i.max}</span> ({key*5})
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='lg:col-span-4 pl-4 pr-[4%] pb-6'>
        <div className='pt-6'>
          <Heading2 title="Search Products" css='mb-3' />

          <div className='w-full mb-6 flex items-center justify-start border border-gray-300 rounded-full overflow-hidden'>
              <input 
                  type="text" 
                  placeholder="Search..." 
                  className='w-full px-5 py-3 outline-none border-r border-gray-300' />
              <button type='submit' className='group px-5 cursor-pointer py-2 rounded-full'>
                  <IoIosSearch className="text-xl group-hover:scale-105 transition-all duration-200" title="Search Button" />
              </button>
          </div>
        </div>
          <div className='flex items-center justify-between mb-2'>
            <SelectPrimary dbData={SortData} label="Sort By:" />
            <SelectPrimary dbData={PageListData} label="Show:" />
          </div>
          <SpacerQuaternary />
          <GridSecondary dbData={ProductsData} />

          <SpacerSecondary />

          <section className='w-full flex items-center justify-center'>
            <ButtonTertiary title='Load More' css='py-3 px-9' />
          </section>

          <SpacerSecondary />
    
      </div>
    </section>
   
    </>
  )
}
