"use client"

import { JSX } from "react"


interface RowPrimaryInterface{
    label: string,
    value: string | JSX.Element
}

export default function RecordPrimary({label, value}: RowPrimaryInterface) {
  
    return (
        <div className='w-[100%] flex lg:flex-row flex-col text-lg lg:gap-2'>
            <div className='md:w-[16%] w-full font-light'>{label}</div>
            <div className='flex-1'>{value}</div>
        </div>
    )

}
