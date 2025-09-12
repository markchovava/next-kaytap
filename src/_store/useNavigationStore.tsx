"use client";

import { NavLinksInterface } from '@/_data/interface/NavLinksInterface';
import { NavLinksData } from '@/_data/sample/NavLinksData';
import { create } from 'zustand';

interface NavigationStoreInterface {
  navLinks: NavLinksInterface[];
  currentNavLink: NavLinksInterface | null;
  
  // Actions
  setCurrentNavLink: (navLinkId: number) => void;
  getNavLinkById: (navLinkId: number) => NavLinksInterface | undefined;
  setSelectedNavigation: (id: number) => void;

}


export const useNavigationStore = create<NavigationStoreInterface>((set, get) => ({

    navLinks: NavLinksData,
    currentNavLink: null,

    setCurrentNavLink: (id) => {
        const navLink = get().getNavLinkById(id);
        // Always update the navigation state to close others and handle dropdown
        get().setSelectedNavigation(id);
        set({ currentNavLink: navLink || null });
    },

    getNavLinkById: (id) => {
        return get().navLinks.find((i) => i.id === id);
    },

    setSelectedNavigation: (id) => {
        set({
            navLinks: get().navLinks.map((i) => {
                console.log('navLinks::', get().navLinks)
                if(i.id === id){
                    i.isOpen = !i.isOpen
                } else {
                    i.isOpen = false // Close all other items
                }
                return i
            })
        })
    }

   

}))
