"use client";
import { ProductImageEntity, ProductImageInterface } from "@/_data/entity/ProductImageEntity";
import { create } from "zustand";



interface PropsInterface{
    imagesList: ProductImageInterface[]
    initList: ProductImageInterface[]
    deletedImagesList: any[]
    initializeImages: () => void,
    setDeletedImage: (id: number | string) => void,
    setImage: (
      id: number | string, 
      imgFile: File | null
    ) => void,
    setImages: (data: ProductImageInterface[]) => void,
    removeImage: (id: number | string) => void,
    resetImageFiles: () => void,

 
}


export const useProductImageStore = create<PropsInterface>((set, get) => ({
    imagesList: [],
    initList: [
        { ...ProductImageEntity, uid: 1, priority: 1, imgFile: null },
        { ...ProductImageEntity, uid: 2, priority: 2, imgFile: null },
        { ...ProductImageEntity, uid: 3, priority: 3, imgFile: null },
        { ...ProductImageEntity, uid: 4, priority: 4, imgFile: null },
    ],
    deletedImagesList: [],
    initializeImages: () => {
        set({
        imagesList: get().initList
        });
    }, 
    setDeletedImage: (id) => {
        const list = get().deletedImagesList
        set({
            deletedImagesList: [...list, id]
        })
    },  
    setImages: (data) => {
        const list = get().initList;
        
        // Merge incoming data with initList, preserving structure
        const editedList = list.map((initItem) => {
            // Find matching item from data by uid or priority
            const matchingData = data.find(
                (d) => d.priority === initItem.priority
            );
            
            // If we found matching data with an image, use it
            if (matchingData && matchingData.img) {
                return {
                    ...initItem,
                    id: matchingData.id,
                    img: matchingData.img,
                    priority: matchingData.priority
                };
            }
            
            // Otherwise keep the init item as is
            return initItem;
        });
        
        set({
            imagesList: editedList
        });
    },
    setImage: (uid, imgFile) => {
        const current = get().imagesList;
        const existingIndex = current.findIndex((img) => img.uid === uid); 
        if (existingIndex !== -1) {
            // Update existing image slot
            set({
                imagesList: current.map((img) => 
                    img.uid === uid ? { ...img, imgFile } : img
                )
            });
        } else {
            // Add new image slot (shouldn't happen if initialized properly)
            const newImage: ProductImageInterface = {
                ...ProductImageEntity,
                uid,
                priority: uid,
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
    resetImageFiles: () => {
        const list = get().initList
        set({
            imagesList: list
        });
    },
 })) 