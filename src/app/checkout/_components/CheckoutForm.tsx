"use client"

import TextAreaInput from "@/_components/forms/TextAreaInput"
import TextInput from "@/_components/forms/TextInput"
import Heading4 from "@/_components/headings/Heading4"
import SpacerQuaternary from "@/_components/spacers/SpacerQuaternary"
import { useState } from "react"



const InputData = {
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
}

interface InputDataInterface {
    name: string,
    email: string,
    phone: string,
    address: string,
    notes: string,
}

export default function CheckoutForm() {
    const [data, setData] = useState<InputDataInterface>(InputData)

    const handleInput = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
            setData({ ...data, [e.target.name]: e.target.value })
    }
  return (
    <>
        <TextInput 
            label='Name' 
            name='name' 
            value={data.name} 
            placeholder='Enter your Full Name...'
            onChange={handleInput} 
        />
        <SpacerQuaternary />
        <TextInput 
            label='Email' 
            name='email' 
            value={data.email} 
            placeholder='Enter your email...'
            onChange={handleInput} 
        />
        <SpacerQuaternary />
        <TextInput 
            label='Phone' 
            name='phone' 
            value={data.phone} 
            placeholder='Enter your Phone...'
            onChange={handleInput} 
        />
        <SpacerQuaternary />
        <TextAreaInput 
            label='Address' 
            name='address' 
            value={data.address} 
            placeholder='Enter your Address...'
            onChange={handleInput} 
        />

        <SpacerQuaternary />
        <div className="border-b border-gray-300" />

        <SpacerQuaternary />
        <Heading4 
            title="Write any special message or note on the Order." 
            css="text-gray-800" />

        <SpacerQuaternary />
        <TextAreaInput 
            label='Notes:' 
            name='notes' 
            value={data.notes} 
            placeholder='Enter your Notes...'
            onChange={handleInput} 
        />
        <SpacerQuaternary />
        
    </>
  )
}
