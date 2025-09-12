"use client"
import { HeadingInterface } from '@/_data/interface/HeadingInterface'
import React from 'react'


export default function Heading5({title, css}: HeadingInterface) {
  return (
    <>
    <h5 className={`${css} uppercase font-semibold text-[1rem] leading-tight`}>
        {title}
    </h5>
    </>
  )
}
