"use client"
import { _productListAction, _productPaginateAction, _productSearchAction, _productViewAction } from "@/_api/actions/ProductActions";
import { MetaEntity, MetaInterface, MetaLinksEntity, MetaLinksInterface, ResponseInterface } from "@/_data/entity/ResponseEntity";
import { ProductEntity, ProductInterface } from "@/_data/entity/ProductEntity";
import { create } from "zustand";
import { ProductImageEntity, ProductImageInterface } from "@/_data/entity/ProductImageEntity";
import { ProductDetailEntity, ProductDetailInterface } from "@/_data/entity/ProductDetailEntity";


interface PropsInterface{
    data: ProductInterface,
    dataList: ProductInterface[],
    meta: MetaInterface,
    links: MetaLinksInterface,
    preData: ProductInterface,
    errors: ProductInterface,
    search: string,
    isSearching: boolean,
    message: string,
    isLoading: boolean,
    isSubmitting: boolean,
    toggleModal: boolean,
    toggleModal2: boolean,
    setToggleModal2: (i: boolean) => void,
    setIsLoading: (i: boolean) => void,
    setDataList: (i: ResponseInterface) => void
    setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setIsSearching: (i: boolean) => void,
    setToggleModal: (i: boolean) => void,
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void,
    setError: (name: string, value: string) => void,
    setValue: (name: string, value: string | number) => void,
    setData: (i: ProductInterface) => void,
    resetData: () => void,
    setIsSubmitting: (i: boolean) => void,
    setMessage: (i: string) => void,
    clearErrors: () => void,
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: ProductInterface },
    getData: (i: number | string) => Promise<void>,
    getDataList: () => Promise<void>,
    getSearchDatalist: (search: string) => Promise<void>
    getPaginatedDatalist: (url: string) => Promise<void>
}
 

export const useProductStore = create<PropsInterface>((set, get) => ({ 
    data: ProductEntity,
    images: [],
    dataList: [],
    meta: MetaEntity,
    links: MetaLinksEntity,
    preData: ProductEntity,
    errors: ProductEntity,
    search: '',
    isSearching: false,
    message: '',
    isLoading:true,
    isSubmitting: false,
    toggleModal: false,
    toggleModal2: false,
    setToggleModal2: (i) => {
        set({
            toggleModal2: i
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
    setIsLoading: (i) => {
        set({
            isLoading: i
        })
    },
    setDataList: (i) => {
        const {data, links, meta} = i
        set({
            dataList: data,
            meta: meta,
            links: links,
            isLoading: false,
        })
    },   
    setSearch: (e) => {
        const { value } = e.target;
        set({
            search: value
        })
    },   
    setIsSearching: (i) => {
        set({
            isSearching: i
        })
    },
    setToggleModal: (i) => {
        set({
            toggleModal: i
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
    setData: (i) => {
        set({
            data: i,
            preData: i,
            isLoading: false,
        })
    },
    resetData: () => {
        set({
            data: ProductEntity,
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
            errors: ProductEntity
        })
    }, 
    validateField: (name, value) => {
        let error = ""
        switch(name){
            case "name":
                if(!value.trim()){
                    error = "Product name is required.";
                } 
                break;
            case "price":
                if(!value || parseFloat(value as string) <= 0){
                    error = "Valid price is required.";
                }
                break;
            case "quantity":
                if(!value || parseInt(value as string) < 0){
                    error = "Valid quantity is required.";
                }
                break;
            case "status":
                if(!value) {
                    error = "Status is required.";
                }
                break;
            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...ProductEntity };
        let hasError = false;
        // Validate NAME
        const nameError = get().validateField("name", data.name);
        if (nameError) {
            errors.name = nameError;
            hasError = true;
        } 
        // Validate PRICE
        const priceError = get().validateField("price", data.price.toString());
        if (priceError) {
            errors.price = priceError;
            hasError = true;
        }
        // Validate QUANTITY
        const quantityError = get().validateField("quantity", data.quantity.toString());
        if (quantityError) {
            errors.quantity = quantityError;
            hasError = true;
        }
        // Validate STATUS
        const statusError = get().validateField("status", data.status);
        if (statusError) {
            errors.status = statusError;
            hasError = true;
        }
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },
    getData: async (i) => {
        try {
            const res = await _productViewAction(i);
            if (res && res.data ) {
                set({
                    data: res.data,
                    preData: res.data,
                    isLoading: false,
                });
            } else {
                set({
                    data: ProductEntity,
                    preData: ProductEntity,
                    isLoading: false,
                });
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            set({
                data: ProductEntity,
                preData: ProductEntity,
                isLoading: false,
            });
        }
    },
    getDataList: async() => {
        set({ isLoading: true });
        try {
            const res = await _productListAction();
            if (res && res.data && res.meta && res.links) {
                set({
                    dataList: res.data,
                    meta: res.meta,
                    links: res.links,
                    isLoading: false,
                });
            } else {
                set({
                    dataList: Array.isArray(res) ? res : res.data || [],
                    meta: res.meta || MetaEntity,
                    links: res.links || MetaLinksEntity,
                    isLoading: false,
                });
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            set({
                dataList: [],
                meta: MetaEntity,
                links: MetaLinksEntity,
                isLoading: false,
            });
        }
    },  
    getSearchDatalist: async (search) => {
        set({ isSearching: true });
        try {
            const res = await _productSearchAction(search);
            if (res && res.data && res.meta && res.links) {
                set({
                    dataList: res.data,
                    meta: res.meta,
                    links: res.links,
                    isSearching: false,
                });
            } else {
                set({
                    dataList: Array.isArray(res) ? res : res.data || [],
                    meta: res.meta || MetaEntity,
                    links: res.links || MetaLinksEntity,
                    isSearching: false,
                });
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            set({
                dataList: [],
                meta: MetaEntity,
                links: MetaLinksEntity,
                isSearching: false,
            });
        }
    },  
    getPaginatedDatalist: async (url: string) => {
        set({ isLoading: true });
        try {
            const res = await _productPaginateAction(url);
            if (res && res.data && res.meta && res.links) {
                set({
                    dataList: res.data,
                    meta: res.meta,
                    links: res.links,
                    isLoading: false,
                });
            } else {
                set({
                    dataList: Array.isArray(res) ? res : res.data || [],
                    meta: res.meta || MetaEntity,
                    links: res.links || MetaLinksEntity,
                    isLoading: false,
                });
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            set({
                dataList: [],
                meta: MetaEntity,
                links: MetaLinksEntity,
                isLoading: false,
            });
        }
    },
}))