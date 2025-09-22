"use client"

import RecordPrimary from "@/_components/records/RecordPrimary"
import RecordSecondary from "@/_components/records/RecordSecondary"
import SpacerTertiary from "@/_components/spacers/SpacerTertiary"
import StickerPrimary from "@/_components/stickers/StickerPrimary"
import TitlePrimary from "@/_components/titles/TitlePrimary"
import { Space } from "lucide-react"


export default function OrderViewPage() {
   
  return (
    <>
     <section className="mx-auto w-[92%]">
        <TitlePrimary title="Order Information" />
    </section>

    <SpacerTertiary />
    <section className="w-[92%] mx-auto py-6 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white drop-shadow rounded-xl">
        <section className="w-full px-6 flex flex-col items-start justify-start gap-3">
            <RecordPrimary label="Name:" value="Data goes here" />
            <RecordPrimary label="Email:" value="Data goes here" />
            <RecordPrimary label="Phone:" value="Data goes here" />
            <RecordPrimary label="Address:" value="Data goes here" />
            <RecordPrimary 
                label="Notes:" 
                value={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Totam ab debitis at mollitia eius tempora dignissimos architecto 
                    dolore! Harum, nostrum alias vitae quibusdam totam ad molestias 
                    quaerat dolor perspiciatis laudantium!`} />
        </section>
        <section className="w-full px-6 flex flex-col items-start justify-start gap-3">
            <RecordPrimary label="Order No.:" value="Data goes here" />
            <RecordPrimary label="Date:" value={`04 September 2025`} />
            <RecordPrimary label="Quantity:" value="20" />
            <RecordPrimary label="Payment Method:" value="Cash" />
            <RecordPrimary label="Total:" value="$30.00" />
            <RecordPrimary label="Status:" value={<StickerPrimary title="Processing" />} />
            
        </section>  
    </section>
        
    <SpacerTertiary />
    <section className="w-[92%] mx-auto p-6 bg-white drop-shadow rounded-xl">

        <section className="w-full lg:overflow-hidden overflow-scroll">
            <div className='lg:w-[100%] w-[60rem]'>
                {/* Header */}
                <section className="w-full bg-gray-300 font-bold text-lg border border-gray-400 flex items-center justify-start">
                    <div className="flex-5 border-r border-gray-400 px-2 py-1">NAME</div>
                    <div className="flex-3 border-r border-gray-400 px-2 py-1">QUANTITY</div>
                    <div className="flex-3 px-2 py-1 text-end">TOTAL</div>
                </section>
                {[...Array(10)].map((i, key) => (
                    <section key={key} className="w-full flex items-center justify-start border border-gray-300">
                        <div className="flex-5 border-r border-gray-300 px-2 py-1">Name</div>
                        <div className="flex-3 border-r border-gray-300 px-2 py-1">Quantity</div>
                        <div className="flex-3 px-2 py-1 text-end">Total</div>
                    </section>
                ))}    
            </div>
        </section>

    </section>
    </>
  )
}


