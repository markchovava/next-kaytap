"use client"
import { JSX } from "react"


interface RowSecondaryInterface{
    label: string,
    value: string | JSX.Element
}

export default function RecordSecondary({label, value}: RowSecondaryInterface) {
  
    return (
        <div className='w-[100%] grid lg:grid-cols-2 grid-cols-1 text-lg lg:gap-2 border'>
            <div className='w-[16%] font-light'>{label}</div>
            <div className='w-[84%]'>{value}</div>
        </div>
    )

}
