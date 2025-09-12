"use client"
import { HeadingInterface } from '@/_data/interface/HeadingInterface'
import React from 'react'


export default function Heading2({title, css}: HeadingInterface) {
  return (
    <>
    <h1 className={`${css} font-bold text-[1.8rem] leading-tight`}>
        {title}
    </h1>
    </>
  )
}
