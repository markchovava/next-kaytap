"use client"
import { _profileViewAction } from "@/_api/actions/AuthActions";
import { AuthEntity, AuthInterface } from "@/_data/entity/AuthEntity";
import { create } from "zustand";


interface PropsInterface{
    preData: AuthInterface,
    data: AuthInterface,
    errors: AuthInterface,
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
    setData: (data: AuthInterface) => void,
    resetData: () => void,
    setIsSubmitting: (status: boolean) => void,
    setMessage: (str: string) => void,
    clearErrors: () => void
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: AuthInterface },
    getData: () => Promise<void>,
}


export const useProfileStore = create<PropsInterface>((set, get) => ({ 
    data: AuthEntity,
    preData: AuthEntity,
    errors: AuthEntity,
    message: "",
    isLoading: true,
    isSubmitting: false,
    toggleModal: false,
    setToggleModal: (i) => {
        set({
            toggleModal: i
        })
    },
    setIsSubmitting: (status) => {
        set({
            isSubmitting: status
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
            data: {
                id: i.id ?? "",
                name: i.name ?? "",
                phone: i.phone ?? "",
                isAdmin: i.isAdmin ?? "",
                roleLevel: i.roleLevel ?? "",
                email: i.email ?? "",
                code: i.code ?? "",
                password: i.password ?? "",
                passwordConfirm: i.passwordConfirm ?? "",
                updatedAt: i.updatedAt ?? "",
                createdAt: i.createdAt ?? ""
            },
            preData: i,
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
            data: AuthEntity
        })
    },
    clearErrors: () => {
        set({ errors: AuthEntity })
    },
    setMessage: (str) => {
        set({
            message: str
        })
    },
    validateField: (name, value) => {
        let error = ""
        switch(name){
            case "name":
                if(!value.trim()){
                    error = "Full Name is required.";
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
            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...AuthEntity };
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
        // Validate EMAILT4H
        const emailError = get().validateField("email", data.email);
        if (emailError) {
            errors.email = emailError;
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
            const res = await _profileViewAction();
            if (res && res.data ) {
                set({
                    data: res.data,
                    preData: res.data,
                    isLoading: false,
                });
            } else {
                set({
                    data: AuthEntity,
                    preData: AuthEntity,
                    isLoading: false,
                });
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            set({
                data: AuthEntity,
                preData: AuthEntity,
                isLoading: false,
            });
        }
    }
   
}));