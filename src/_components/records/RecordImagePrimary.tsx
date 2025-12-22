"use client"

import Image from "next/image"


interface RecordImagePrimaryInterface{
    label: string,
    img: string
}

export default function RecordImagePrimary({label, img}: RecordImagePrimaryInterface) {
  
    return (
        <div className='w-[100%] flex lg:flex-row flex-col text-lg gap-2'>
            <div className='md:w-[15%] w-[35%] font-light'>{label}</div>
            <div className='lg"w-[20%] md:w-[25%] w-[60%] bg-white drop-shadow py-3 px-4 rounded-xl'>
                <Image 
                    src={img} 
                    width={300} 
                    height={300} 
                    alt={label} 
                    className="w-full h-full object-cover rounded-lg overflow-hidden" />
            </div>
        </div>
    )

}
 