"use client"

import { ButtonPrimary } from "../buttons/ButtonPrimary"
import Heading4 from "../headings/Heading4"

export default function CardSecondary({dbData}: {dbData: any}) {
    const {name, price, quantity, status, img} = dbData
  return (
    <div className="rounded-xl overflow-hidden bg-white drop-shadow">
        <div className="aspect-[5/4] bg-gray-500 relative">
            <div className={`${status == "IN STOCK" ? "bg-green-600" : "bg-red-600"} absolute top-2 right-2 text-sm text-white p-1`}>{status}</div>
        </div>
        <div className="h-[0.5rem]" />
        <div className="flex flex-col items-center justify-center">
            <p className="text-center mb-1 font-medium ">{name}</p>
            <Heading4 
                title={`$${price}`} 
                css="text-center text-blue-700 mb-2" />
            {quantity && quantity > 0 ?
            <p className="text-xs text-gray-600 mb-1">{quantity} in stock</p>
            : ""
            }
            <ButtonPrimary 
            title="Add to Cart"
            css="text-sm text-white px-6 py-2" 
            iconCss='' />
            <div className="h-[0.8rem]" />
        </div>
    </div>
  )
}
