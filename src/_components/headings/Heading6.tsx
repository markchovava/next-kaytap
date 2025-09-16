"use client"


interface Heading6Interface{
    title?: string,
    css?: string
}

export default function Heading6({
    title, 
    css="text-gray-600"}
    : Heading6Interface 
) {
  
    return (
        <h5 className={`${css} font-medium tracking-widest leading-tight`}>
        {title}
        </h5>
  )
}
