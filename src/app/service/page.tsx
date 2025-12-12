import BannerPrimary from '@/_components/banners/BannerPrimary'
import React from 'react'
import SevicePage from './_components/SevicePage'
import { Metadata } from 'next';
import AppInfoData from "../../_data/sample/AppInfoData.json";
import BreadCrumbs from '@/_components/BreadCrumbs';
import { BannerData } from '@/_data/sample/BannerData';


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Our Services`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Our Services", href:"/service"},
]


export default function page() {
  return (
    <>
    <BannerPrimary 
        title={BannerData.service.title} 
        subtitle={BannerData.service.subtitle}  
        img={BannerData.service.img} 
    />
    
    <BreadCrumbs dbData={BreadCrumbsData} />

    <SevicePage />

    </>
  )
}
