import Heading1 from '@/_components/headings/Heading1'
import React from 'react'
import AboutPage from './_components/AboutPage'
import { Metadata } from "next";
import AppInfoData from "../../_data/sample/AppInfoData.json";
import BannerPrimary from '@/_components/banners/BannerPrimary';

export const metadata: Metadata = {
  title: `${AppInfoData.name} - About Us`,
  description: AppInfoData.description,
};


export default function page() {
  return (
    <>
    <BannerPrimary title='Who we are?' subtitle='About Us' />

    <AboutPage />

    </>
  )
}
