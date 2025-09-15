import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'



export default function BreadCrumbs({dbData} : {dbData: any[]}) {
  return (
    <section>
        <ul className='mx-auto w-[92%] flex items-center justify-start gap-3 text-sm py-1'>
            {dbData.map((i, key) => (
                key < dbData.length-1 ?
                <Link key={key} href={i.href}>
                    <li className='flex items-center justify-center'> 
                        {i.name}
                        <FaAngleRight className="ml-3" />
                    </li>
                </Link>
                :
                 <Link key={key} href={i.href}>
                    <li className='font-semibold'> {i.name}</li>
                </Link>

            ))}
        </ul>
    </section>
  )
}
