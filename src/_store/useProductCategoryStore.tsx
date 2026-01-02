"use client"

import { CategoryEntity, CategoryInterface } from "@/_data/entity/CategoryEntity"
import { ProductCategoryEntity, ProductCategoryInterface } from "@/_data/entity/ProductCategoryEntity"
import { create } from "zustand"



interface PropsInterface{
    data: ProductCategoryInterface
    selectedCategory: CategoryInterface
    dataList: ProductCategoryInterface[]
    categoryList: CategoryInterface[]
    dbProductCategoryList: ProductCategoryInterface[]
    errors: ProductCategoryInterface
    isSubmitting: boolean,
    message: string
    deletedCategoryList: number[]
    isLoading: boolean
    addDeletedCategoryList: (id: string | number) => void,
    removeDbProductCategoryList: (id: string | number) => void,
    setDbProductCategoryList: (i: ProductCategoryInterface[]) => void,
    setSelectedCategory: (i: CategoryInterface) => void
    setCategoryList: (i: CategoryInterface[]) => void,
    addCategoryList: (i: CategoryInterface) => void,
    removeCategoryList: (i: string | number) => void,
    setDataListAll: (i: ProductCategoryInterface[]) => void
    addDataList: (i: ProductCategoryInterface) => void
    removeDataList: (i: string | number) => void
    setData: (i: ProductCategoryInterface) => void
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void
    setError: (name: string, value: string) => void
    setValue: (name: string, value: string | number) => void
    resetData: () => void
    setIsSubmitting: (i: boolean) => void
    setMessage: (i: string) => void
    clearErrors: () => void
    setIsLoading: (i: boolean) => void
    validateField: (name: string, value: string) => string
    validateForm: () => { isValid: boolean; errors: ProductCategoryInterface }
}


export const useProductCategoryStore = create<PropsInterface>((set, get) => ({ 
    data: ProductCategoryEntity,
    dataList: [],
    categoryList: [],
    dbProductCategoryList: [],
    selectedCategory: CategoryEntity,
    errors: ProductCategoryEntity,
    deletedCategoryList: [],
    isSubmitting: false,
    message: "",
    isLoading: true,
    removeDbProductCategoryList: (id) => {
        const list = get().dbProductCategoryList
        set({
            dbProductCategoryList: list.filter(i => Number(i.id) !== Number(id))
        })
    },
    addDeletedCategoryList: (id) => {
        const list = get().deletedCategoryList
        const matchingList = list.find(i => Number(i) === Number(id))
        if(!matchingList){
            set({
                deletedCategoryList: [...list, Number(id)]
            })
        } else {
            set({
                deletedCategoryList: list
            })
        }  
    },
    setDbProductCategoryList: (i) => {
        set({
            dbProductCategoryList: i
        })
    },
    setSelectedCategory: (i) => {
        set({
            selectedCategory: i
        })
    },
    resetSelectedCategory: () => {
        set({
            selectedCategory: CategoryEntity
        })
    },
    addCategoryList: (i) => {
        const list = get().categoryList
        const matchingList = list.find(a => Number(a.id) === Number(i.id))
        if(matchingList) {
            set({
                categoryList: list
            })
        } else {
            set({
                categoryList: [i, ...list]
            })
        }
    },
    removeCategoryList: (id) => {
        const list = get().categoryList
        const updatedList = list.filter(a => id !== a.id)
        set({
            categoryList: updatedList
        })
    },
    setCategoryList: (i) => {
        set({
            categoryList: i
        })
    },
    addDataList: (i) => {
        const list = get().dataList
        const matchingList = list.find(a => Number(a.id) === Number(i.id))
        if(matchingList) {
            set({
                dataList: list
            })
        } else {
            set({
                dataList: [i, ...list]
            })
        }
    },
    removeDataList: (id) => {
        const list = get().dataList
        const updatedList = list.filter(a => id !== a.id)
        set({
            dataList: updatedList
        })
    },
    setDataListAll: (i) => {
        const list = get().dataList
        set({
            dataList: [...i, ...list],
            isLoading: false,
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
            errors: currentErrors[name as keyof typeof currentErrors]
                ? { ...currentErrors, [name]: "" }
                : currentErrors
        });
    },
    setError: (name, value) => {
        const currentErrors = get().errors;
        set({
            errors: { ...currentErrors, [name]: value }
        })
    },
    setValue: (name, value) => {
        const currentData = get().data;
        const currentErrors = get().errors;
        set({ 
            data: {...currentData, [name]: value},
            errors: currentErrors[name as keyof typeof currentErrors]
                ? { ...currentErrors, [name]: "" }
                : currentErrors
        })
    },
    setData: (i) => {
        set({
            data: i,
            isLoading: false,
        })
    },
    resetData: () => {
        set({
            data: ProductCategoryEntity,
        })
    },
    setIsSubmitting: (i) => {
        set({
            isSubmitting: i,
        })
    },
    setMessage: (i) => {
        set({
            message: i
        })
    }, 
    clearErrors: () => {
        set({
            errors: ProductCategoryEntity
        })
    }, 
    setIsLoading: (i) => {
        set({
            isLoading: i
        })
    },
    validateField: (name, value) => {
        let error = ""
        switch(name){
            case "categoryId":
                if(!value.trim()){
                    error = "Category Name is required.";
                } 
                break;
            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...ProductCategoryEntity };
        let hasError = false;
        // Validate NAME
        const categoryIdError = get().validateField("categoryId", data.categoryId.toString());
        if (categoryIdError) {
            errors.categoryId = categoryIdError;
            hasError = true;
        } 
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },

}))


