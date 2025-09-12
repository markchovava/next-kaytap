"use client"
import CardSecondary from "../cards/CardSecondary"



export default function GridSecondary({dbData}: {dbData: any[]}) {


  return (
     <div className="w-[100%] grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8"> 
      {dbData.map((i, key) => (
        key < 10 &&
        <CardSecondary key={key} dbData={i} />
      ))}
    </div>
  )
}
