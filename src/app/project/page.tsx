import BannerPrimary from '@/_components/banners/BannerPrimary'
import React from 'react'
import AppInfoData from "../../_data/sample/AppInfoData.json";
import { Metadata } from 'next';
import BreadCrumbs from '@/_components/BreadCrumbs';
import ProjectPage from './_components/ProjectPage';
import SpacerPrimary from '@/_components/spacers/SpacerPrimary';
import { BannerData } from '@/_data/sample/BannerData';


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Our Projects`,
  description: AppInfoData.description,
};

const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Our Projects", href:"/project"},
]



export default function Page() {
  return (
    <>
    <BannerPrimary
        title={BannerData.project.title} 
        subtitle={BannerData.project.subtitle}  
        img={BannerData.project.img} 
    />
    
    <BreadCrumbs dbData={BreadCrumbsData} />


    <SpacerPrimary />

    <ProjectPage />

    <SpacerPrimary />

    </>
  )
}
