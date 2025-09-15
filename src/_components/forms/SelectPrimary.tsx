"use client"

import { SortData } from "@/_data/sample/SortData"

interface SelectPrimaryInterface{
    title: string,
    dbData: any[]
}

export default function SelectPrimary({title, dbData}: SelectPrimaryInterface) {
  return (
    <div className='flex gap-1 items-center justify-start'>
        <p>{title}</p>
        <select className='px-2 py-1.5 outline-none border border-gray-300'>
            <option value="">Default</option>
            {dbData.map((i, key) => (
                <option key={key} value={i.value}>{i.name}</option>
            ))}
        </select>
    </div>
  )
}
