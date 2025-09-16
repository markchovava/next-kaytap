"use client"

import { ButtonPrimary } from "@/_components/buttons/ButtonPrimary"
import TextAreaInput from "@/_components/forms/TextAreaInput"
import TextInput from "@/_components/forms/TextInput"
import SpacerQuaternary from "@/_components/spacers/SpacerQuaternary"
import SpacerTertiary from "@/_components/spacers/SpacerTertiary"
import TitlePrimary from "@/_components/titles/TitlePrimary"
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


export default function ContactForm({css="bg-white text-gray-800"}: {css?: string}) {
    const [data, setData] = useState<InputDataInterface>(InputData)
    
    const handleInput = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <form className={`${css} drop-shadow rounded-xl p-4`}>
            <TitlePrimary title='Our Contact Form' />
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
            <ButtonPrimary css=" text-white py-3 px-12" />
            <SpacerQuaternary />
        </form>
    )
}
