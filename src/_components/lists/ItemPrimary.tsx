"use client"
import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

interface ItemPrimaryInterface{
    iconType: string,
    details: string
}

export default function ItemPrimary({iconType, details}: ItemPrimaryInterface) {
    const renderIcon = () => {
        switch(iconType) {
            case 'phone':
                return <FaPhoneAlt className='text-lg text-gray-700' />;
            case 'email':
                return <FaEnvelope className='text-lg text-gray-700' />;
            case 'address':
                return <FaMapMarkerAlt className='text-lg text-gray-700' />;
            default:
                return <FaEnvelope className='text-lg text-gray-700' />;
        }
    }

    return (
        <li className='flex items-center justify-start gap-2'>
            <div>{renderIcon()}</div>
            <div>{details}</div>
        </li>
    )
}