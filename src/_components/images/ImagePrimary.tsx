"use client";

import Image from "next/image";


interface ImagePrimaryInterface{
    img: string,
    alt?: string,
}

export default function ImagePrimary({ img="", alt="Image" }: ImagePrimaryInterface) {
  return (
    <>
    <Image
        alt={alt}
        src={img} 
        width={800} 
        height={1000} 
        className="object-cover w-full h-full ease-initial duration-200 group-hover:scale-110" />
    </>
  )
}
