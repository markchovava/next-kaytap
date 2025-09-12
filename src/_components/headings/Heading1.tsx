import { HeadingInterface } from '@/_data/interface/HeadingInterface'
import React from 'react'


export default function Heading1({title, css}: HeadingInterface) {
  return (
    <>
    <h1 className={`${css} font-bold text-[2.5rem] leading-tight`}>
        {title}
    </h1>
    </>
  )
}