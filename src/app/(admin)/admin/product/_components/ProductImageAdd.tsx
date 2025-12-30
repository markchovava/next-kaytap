"use client"

import { baseURL } from "@/_api/baseURL";
import ImageInputPrimary from "@/_components/forms/ImageInputPrimary";
import { useProductImageStore } from "@/_store/useProductImageStore";
import { useEffect } from "react";



export function ProductImageAdd() {
    const {  
        imagesList,
        setImage,
        resetImageFiles,
    } = useProductImageStore()

    useEffect(() => {
        resetImageFiles();
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
                        onChange={(file) => handleChange(file, i.uid)} 
                        src={i.img ? baseURL + i.img : "" }
                    />
                </div>
            ))}
        </section>
    )  
}