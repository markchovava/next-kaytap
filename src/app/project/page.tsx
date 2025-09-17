import BannerPrimary from '@/_components/banners/BannerPrimary'
import React from 'react'
import AppInfoData from "../../_data/sample/AppInfoData.json";
import { Metadata } from 'next';
import BreadCrumbs from '@/_components/BreadCrumbs';
import ProjectPage from './_components/ProjectPage';
import SpacerPrimary from '@/_components/spacers/SpacerPrimary';


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
      title='Our Previous Works' 
      subtitle='Our Projects' 
      img="/assets/img/banner/05.jpg"
    />
    
    <BreadCrumbs dbData={BreadCrumbsData} />


    <SpacerPrimary />

    <ProjectPage />

    <SpacerPrimary />

    </>
  )
}
