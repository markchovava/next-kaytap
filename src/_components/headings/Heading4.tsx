"use client"
import { HeadingInterface } from '@/_data/interface/HeadingInterface'
import React from 'react'


export default function Heading4({title, css}: HeadingInterface) {
  return (
    <>
    <h1 className={`${css} font-semibold text-[1.2rem] leading-tight`}>
        {title}
    </h1>
    </>
  )
}
