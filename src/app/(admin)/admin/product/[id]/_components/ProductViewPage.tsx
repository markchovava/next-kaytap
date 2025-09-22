"use client"

import ButtonQuaternary from '@/_components/buttons/ButtonQuaternary'
import RecordPrimary from '@/_components/records/RecordPrimary'
import SpacerTertiary from '@/_components/spacers/SpacerTertiary'
import TitlePrimary from '@/_components/titles/TitlePrimary'
import React, { useState } from 'react'
import ProductEditModal from './ProductEditModal'
import { ProductsData } from '@/_data/sample/ProductsData'
import ImagePrimary from '@/_components/images/ImagePrimary'




export default function ProductViewPage({id}: {id: string | number}) {
  const numId = Number(id)
  const dbData = ProductsData.find((i) => i.id === numId)

  const [data, setData] = useState(dbData)
  const [isModal, setIsModal] = useState<boolean>(false)


  // Handle case where product is not found
  if (!data) {
    return (
      <section>
        <div className="w-[92%] mx-auto bg-white drop-shadow px-6 py-12 rounded-xl">
          <TitlePrimary title='Product Not Found' />
          <p className="text-gray-600 mt-4">The product with ID {id} could not be found.</p>
        </div>
      </section>
    )
  }

  return (
    <>
      <section>
        <div className='mx-auto w-[92%] flex items-center justify-end'>
          <ButtonQuaternary 
              onClick={() => setIsModal(!isModal)}
              title='Edit Product' 
              css="px-8 py-3 text-white" 
          />
        </div>
      </section>
       
      <SpacerTertiary />
      <section>
          <div className="w-[92%] mx-auto bg-white drop-shadow px-6 py-12 rounded-xl">
              <TitlePrimary title='View Product' />
              <SpacerTertiary />
              <div className='flex flex-col items-start justify-center gap-4'>
                  {data.img ? (
                    <ImagePrimary img={data.img} />
                  ) : ''}
                  <RecordPrimary label="Name:" value={data.name} />
                  <RecordPrimary label="SKU:" value={data.sku} />
                  <RecordPrimary label="Status:" value={data.status} />
                  <RecordPrimary label="Description:" value={data.description} />
                  <RecordPrimary label="Quantity:" value={data.quantity.toString()} />
                  <RecordPrimary label="Price:" value={`$${data.price.toFixed(2)}`} />
              </div>
          </div>
      </section>

      <ProductEditModal isModal={isModal} setIsModal={setIsModal} />
    </>
  )
}