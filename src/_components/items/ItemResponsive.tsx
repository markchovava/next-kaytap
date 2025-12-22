"use client"

export function ItemResponsive({label, name}: {label: string, name: string}){
  return (
    <div>
      <p className="font-light text-sm">{label}</p>
      <p>{name}</p>
    </div>
  )
}