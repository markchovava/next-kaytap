"use client"

import { NavDataInterface } from "@/_data/entity/NavDataEntity"
import { useNavStore } from "@/_store/useNavStore"
import Link from "next/link"
import { FaAngleDown } from "react-icons/fa6"


interface PropsInterface{
    preData: NavDataInterface
}

export function NavItem({ preData }: PropsInterface){
    const { setOpenById, setData, data } = useNavStore()
    const {id, title, href, withDropdown, isOpen, items} = preData

    const handleClick = () => {
        setData(preData)
    }


    switch(withDropdown) {
      case true:
        return (
          <li className='relative' onMouseEnter={() => setOpenById(id)} onMouseLeave={() => setOpenById(id)}>
            <button 
                onClick={handleClick} 
                className={`${id === data.id ? 'text-blue-800' : ''} 
                group flex items-center justify-center gap-1 cursor-pointer py-2 px-3 duration-200 
                transition-all hover:text-blue-800 `}>
                {title}
              <FaAngleDown className={`transition-transform duration-300 
                    ${isOpen ? 'rotate-180' : 'rotate-0' }`} />
            </button>
            <ul className={`absolute top-full left-0 z-100 w-[200%] rounded-b-lg bg-white drop-shadow-lg 
                  transition-all duration-300 ease-in-out transform
                  ${ isOpen 
                    ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto border-t border-gray-100' 
                    : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'}
              `}>
              {items.map((i, key) => (
                <Link key={key} href={i.href}>
                  <li className={`px-2 hover:text-blue-800 py-2 cursor-pointer duration-200 transform 
                        transition-all `}>
                      {i.title}
                  </li>
                </Link>

              ))}
            </ul>
          </li>
        )
      default:
        return (
          <Link href={href}>
            <li className='relative'>
              <button onClick={handleClick} className={`${id === data.id ? 'text-blue-800' : ''} 
                    group flex items-center justify-center gap-1 cursor-pointer py-2 px-3 duration-200
                    transition-all hover:text-blue-800`}>
                {title}
            </button>
            </li>
          </Link>
        )
    }
  
}