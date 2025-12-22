"use client"

import { registerAction } from "@/_api/actions/AuthActions"
import { ButtonPrimary } from "@/_components/buttons/ButtonPrimary"
import ButtonSecondary from "@/_components/buttons/ButtonSecondary"
import TextInput from "@/_components/forms/TextInput"
import Heading3 from "@/_components/headings/Heading3"
import Logo from "@/_components/Logo"
import SpacerQuaternary from "@/_components/spacers/SpacerQuaternary"
import { useAuthStore } from "@/_store/useAuthStore"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"



const title = "Register"


export default function RegisterPage() {
    const router = useRouter();
    const { 
        data, 
        errors, 
        isSubmitting, 
        clearErrors, 
        validateRegisterForm, 
        setIsSubmitting, 
        setData, 
        setInputValue,
        resetData,
    } = useAuthStore();


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        clearErrors();
        e.preventDefault();
        // Clear previous errors
        clearErrors();
        // Validate form using store
        const validation = validateRegisterForm();
        if (!validation.isValid) {
            // Show the first error as toast
            const firstError = validation.errors.email || 
                validation.errors.password ||
                validation.errors.passwordConfirm
            toast.warn(firstError);
            return;
        }
        setIsSubmitting(true);
        const formData = {
            email: data.email,
            password: data.password,
        }
        try {
            const res = await registerAction(formData);
            //console.log('res', res)
            const {message, status} = res;
            switch(status){
                case 1:
                    toast.success(message);
                    clearErrors();
                    resetData();
                    router.push('/login')
                    setIsSubmitting(false);
                    return
                case 0:
                    toast.warn(message);
                    setIsSubmitting(false);
                    return
                default:
                    toast.warn("Something went wrong, please try again.")
                    setIsSubmitting(false);
                    return
            }
        } catch (error) {
            toast.error('Failed to save data. Please try again.');
            console.error('Form submission error:', error);
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

                <Heading3 title={title} />
                
                <form onSubmit={handleSubmit} className="flex-1 w-[100%]">
                    <SpacerQuaternary />
                    <TextInput 
                        label='Email' 
                        name='email' 
                        type="email"
                        value={data.email} 
                        placeholder='Enter your Email...'
                        onChange={setInputValue} 
                        error={errors.email}
                    />
                    <SpacerQuaternary />
                    <TextInput 
                        type="password"
                        label='Password' 
                        name='password' 
                        value={data.password} 
                        placeholder='Enter your Password...'
                        onChange={setInputValue} 
                        error={errors.password}
                    />
                    <SpacerQuaternary />
                    <TextInput 
                        type="password"
                        label='Confirm Password' 
                        name='passwordConfirm' 
                        value={data.passwordConfirm} 
                        placeholder='Enter your Password Confirmation...'
                        onChange={setInputValue} 
                        error={errors.passwordConfirm}
                    />
                    <SpacerQuaternary />
                    <SpacerQuaternary />

                    <div className="flex items-center justify-center w-full">
                        <ButtonPrimary 
                            status={isSubmitting}
                            title="Submit" 
                            css="text-white px-12 py-3" />
                    </div>
                </form>
               
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
