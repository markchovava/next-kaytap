"use client"
import CardSecondary from "../cards/CardSecondary"
import Heading4 from "../headings/Heading4"


export default function GridPrimary({dbData}: {dbData: any[]}) {
  return (
     <div className="w-[100%] grid grid-cols-5 gap-8"> 
      {dbData.map((i, key) => (
        <CardSecondary key={key} dbData={i} />
      ))}
    </div>
  )
}
