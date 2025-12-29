"use client"
import { _projectCategoryListAction, _projectCategoryPaginateAction, _projectCategorySearchAction, _projectCategoryViewAction } from "@/_api/actions/ProjectCategoryActions";
import { MetaEntity, MetaInterface, MetaLinksEntity, MetaLinksInterface, ResponseInterface } from "@/_data/entity/ResponseEntity";
import { ProjectCategoryEntity, ProjectCategoryInterface } from "@/_data/entity/ProjectCategoryEntity";
import { create } from "zustand";


interface PropsInterface{
    data: ProjectCategoryInterface,
    dataList: ProjectCategoryInterface[],
    meta: MetaInterface,
    links: MetaLinksInterface,
    preData: ProjectCategoryInterface,
    errors: ProjectCategoryInterface,
    search: string,
    isSearching: boolean,
    message: string,
    isLoading: boolean,
    isSubmitting: boolean,
    toggleModal: boolean,
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
    setData: (i: ProjectCategoryInterface) => void,
    resetData: () => void,
    setIsSubmitting: (i: boolean) => void,
    setMessage: (i: string) => void,
    clearErrors: () => void,
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: ProjectCategoryInterface },
    getData: (i: number | string) => Promise<void>,
    getDataList: () => Promise<void>,
    getSearchDatalist: (search: string) => Promise<void>
    getPaginatedDatalist: (url: string) => Promise<void>
}
 

export const useProjectCategoryStore = create<PropsInterface>((set, get) => ({ 
    data: ProjectCategoryEntity,
    dataList: [],
    meta: MetaEntity,
    links: MetaLinksEntity,
    preData: ProjectCategoryEntity,
    errors: ProjectCategoryEntity,
    search: '',
    isSearching: false,
    message: '',
    isLoading:true,
    isSubmitting: false,
    toggleModal: false,
    setValue: (name, value) => {
        const currentData = get().data;
        const currentErrors = get().errors;
        set({ 
            data: {...currentData, [name]: value},
            // Clear error for this field if it exists
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
            // Clear error for this field if it exists
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
            data: ProjectCategoryEntity,
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
            errors: ProjectCategoryEntity
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

            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...ProjectCategoryEntity };
        let hasError = false;
        // Validate NAME
        const nameError = get().validateField("name", data.name);
        if (nameError) {
            errors.name = nameError;
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
            const res = await _projectCategoryViewAction(i);
            if (res && res.data ) {
                set({
                    data: res.data,
                    preData: res.data,
                    isLoading: false,
                });
            } else {
                set({
                    data: ProjectCategoryEntity,
                    preData: ProjectCategoryEntity,
                    isLoading: false,
                });
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            set({
                data: ProjectCategoryEntity,
                preData: ProjectCategoryEntity,
                isLoading: false,
            });
        }
    },
    getDataList: async() => {
        set({ isLoading: true });
        try {
            const res = await _projectCategoryListAction();
            // Check if response has the expected structure
            if (res && res.data && res.meta && res.links) {
                set({
                    dataList: res.data,
                    meta: res.meta,
                    links: res.links,
                    isLoading: false,
                });
            } else {
                // Fallback if structure is different
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
            const res = await _projectCategorySearchAction(search);
            // Check if response has the expected structure
            if (res && res.data && res.meta && res.links) {
                set({
                    dataList: res.data,
                    meta: res.meta,
                    links: res.links,
                    isSearching: false,
                });
            } else {
                // Fallback if structure is different
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
            const res = await _projectCategoryPaginateAction(url);
            // Check if response has the expected structure
            if (res && res.data && res.meta && res.links) {
                set({
                    dataList: res.data,
                    meta: res.meta,
                    links: res.links,
                    isLoading: false,
                });
            } else {
                // Fallback if structure is different
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