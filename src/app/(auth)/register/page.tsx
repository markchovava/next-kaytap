import React from 'react'
import RegisterPage from './_components/RegisterPage'
import { Metadata } from "next";
import AppInfoData from "../../../_data/sample/AppInfoData.json";
import BreadCrumbs from '@/_components/BreadCrumbs';
import SpacerPrimary from '@/_components/spacers/SpacerPrimary';

export const metadata: Metadata = {
  title: `${AppInfoData.name} - About Us`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Register", href:"/register"},
]



export default function page() {
  return (
    <>
    <BreadCrumbs dbData={BreadCrumbsData} />

    <SpacerPrimary />
    <RegisterPage />

     <SpacerPrimary />
    </>
  )
}
