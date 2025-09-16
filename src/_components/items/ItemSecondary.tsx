"use client"

import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

interface ItemPrimaryInterface{
    iconType?: string,
    details?: string,
    css?: string
}


export default function ItemSecondary({iconType, details, css}: ItemPrimaryInterface) {
     const renderIcon = () => {
            switch(iconType) {
                case 'phone':
                    return <FaPhoneAlt className={css} />;
                case 'email':
                    return <FaEnvelope className={css} />;
                case 'address':
                    return <FaMapMarkerAlt className={css} />;
                default:
                    return <FaEnvelope className={css} />;
            }
        }
  return (
    <li className='flex items-center justify-start gap-1 font-light'>
        {renderIcon()}
        {details}
    </li>
  )
}
