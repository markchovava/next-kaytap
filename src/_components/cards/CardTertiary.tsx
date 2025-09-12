import React from 'react'
import Heading5 from '../headings/Heading5'

interface CardTertiaryInterface{
    icon: React.ReactElement,
    title: string,
    items: any[]
}

export default function CardTertiary({dbData}: {dbData: CardTertiaryInterface}) {
    const {icon, title, items} = dbData
  return (
    <div className="border-r border-r-gray-300">
        <div className="flex items-center justify-center">
        {icon}
        </div>
        <div className="">
        <Heading5 title={title} css="mb-2 text-center" />
        <ul className="list-inside list-disc leading-tight font-light">
            {items.map((i, key) => (
                <li key={key}>{i.details}</li>
            ))}
        </ul>
    </div>
    </div>
  )
}
