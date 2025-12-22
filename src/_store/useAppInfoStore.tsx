"use client"
import { _appInfoViewAction } from "@/_api/actions/AppInfoActions";
import { AppInfoEntity, AppInfoInterface } from "@/_data/entity/AppInfoEntity";
import { create } from "zustand";


interface PropsInterface{
    data: AppInfoInterface,
    preData: AppInfoInterface,
    errors: AppInfoInterface,
    message: string,
    isLoading: boolean,
    isSubmitting: boolean,
    toggleModal: boolean,
    setToggleModal: (i: boolean) => void,
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void,
    setError: (name: string, value: string) => void,
    setData: (data: AppInfoInterface) => void,
    resetData: () => void,
    setIsSubmitting: (i: boolean) => void,
    setMessage: (str: string) => void,
    clearErrors: () => void
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: AppInfoInterface },
    getData: () => Promise<void>
}


export const useAppInfoStore = create<PropsInterface>((set, get) => ({ 
    data: AppInfoEntity,
    preData: AppInfoEntity,
    errors: AppInfoEntity,
    message: "",
    isLoading: true,
    isSubmitting: false,
    toggleModal: false,
    setToggleModal: (i) => {
        set({
            toggleModal: i
        })
    },
    setIsSubmitting: (i) => {
        set({
            isSubmitting: i
        })
    },
    setInputValue: (e) => {
        const { name, value } = e.target;
        const currentData = get().data;
        const currentErrors = get().errors;
        set({
            data: {
                ...currentData,
                [name]: value
            },
            // Clear error for this field if it exists
            errors: currentErrors[name as keyof typeof currentErrors]
                ? { ...currentErrors, [name]: "" }
                : currentErrors
        });
    },
    setData: (i) => {
        set({
            data: i ? {
                id: i.id ?? "",
                userId: i.userId ?? "",
                name: i.name ?? "",
                phone: i.phone ?? "",
                email: i.email ?? "",
                website: i.website ?? "",
                address: i.address ?? "",
                desc: i.desc ?? "",
                whatsapp: i.whatsapp ?? "",
                facebook: i.facebook ?? "",
                instagram: i.instagram ?? "",
                tiktok: i.tiktok ?? "",
                linkedIn: i.linkedIn ?? "",
                twitter: i.twitter ?? "",
                createdAt: i.createdAt ?? "",
                updatedAt: i.updatedAt ?? "",
            } : AppInfoEntity,
            preData: i ? {
                id: i.id ?? "",
                userId: i.userId ?? "",
                name: i.name ?? "",
                phone: i.phone ?? "",
                email: i.email ?? "",
                website: i.website ?? "",
                address: i.address ?? "",
                desc: i.desc ?? "",
                whatsapp: i.whatsapp ?? "",
                facebook: i.facebook ?? "",
                instagram: i.instagram ?? "",
                tiktok: i.tiktok ?? "",
                linkedIn: i.linkedIn ?? "",
                twitter: i.twitter ?? "",
                createdAt: i.createdAt ?? "",
                updatedAt: i.updatedAt ?? "",
            } : AppInfoEntity,
            isLoading: false,
        })
    },
    setError: (name, value) => {
        const currentErrors = get().errors;
        set({
            errors: { ...currentErrors, [name]: value }
        })
    },
    resetData: () => {
        set({
            data: AppInfoEntity,
            preData: AppInfoEntity,
        })
    },
    setMessage: (i) => {
        set({
            message: i
        })
    },
    clearErrors: () => {
        set({
            errors: AppInfoEntity,
        })
    },
    validateField: (name, value) => {
        let error = ""
        switch(name){
            case "name":
                if(!value.trim()){
                    error = "Name is required.";
                } 
                break;
            case "email":
                if(!value.trim()){
                    error = "Email is required.";
                } 
                break;
            case "phone":
                if (!value.trim()) {
                    error = "Phone Number is required.";
                }
                break;
            case "website":
                if (!value.trim()) {
                    error = "Website is required.";
                }
                break;
            case "address":
                if (!value.trim()) {
                    error = "Address is required.";
                }
                break;
            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...AppInfoEntity };
        let hasError = false;
        // Validate NAME
        const nameError = get().validateField("name", data.name);
        if (nameError) {
            errors.name = nameError;
            hasError = true;
        }
        // Validate PHONE
        const phoneError = get().validateField("phone", data.phone);
        if (phoneError) {
            errors.phone = phoneError;
            hasError = true;
        }
        // Validate EMAIL
        const emailError = get().validateField("email", data.email);
        if (emailError) {
            errors.email = emailError;
            hasError = true;
        }
        // Validate WEBSITE
        const websiteError = get().validateField("website", data.website);
        if (websiteError) {
            errors.website = websiteError;
            hasError = true;
        }
        // Validate ADDRESS
        const addressError = get().validateField("address", data.address);
        if (addressError) {
            errors.address = addressError;
            hasError = true;
        }
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },
    getData: async () => {
        try {
            const res = await _appInfoViewAction();
            if (res && res.data ) {
                get().setData(res.data);
            } else {
                set({
                    data: AppInfoEntity,
                    preData: AppInfoEntity,
                    isLoading: false,
                });
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            set({
                data: AppInfoEntity,
                preData: AppInfoEntity,
                isLoading: false,
            });
        }
    }

}))