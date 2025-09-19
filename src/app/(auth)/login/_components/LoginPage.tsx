"use client"

import ButtonSecondary from "@/_components/buttons/ButtonSecondary"
import { ButtonSubmit } from "@/_components/buttons/ButtonSubmit"
import TextInput from "@/_components/forms/TextInput"
import Heading3 from "@/_components/headings/Heading3"
import Logo from "@/_components/Logo"
import SpacerQuaternary from "@/_components/spacers/SpacerQuaternary"
import Link from "next/link"
import { useState } from "react"
import { toast } from "react-toastify"


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

export default function LoginPage() {
    const [data, setData] = useState<InputDataInterface>(InputData)
    const [isSubmit, setIsSubmit] = useState<boolean>(false)
        
    const handleInput = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault();
            setIsSubmit(true)
            
            try {
                // Add your form submission logic here
                console.log('Form data:', data);
                
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                toast.success('Profile updated successfully!');
            } catch (error) {
                toast.error('Failed to update profile. Please try again.');
                console.error('Form submission error:', error);
            } finally {
                setIsSubmit(false);
            }
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

                <form onSubmit={handleSubmit} className="w-full">
                    <Heading3 title="Login" css="text-center" />
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
                        label='Password' 
                        name='password' 
                        value={data.email} 
                        placeholder='Enter your Password...'
                        onChange={handleInput} 
                    />
                    <Link href="#" className="w-full">
                        <p className=" w-[100%] font-light text-start font-sm hover:underline text-blue-800">
                            Forgot password?
                        </p>
                    </Link>
                    <SpacerQuaternary />
                    <div className="flex items-center justify-center">
                        <ButtonSubmit title="Submit" isSubmit={isSubmit} css="text-white px-12 py-3" />
                    </div>
                    <SpacerQuaternary />
                </form>

                <hr className="w-[100%] border-b border-gray-100" />
                <SpacerQuaternary />
                <Link href="/register">
                    <ButtonSecondary title="Sign Up."  css="text-gray-700" />
                </Link>
                <SpacerQuaternary />
                
            </div>
        </div>
    </section>
    </>
  )
}
