"use client"

import { ButtonPrimary } from "@/_components/buttons/ButtonPrimary"
import ButtonSecondary from "@/_components/buttons/ButtonSecondary"
import TextInput from "@/_components/forms/TextInput"
import Heading3 from "@/_components/headings/Heading3"
import Logo from "@/_components/Logo"
import SpacerQuaternary from "@/_components/spacers/SpacerQuaternary"
import Link from "next/link"
import { useState } from "react"


const InputData = {
    email: "",
    password: "",
    passwordConfirm: "",
}

interface InputDataInterface {
    email: string,
    password: string,
    passwordConfirm: string,
}

export default function RegisterPage() {
     const [data, setData] = useState<InputDataInterface>(InputData)
        
        const handleInput = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
            setData({ ...data, [e.target.name]: e.target.value })
        }
  return (
    <>
    <section>
        <div className="mx-auto lg:w-[50%] md:w-[80%] w-[92%] bg-white p-4 rounded-xl drop-shadow">
            <div className="flex flex-col items-center justify-center">
                <SpacerQuaternary />
                <div className="w-[20%]">
                    <Logo />
                </div>
                 <SpacerQuaternary />
                
                <hr className="w-[100%] border-b border-gray-100" />
                <SpacerQuaternary />

                <Heading3 title="Register" />
                
                <SpacerQuaternary />
                <TextInput 
                    label='Email' 
                    name='email' 
                    type="email"
                    value={data.email} 
                    placeholder='Enter your Email...'
                    onChange={handleInput} 
                />
                <SpacerQuaternary />
                <TextInput 
                    type="password"
                    label='Password:' 
                    name='password' 
                    value={data.email} 
                    placeholder='Enter your Password...'
                    onChange={handleInput} 
                />
                <SpacerQuaternary />
                <TextInput 
                    type="password"
                    label='Confirm Password:' 
                    name='passwordConfirm' 
                    value={data.email} 
                    placeholder='Enter your Password Confirmation...'
                    onChange={handleInput} 
                />
               
                <SpacerQuaternary />
                <SpacerQuaternary />
                <ButtonPrimary title="Submit" css="text-white px-12 py-3" />
                <SpacerQuaternary />
                <hr className="w-[100%] border-b border-gray-100" />
                <SpacerQuaternary />
                <Link href="/login">
                    <ButtonSecondary title="Login."  css="text-gray-700" />
                </Link>
                <SpacerQuaternary />
                
            </div>
        </div>
    </section>
    </>
  )
}
