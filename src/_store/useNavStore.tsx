"use client"

import { NavDataEntity, NavDataInterface } from "@/_data/entity/NavDataEntity";
import { NavLinksData } from "@/_data/sample/NavLinksData";
import { create } from "zustand";


interface PropsInterface{
    dataList: NavDataInterface[],
    data: NavDataInterface,
    search: string,
    isSearchOpen: boolean,
    isSearching: boolean,
    isCartOpen: boolean,
    toggleNav: boolean,
    setToggleNav: (i: boolean) => void,
    setIsCartOpen: (i: boolean) => void,
    setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setIsSearching: (i: boolean) => void,
    setIsSearchOpen: (i: boolean) => void,
    setOpenById: (i: number | string) => void,
    setData: (i: NavDataInterface) => void,
    setDataList: (i: NavDataInterface[]) => void,
}

export const useNavStore = create<PropsInterface>((set, get) => ({
    dataList: NavLinksData,
    data: NavDataEntity,
    search: "",
    isSearching: false,
    isCartOpen: false,
    isSearchOpen: false,
    toggleNav: false,
    setToggleNav: (i) => {
        set({ toggleNav: i })
    },
    setIsCartOpen: (i) => {
        set({ isCartOpen: i })
    },
    setSearch: (e) => {
        const { value } = e.target;
        set({ search: value })
    },
    setIsSearching: (i) => {
        set({ isSearching: i })
    },
    setIsSearchOpen: (i) => {
        set({ isSearchOpen: i })
    },
    setData: (i) => {
        set({ data: i })
    },
    setOpenById: (id) => {
        const list = get().dataList;
        const currentData = list.map(i => (
            i.id === id ? {...i, isOpen: !i.isOpen} : i
        ))
        set({ 
            dataList: currentData
        })
    },
    setDataList: (i) => {
        set({ 
            dataList: i 
        })
    }
}))