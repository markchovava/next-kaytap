import { ButtonPrimary } from '@/_components/buttons/ButtonPrimary'
import Heading1 from '@/_components/headings/Heading1'
import Heading2 from '@/_components/headings/Heading2'
import Heading3 from '@/_components/headings/Heading3'
import Heading5 from '@/_components/headings/Heading5'
import SpacerPrimary from '@/_components/spacers/SpacerPrimary'
import SpacerQuaternary from '@/_components/spacers/SpacerQuaternary'
import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import ProductDetailsTab from './ProductDetailsTab'
import TitlePrimary from '@/_components/titles/TitlePrimary'
import SpacerSecondary from '@/_components/spacers/SpacerSecondary'
import CarouselSecondary from '@/_components/carousels/CarouselSecondary'
import { ProductsData } from '@/_data/sample/ProductsData'




export default function ProductPage({ id }: {id: any }) {
  return (
    <>
    <section>
        <div className='w-[92%] mx-auto grid lg:grid-cols-7 grid-cols-1 gap-8'>
            <div className='lg:col-span-3'>
                <div className='w-[100%] aspect-[5/4] bg-gray-400 rounded-xl overflow-hidden mb-4'></div>
                <div className='grid grid-cols-5 gap-3'>
                    {[...Array(3)].map((i, key) => (
                        <div key={key} className='rounded-lg aspect-[5/4] bg-gray-400 overflow-hidden'></div>
                    ))}
                </div>
            </div>
            <div className='lg:col-span-4 flex flex-col items-start justify-center'>
                <Heading2 title={`Product Name`} />
                <Heading1 title={`$23.45`} css='text-blue-700' />
                <SpacerQuaternary />
                <div className='mb-4'>
                    <p className='font-light text-sm'>Product Name:</p>
                    <p className='font-light text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ducimus, veritatis et facere 
                        enim quasi laboriosam sed reiciendis ipsam officiis.
                    </p>
                </div>
                <div className='mb-4'>
                    <p className='inline text-white px-2 py-1 bg-green-700'>IN STOCK</p>
                </div>
                 <div className='mb-4'>
                    <p className='font-light text-sm'>SKU:</p>
                    <Heading5 title="23ASGDH2" />
                </div>
                <div className='mb-4'>
                    <p className='font-light text-sm'>Quantity Left:</p>
                    <Heading3 title="23" />
                </div>
                <div className='mb-4 flex items-center justify-start h-[3rem] gap-4'>
                    <section className='flex items-center justify-start h-[100%] rounded-full border border-gray-300'>
                        <button className='flex cursor-pointer items-center justify-center px-4 h-[100%] border-r border-gray-300'>
                            <FaMinus className='text-lg text-gray-500' />
                        </button>
                        <input type="number" 
                            min={1} 
                            placeholder='1'
                            className='h-[100%] w-[5rem] outline-none border border-gray-300 px-4 py-2' />
                        <button className='cursor-pointer flex items-center justify-center px-4 h-[100%] border-l border-gray-300'>
                            <FaPlus className='text-lg text-gray-500' />
                        </button>
                    </section>

                    <ButtonPrimary title='Add to Cart' css='h-[100%] px-6 text-white' />

                </div>
            </div>
        </div>
    </section>

    <SpacerPrimary />
     <div className='w-[92%] mx-auto'>
        <ProductDetailsTab />
     </div>

    <SpacerSecondary />
    <section className="w-full">
        <div className="mx-auto w-[92%]">
            <TitlePrimary title="Recommended Products" btnTitle="See More" href="" />
            <div className="h-[1.5rem]" />
            <CarouselSecondary dbData={ProductsData} />
        </div>
    </section>

    <SpacerSecondary />
    </>
  )
}
