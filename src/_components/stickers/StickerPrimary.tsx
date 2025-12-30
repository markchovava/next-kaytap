import React, { ReactNode } from 'react'


interface StickerPrimaryInterface {
    title?: string | ReactNode;
}

export default function StickerPrimary({title = "Not Selected"}: StickerPrimaryInterface) {
    
    const status = () => (
        title === "Processing" ? "bg-green-700" :
        title === "Planning" ? "bg-emerald-700" :
        title === "Dispatched" ? "bg-slate-700" :
        title === "Completed" ? "bg-blue-700" :
        title === "In Progress" ? "bg-blue-700" : 
        title === "On Hold" ? "bg-amber-700" : 
        title === "Cancelled" ? "bg-red-700" : 
        "bg-black"
    )

  return (
    <section className='flex'>
      <div className={`${status()} font-light text-white px-2 py-1 rounded-full text-center`}>
          {title}
      </div>
    </section>
  )
}
