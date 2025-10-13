"use client"
import { NavLinksData } from "@/_data/sample/NavLinksData"
import { Link } from "lucide-react"
import { useState } from "react"



export default function NavListPrimary() {
    const [data, setData] = useState(NavLinksData)

  
  
  return (
    <>
     <ul className='w-[60%] flex items-center justify-start gap-5 font-semibold'>
          {data.map((i, key) => (
           
                <li className='relative'>
                    {i.title}
                </li>
           

          ))}
         </ul>
    </>
  )
}
