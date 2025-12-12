"use client"

import { FaRegUser } from "react-icons/fa6"
import { GrStatusPlaceholder } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";


export default function IconDefault({
    css, 
    iconType
}: { 
    css?: string, 
    iconType?: string 
}) {

    switch(iconType) {
        case 'user':
            return (
                <FaRegUser className={css} />
            )
        case 'search':
            return (
                <IoSearch className={css} />
            )
        case 'menu':
            return (
                <GiHamburgerMenu className={css} />
            )
        case 'close':
            return (
                <IoCloseSharp className={css} />
            )
        default:
            return (
                <GrStatusPlaceholder className={css} />
            )
    }
  return (
    <>
        
    </>
  )
}
