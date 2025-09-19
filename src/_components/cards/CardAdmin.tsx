"use client"

import { JSX } from "react"
import Link from "next/link"
import Heading2 from "../headings/Heading2"


interface CardAdminInterface {
    id: number,
    icon?: JSX.Element,
    title?: string,
    description?: string,
    href?: string,
    css: string,
}


export default function CardAdmin({dbData}: {dbData: CardAdminInterface}) {
    const {id, icon, title, description, href="", css} = dbData

  return (
    <Link href={href}>
        <div className={`${css} text-white hover:drop-shadow-xl 
            drop-shadow rounded-2xl px-3 py-5 flex items-center justify-start gap-3`}>
            <div className="border-r border-gray-300 pr-2 flex items-center justify-center">
                {icon}
            </div>
            <div>
                <Heading2 title={title} css="mb-1" />
                <p className="text-sm italic text-gray-100">
                    {description}
                </p>
            </div>
        </div>
    </Link>
  )
}
