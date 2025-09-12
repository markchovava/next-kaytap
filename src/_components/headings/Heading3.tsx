"use client"
import { HeadingInterface } from '@/_data/interface/HeadingInterface'
import React from 'react'


export default function Heading3({title, css}: HeadingInterface) {
  return (
    <>
    <h3 className={`${css} uppercase font-semibold text-[1.2rem] leading-tight`}>
        {title}
    </h3>
    </>
  )
}
