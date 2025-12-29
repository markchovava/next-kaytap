"use client";
import { ProductImageEntity, ProductImageInterface } from "@/_data/entity/ProductImageEntity";
import { create } from "zustand";



interface PropsInterface{
    imagesList: ProductImageInterface[]
    deletedImagesList: any[]
    initializeImages: () => void,
    setDeletedImage: (id: number | string) => void,
    setImage: (
      id: number | string, 
      imgFile: File | null
    ) => void,
    setImages: (data: any) => void,
    removeImage: (id: number | string) => void,
    resetImages: () => void,

 
}


export const useProductImageStore = create<PropsInterface>((set, get) => ({
    imagesList: [],
    deletedImagesList: [],
    initializeImages: () => {
        set({
        imagesList: [
            { ...ProductImageEntity, id: 1, priority: 1, imgFile: null },
            { ...ProductImageEntity, id: 2, priority: 2, imgFile: null },
            { ...ProductImageEntity, id: 3, priority: 3, imgFile: null },
            { ...ProductImageEntity, id: 4, priority: 4, imgFile: null },
        ]
        });
    }, 
    setDeletedImage: (id) => {
        const list = get().deletedImagesList
        set({
            deletedImagesList: [...list, id]
        })
    },  
    setImages: (data) => {
        set({
            imagesList: data
        })
    }, 
    setImage: (id, imgFile) => {
        const current = get().imagesList;
        const existingIndex = current.findIndex((img) => img.id === id); 
        if (existingIndex !== -1) {
            // Update existing image slot
            set({
                imagesList: current.map((img) => 
                    img.id === id ? { ...img, imgFile } : img
                )
            });
        } else {
            // Add new image slot (shouldn't happen if initialized properly)
            const newImage: ProductImageInterface = {
                ...ProductImageEntity,
                id,
                priority: id,
                imgFile
            };
            set({
                imagesList: [...current, newImage]
            });
        }
    },
    removeImage: (id) => {
        const current = get().imagesList;
        set({
            imagesList: current.map((img) => 
                img.id === id ? { ...img, imgFile: null, img: "" } : img
            )
        });
    },
    resetImages: () => {
        set({
            imagesList: []
        });
    },
 })) 