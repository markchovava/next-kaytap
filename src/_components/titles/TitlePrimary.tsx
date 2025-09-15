"use client"
import Heading2 from '../headings/Heading2'
import Link from 'next/link'
import ButtonSecondary from '../buttons/ButtonSecondary'


interface TitlePrimaryInterface{
    title?: string, 
    btnTitle?: string,
    href?: string,
}

export default function TitlePrimary({
    title, 
    btnTitle, 
    href= "",
}: TitlePrimaryInterface
) {
  return (
    <div className='px-2'>
        <div className="flex items-center justify-between ">
            <Heading2 title={title} css="text-gray-800 " />
            {btnTitle && href ?
            <Link href={href}>
              <ButtonSecondary title={btnTitle} />
            </Link>
            : ""
            }
        </div>
        <div className='h-[0.8rem]' />
        <hr className='border-b-[1px] lg:w-[10%] w-[20%] border-b-blue-400' />
    </div>
  )
}
