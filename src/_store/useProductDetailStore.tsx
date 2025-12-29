"use client"
import { ProductDetailEntity, ProductDetailInterface } from "@/_data/entity/ProductDetailEntity";
import { create } from "zustand";


interface PropsInterface{
    data: ProductDetailInterface,
    detailList: ProductDetailInterface[],
    deletedDetailList: any[],
    setDetailList: (i: ProductDetailInterface[]) => void,
    errors: ProductDetailInterface,
    setDeletedDetail: (id: string | number) => void,
    resetDetailList: () => void,
    setError: (name: string, value: string) => void,
    addDetailList: (i: ProductDetailInterface) => void,
    setInputValue:  (e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void,
    editInputValue: (id: number | string, 
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void,
    removeData: (id: number | string) => void,
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: ProductDetailInterface },
}


export const useProductDetailStore = create<PropsInterface>((set, get) => ({ 
    data: ProductDetailEntity,
    deletedDetailList: [],
    detailList: [],
    errors: ProductDetailEntity,
    setDetailList: (i) => {
        set({
            detailList: i
        })
    },
    setDeletedDetail: (id) => {
        const list = get().deletedDetailList;
        set({
            deletedDetailList: [...list, id]
        })
    },
    setError: (name, value) => {
        const current = get().errors
        set({
            errors: {...current, [name]: value}
        })
    },
    addDetailList: (data) => {
        const current = get().detailList;
        const existingData = current.find((i) => i.id === data.id);
        
        if(existingData) {
            set({
                detailList: current.map((i) => i.id === data.id ? 
                    {...i, name: data.name, value: data.value} 
                    : i)
            });
        } else {
            set({
                detailList: [data, ...current],
                data: ProductDetailEntity
            });
        }
    },
    setInputValue: (e) => {
        const { name, value } = e.target;
        const current = get().data;
        const currentErrors = get().errors;
        set({
            data: {
                ...current,
                [name]: value
            },
            errors: currentErrors[name as keyof typeof currentErrors]
                ? { ...currentErrors, [name]: "" }
                : currentErrors
        });
    },
    editInputValue: (id, e) => {
        const { name, value } = e.target
        const current = get().detailList;
        set({
            detailList: current.map((i) => i.id === id ? 
                {...i, [name]: value} 
                : i)
        })
    },
    removeData: (id) => {
        const current = get().detailList;
        set({
            detailList: current.filter(i => i.id !== id)
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
            case "value":
                if(!value.trim()){
                    error = "Value is required.";
                } 
                break;
            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...ProductDetailEntity };
        let hasError = false;
        // Validate NAME
        const nameError = get().validateField("name", data.name);
        if (nameError) {
            errors.name = nameError;
            hasError = true;
        }
        // Validate NAME
        const valueError = get().validateField("value", data.value);
        if (valueError) {
            errors.value = valueError;
            hasError = true;
        }
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },
    resetDetailList: () => {
        set({
            detailList: [],
        })
    }
}))