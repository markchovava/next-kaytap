"use client"
import ButtonQuaternary from "@/_components/buttons/ButtonQuaternary";
import ImagePrimary from "@/_components/images/ImagePrimary";
import RecordPrimary from "@/_components/records/RecordPrimary";
import SpacerTertiary from "@/_components/spacers/SpacerTertiary";
import TitlePrimary from "@/_components/titles/TitlePrimary";
import { useEffect } from "react";
import ProjectEditModal from "./ProjectEditModal";
import LoaderPrimary from "@/_components/loaders/LoaderPrimary";
import { useProjectStore } from "@/_store/useProjectStore";
import { useProjectImageStore } from "@/_store/useProjectImageStore";
import StickerSecondary from "@/_components/stickers/StickerSecondary";
import { formatDate } from "@/_utils/formatDate";
import Image from "next/image";
import { baseURL } from "@/_api/baseURL";
import StickerPrimary from "@/_components/stickers/StickerPrimary";


const title = "View Project"

interface PropsInterface{
    id: string | number
    dbData: any
}
    

export default function ProjectViewPage({id, dbData}: PropsInterface) {
    const { 
          preData,
          data, 
          toggleModal,
          isLoading, 
          setData, 
          setToggleModal, 
        } = useProjectStore()

        const { setImages } = useProjectImageStore()
    
        useEffect(() => {
            if(dbData?.data) {
                setData(dbData?.data)
                setImages(dbData?.data.projectImages) 
            }
        }, [])

        const handleToggleModal = () => {
            setToggleModal(!toggleModal)
        }
    
    
        // Handle case where product is not found
        if (!preData) {
          return (
            <section>
              <div className="w-[92%] mx-auto bg-white drop-shadow px-6 py-12 rounded-xl">
                <TitlePrimary title='Product Not Found' />
                <p className="text-gray-600 mt-4">The product with ID {id} could not be found.</p>
              </div>
            </section>
          )
        }
    
        if(isLoading) {
          return (
            <LoaderPrimary />
          )
        }

     

    
    return (
       <>
            <section className='mx-auto w-[92%] flex items-center justify-end'>
               <ButtonQuaternary 
                   onClick={handleToggleModal}
                   title='Edit' 
                   css="px-8 py-3 text-white" 
               />
            </section>
              
            <SpacerTertiary />
            <section>
                 <div className="w-[92%] mx-auto bg-white drop-shadow px-6 py-12 rounded-xl">
                    
                    <TitlePrimary title={title} />
                    <SpacerTertiary />
                    
                    <div className='flex flex-col items-start justify-center gap-4'>
                        <ProjectImageView />
                        <RecordPrimary label="Name" value={preData?.name ?? "Not yet added"} />
                        <RecordPrimary label="Priority" value={preData?.priority ? preData?.priority.toString() : "Not yet added"} />
                        <RecordPrimary label="Status" value={<StickerPrimary title={preData?.status} />} />
                        <RecordPrimary label="Description" value={preData?.desc ?? "Not yet added"} />
                        <RecordPrimary label="Category" value={preData?.projectCategory?.name ?? "Not yet added"} />
                        <RecordPrimary label="Description" value={`${preData?.desc ?? "Not yet added"}`} />
                        <RecordPrimary label="Last Updated" value={`${preData?.updatedAt ? formatDate(preData?.updatedAt) : "Not yet added"}`} />
                     </div>
                 </div>
             </section>
           </>
    )
}



function ProjectImageView() {
  const { preData } = useProjectStore()
   
  return (
    preData.projectImages && preData.projectImages.length > 0 ?
    <div className='w-[100%] flex lg:flex-row flex-col text-lg lg:gap-2'>
        <div className='md:w-[16%] w-full font-light'>Image:</div>
        <div className='flex-1 grid lg:grid-cols-4 grid-cols-2 gap-3'>
          {preData?.projectImages?.map((i, key) => (
            <div key={key} 
                className='overflow-hidden w-[100%] rounded-lg'>
              <Image
                src={baseURL + i.img} 
                alt={i.img} 
                height={320} 
                width={400} 
                className='w-full h-[100%] object-cover' />
            </div>

          ))}
        </div>
    </div>
    : ""
  )
}