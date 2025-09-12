"use client"

import { useNavigationStore } from "@/_store/useNavigationStore"
import Link from "next/link"
import { FaAngleDown } from "react-icons/fa";

export default function HeaderMainArea() {
  const { navLinks, setCurrentNavLink, currentNavLink } = useNavigationStore()

  return (
    <>
    <section className="text-gray-200 bg-blue-950">
      <div className="mx-auto w-[92%]">
        <ul className="flex items-center gap-3 text-sm font-medium">
          { navLinks.map((i, key) => (
            i.withDropdown ? 
            <li key={key} className="relative"  onClick={() => setCurrentNavLink(i.id)} >
              <button 
                className={`${currentNavLink?.id === i.id ? 'bg-slate-900' : ''} py-2.5 px-3 cursor-pointer hover:bg-slate-900 flex items-center gap-1 transition-all duration-200`}>
                {i.title}
                <FaAngleDown className={`transition-transform duration-300 ${i.isOpen ? 'rotate-180' : 'rotate-0'}`} />
              </button>
              
              {/* Dropdown with smooth transitions */}
              <div className={`absolute top-full left-0 z-10 transition-all duration-300 ease-in-out transform ${
                i.isOpen 
                  ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                  : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
              }`}>
                <ul className="rounded-b-xl overflow-hidden bg-slate-900 text-gray-200 shadow-lg w-48">
                  {i.items.map((item, ikey) => (
                    <Link key={ikey} href={item.href}>
                      <li 
                        className={`px-2 hover:bg-slate-950 py-2 cursor-pointer duration-200 transform transition-all`} >
                        {item.title}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </li>
            :
            <Link key={key} href={i.href}>
              <li 
                onClick={() => setCurrentNavLink(i.id)} 
                className={`${currentNavLink?.id === i.id ? 'bg-slate-900' : ''} py-2.5 px-3 cursor-pointer hover:bg-slate-900 flex items-center gap-1 transition-all duration-200`}>
                {i.title}
              </li>
            </Link>
          ))}

        </ul>
      </div>
    </section>

   
    </>
  )
}