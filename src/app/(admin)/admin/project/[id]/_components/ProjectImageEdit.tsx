"use client"

import { baseURL } from "@/_api/baseURL";
import ImageInputPrimary from "@/_components/forms/ImageInputPrimary";
import { useProjectImageStore } from "@/_store/useProjectImageStore";



export function ProjectImageEdit() {
    const {  
        imagesList,
        setImage,
        deletedImagesList,
        setDeletedImage,
    } = useProjectImageStore()

    const handleChange = (file: File | null, id: string | number, uid: string | number) => {
        const checkId = deletedImagesList.find(a => a === id)
        if(!checkId) {
            setDeletedImage(id)
        }
        setImage(uid, file)   
    }

    console.log("imagesList::: ", imagesList)
    console.log("deletedImagesList::: ", deletedImagesList)


    return (
        imagesList && imagesList.length > 0 ?
        <section className='grid grid-cols-2 gap-4'>
            {imagesList.map((i, key) => (
                <div key={key}>
                    <ImageInputPrimary
                        key={key}
                        label="Image"
                        onChange={(file) => { 
                            handleChange(file, i.id, i.uid)
                        }} 
                        src={baseURL + i.img}
                    />
                </div>
            ))}
        </section>
        : ""
    )  
}