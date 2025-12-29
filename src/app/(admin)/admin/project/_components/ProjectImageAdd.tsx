"use client"

import { baseURL } from "@/_api/baseURL";
import ImageInputPrimary from "@/_components/forms/ImageInputPrimary";
import { useProjectImageStore } from "@/_store/useProjectImageStore";
import { useEffect } from "react";


export function ProjectImageAdd() {
    const {  
        imagesList,
        setImage,
        resetImages,
    } = useProjectImageStore()

    useEffect(() => {
        resetImages()
    }, [])

    const handleChange = (file: File | null, id: string | number) => {
        setImage(id, file)
    }

    return (
        <section className='grid grid-cols-2 gap-4'>
            {imagesList.map((i, key) => (
                <div key={key}>
                    <ImageInputPrimary
                        label="Image"
                        onChange={(file) => handleChange(file, i.id)} 
                        src={i.img ? baseURL + i.img : "" }
                    />
                </div>
            ))}
        </section>
    )  
}