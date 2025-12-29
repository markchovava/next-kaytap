"use client"

import { baseURL } from "@/_api/baseURL";
import ImageInput from "@/_components/forms/ImageInput";
import ImageInputPrimary from "@/_components/forms/ImageInputPrimary";
import { useProductImageStore } from "@/_store/useProductImageStore";


export function ProductImageEdit() {
    const {  
        imagesList,
        setImage,
        removeImage,
        deletedImagesList,
        setDeletedImage,
    } = useProductImageStore()

    const handleChange = (file: File | null, id: string | number) => {
        const checkId = deletedImagesList.find(i => i === id)
        if(!checkId) {
            setDeletedImage(id)
            setImage(id, file)
        }
    }


    return (
        <section className='grid grid-cols-2 gap-4'>
            {imagesList.map((i, key) => (
                <div>
                    <ImageInputPrimary
                        key={key}
                        label="Image"
                        onChange={(file) => handleChange(file, i.id)} 
                        src={baseURL + i.img}
                    />
                </div>
            ))}
        </section>
    )  
}