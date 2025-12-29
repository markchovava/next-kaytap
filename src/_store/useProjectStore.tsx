"use client"

import { _projectListAction, _projectSearchAction, _projectViewAction } from "@/_api/actions/ProjectActions";
import { _projectPaginateAction } from "@/_api/actions/ProjectImageActions";
import { ProjectEntity, ProjectInterface } from "@/_data/entity/ProjectEntity"
import { MetaEntity, MetaInterface, MetaLinksEntity, MetaLinksInterface, ResponseInterface } from "@/_data/entity/ResponseEntity"
import { create } from "zustand";


interface PropsInterface{
    data: ProjectInterface,
    dataList: ProjectInterface[],
    meta: MetaInterface,
    links: MetaLinksInterface,
    preData: ProjectInterface,
    errors: ProjectInterface,
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
    setData: (i: ProjectInterface) => void,
    resetData: () => void,
    setIsSubmitting: (i: boolean) => void,
    setMessage: (i: string) => void,
    clearErrors: () => void,
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: ProjectInterface },
    getData: (i: number | string) => Promise<void>,
    getDataList: () => Promise<void>,
    getSearchDatalist: (search: string) => Promise<void>
    getPaginatedDatalist: (url: string) => Promise<void>
}


export const useProjectStore = create<PropsInterface>((set, get) => ({ 
    data: ProjectEntity,
    dataList: [],
    meta: MetaEntity,
    links: MetaLinksEntity,
    preData: ProjectEntity,
    errors: ProjectEntity,
    search: "",
    isSearching: false,
    message: "",
    isLoading: true,
    isSubmitting: false,
    toggleModal: false,
    setIsLoading: (i) => {
        set({ isLoading: i })
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
        set({ isSearching: i})
    },
    setToggleModal: (i) => {
        set({ toggleModal: i })
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
            preData: i,
            isLoading: false,
        })
    },
    resetData: () => {
        set({
            data: ProjectEntity,
        })
    },
    setIsSubmitting: (i) => {
        set({ isSubmitting: i })
    },
    setMessage: (i) => {
        set({ message: i })
    },
    clearErrors: () => {
        set({ errors: ProjectEntity })
    },
    validateField: (name, value) => {
        let error = ""
        switch(name){
            case "name":
                if(!value.trim()){
                    error = "Project name is required.";
                } 
                break;
            case "status":
                if(!value.trim()){
                    error = "Status is required.";
                }
                break;
            case "address":
                if(!value.trim()){
                    error = "Address is required.";
                }
                break;
            case "projectCategoryId":
                if(!value.trim()){
                    error = "Category is required.";
                }
                break;
            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...ProjectEntity };
        let hasError = false;
        // Validate NAME
        const nameError = get().validateField("name", data.name);
        if (nameError) {
            errors.name = nameError;
            hasError = true;
        } 
        // Validate STATUS
        const statusError = get().validateField("status", data.status);
        if (statusError) {
            errors.status = statusError;
            hasError = true;
        }
        // Validate NAME
        const addressError = get().validateField("address", data.address);
        if (addressError) {
            errors.address = addressError;
            hasError = true;
        } 
        // Validate PROJECT CATEGORY
        const projectCategoryIdError = get().validateField("projectCatergoryId", data.projectCategoryId.toString());
        if (projectCategoryIdError) {
            errors.projectCategoryId = projectCategoryIdError;
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
            const res = await _projectViewAction(i);
            if (res && res.data ) {
                set({
                    data: res.data,
                    preData: res.data,
                    isLoading: false,
                });
            } else {
                set({
                    data: ProjectEntity,
                    preData: ProjectEntity,
                    isLoading: false,
                });
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            set({
                data: ProjectEntity,
                preData: ProjectEntity,
                isLoading: false,
            });
        }
    },
    getDataList: async() => {
        set({ isLoading: true });
        try {
            const res = await _projectListAction();
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
            const res = await _projectSearchAction(search);
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
            const res = await _projectPaginateAction(url);
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