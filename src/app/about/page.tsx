import Heading1 from '@/_components/headings/Heading1'
import React from 'react'
import AboutPage from './_components/AboutPage'
import BannerPrimary from '@/_components/banners/BannerPrimary';
import BreadCrumbs from '@/_components/BreadCrumbs';
import { Metadata } from "next";
import AppInfoData from "../../_data/sample/AppInfoData.json";
import { BannerData } from '@/_data/sample/BannerData';

export const metadata: Metadata = {
  title: `${AppInfoData.name} - About Us`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "About Us", href:"/about"},
]

export default function page() {
  return (
    <>

    <BannerPrimary 
        title={BannerData.about.title} 
        subtitle={BannerData.about.subtitle}  
        img={BannerData.about.img}  
    />
    
    <BreadCrumbs dbData={BreadCrumbsData} />

    <AboutPage />

    </>
  )
}
