"use client"
import Heading2 from '../headings/Heading2'
import Link from 'next/link'
import ButtonSecondary from '../buttons/ButtonSecondary'


interface TitlePrimaryInterface{
    title?: string, 
    btnTitle?: string,
    href?: string,
    titleCss?: string,
}

export default function TitlePrimary({
    title, 
    btnTitle, 
    href= "",
    titleCss="text-gray-800"
}: TitlePrimaryInterface
) {
  return (
    <div className='px-2'>
        <div className="flex items-center justify-between ">
            <Heading2 title={title} css={titleCss} />
            {btnTitle && href ?
            <Link href={href}>
              <ButtonSecondary title={btnTitle} />
            </Link>
            : ""
            }
        </div>
        <div className='h-[0.8rem]' />
        <hr className='border-b-[1px] lg:w-[10%] w-[20%] border-b-2-slate-400' />
    </div>
  )
}
