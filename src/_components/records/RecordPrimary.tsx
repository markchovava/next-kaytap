"use client"


interface RowPrimaryInterface{
    label: string,
    value: string
}

export default function RecordPrimary({label, value}: RowPrimaryInterface) {
  
    return (
        <div className='w-[100%] flex lg:flex-row flex-col text-lg lg:gap-2'>
            <div className='w-[15%] font-light'>{label}</div>
            <div className='flex-1'>{value}</div>
        </div>
    )

}
