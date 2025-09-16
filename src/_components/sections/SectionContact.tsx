"use client"

import ContactForm from "@/app/contact/_components/ContactForm"
import SpacerPrimary from "../spacers/SpacerPrimary"
import TitlePrimary from "../titles/TitlePrimary"
import SpacerTertiary from "../spacers/SpacerTertiary"
import TextInput from "../forms/TextInput"
import SpacerQuaternary from "../spacers/SpacerQuaternary"
import TextAreaInput from "../forms/TextAreaInput"
import { ButtonPrimary } from "../buttons/ButtonPrimary"
import { useState } from "react"


const InputData = {
    name: "",
    email: "",
    message: "",
}

interface InputDataInterface {
    name: string,
    email: string,
    message: string,
}


export default function SectionContact() {
     const [data, setData] = useState<InputDataInterface>(InputData)
        
    const handleInput = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }


  return (
    <section className="bg-slate-900 text-gray-200">
        <SpacerPrimary />
        <div className="mx-auto w-[92%] grid grid-cols-7 gap-6">
            <div className="col-span-4">
                <form className={` drop-shadow rounded-xl p-4`}>
                            <TitlePrimary title='Our Contact Form' titleCss="text-gray-200" />
                            <SpacerTertiary />
                            <TextInput 
                                label='Name' 
                                name='name' 
                                value={data.name} 
                                placeholder='Enter your name'
                                onChange={handleInput} 
                            />
                            <SpacerQuaternary />
                            <TextInput 
                                label='Email' 
                                name='email' 
                                value={data.email} 
                                placeholder='Enter your email'
                                onChange={handleInput} 
                            />
                            <SpacerQuaternary />
                            <TextAreaInput 
                                label='Message' 
                                name='message' 
                                value={data.message} 
                                placeholder='Enter your message'
                                onChange={handleInput} 
                            />
                            <SpacerQuaternary />
                            <ButtonPrimary title="Submit" css=" text-white py-3 px-12" />
                            <SpacerQuaternary />
                        </form>
            </div>
            <div className="col-span-3 bg-gray-400 "></div>
        </div>
         <SpacerPrimary />
    </section>
  )
}
