"use client"


interface PropsInterface{
  label: string | React.ReactNode, 
  name: string | React.ReactNode
}


export function ItemResponsive({label, name}: PropsInterface){
  return (
    <div>
      <p className="font-light text-sm">{label}</p>
      <p>{name}</p>
    </div>
  )
}