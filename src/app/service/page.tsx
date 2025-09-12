import BannerPrimary from '@/_components/banners/BannerPrimary'
import React from 'react'
import SevicePage from './_components/SevicePage'
import { Metadata } from 'next';
import AppInfoData from "../../_data/sample/AppInfoData.json";


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Our Services`,
  description: AppInfoData.description,
};


export default function page() {
  return (
    <>
    <BannerPrimary title='What we do?' subtitle='Our Services' />

    <SevicePage />

    </>
  )
}
