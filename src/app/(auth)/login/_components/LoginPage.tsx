"use client"
import { loginAction } from "@/_api/actions/AuthActions"
import ButtonSecondary from "@/_components/buttons/ButtonSecondary"
import { ButtonSubmit } from "@/_components/buttons/ButtonSubmit"
import TextInput from "@/_components/forms/TextInput"
import Heading3 from "@/_components/headings/Heading3"
import Logo from "@/_components/Logo"
import SpacerQuaternary from "@/_components/spacers/SpacerQuaternary"
import { AuthTokenCookieName, setTheCookie, UserCookieName } from "@/_cookie/CookiesClient"
import { useAuthStore } from "@/_store/useAuthStore"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"


const title = "Login"


export default function LoginPage() {
    const router = useRouter();
    const { 
        data, 
        errors, 
        isSubmitting, 
        clearErrors, 
        validateLoginForm, 
        setIsSubmitting, 
        setInputValue,
        resetData,
        setError,
    } = useAuthStore();
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        clearErrors();
        e.preventDefault();
        // Clear previous errors
        clearErrors();
        // Validate form using store
        const validation = validateLoginForm();
        if (!validation.isValid) {
            // Show the first error as toast
            const firstError = validation.errors.email || validation.errors.password
            toast.warn(firstError);
            return;
        }
        setIsSubmitting(true);
        const formData = {
            email: data.email,
            password: data.password,
        }
        try {
            const res = await loginAction(formData);
            //console.log('res', res)
            const {status, message, authToken, data} = res
            switch(status){
                case 0:
                    toast.warn(message);
                    setError('email', message)
                    setIsSubmitting(false);
                    return
                case 1:
                    await setTheCookie(AuthTokenCookieName, authToken)
                    await setTheCookie(UserCookieName, data)
                    router.push('/admin')
                    toast.success(message);
                    clearErrors();
                    resetData();
                    setIsSubmitting(false);
                    return
                case 2:
                    toast.warn(message);
                    setError('password', message)
                    setIsSubmitting(false);
                    return
                default:
                    toast.success('Something went wrong, please try again.');
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

                <form onSubmit={handleSubmit} className="w-full">
                    <Heading3 title={title} css="text-center" />
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
                    <Link href="#" className="w-full">
                        <p className=" w-[100%] font-light text-start font-sm hover:underline text-blue-800">
                            Forgot password?
                        </p>
                    </Link>
                    <SpacerQuaternary />
                    <div className="w-full flex items-center justify-center">
                        <ButtonSubmit 
                            title="Submit" 
                            isSubmit={isSubmitting} 
                            css="text-white px-12 py-3" />
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
