import Heading1 from '@/_components/headings/Heading1'
import React from 'react'
import AboutPage from './_components/AboutPage'
import { Metadata } from "next";
import AppInfoData from "../../_data/sample/AppInfoData.json";
import BannerPrimary from '@/_components/banners/BannerPrimary';
import BreadCrumbs from '@/_components/BreadCrumbs';

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
      title='Who we are?' 
      subtitle='About Us' 
      img="/assets/img/banner/03.jpg" />
    <BreadCrumbs dbData={BreadCrumbsData} />

    <AboutPage />

    </>
  )
}
