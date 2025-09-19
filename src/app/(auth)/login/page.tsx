import React from 'react'
import LoginPage from './_components/LoginPage'
import SpacerPrimary from '@/_components/spacers/SpacerPrimary'
import BreadCrumbs from '@/_components/BreadCrumbs'
import AppInfoData from "../../../_data/sample/AppInfoData.json";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Login`,
  description: AppInfoData.description,
};

const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Login", href:"/login"},
]


export default function page() {
  return (
    <>
        <BreadCrumbs dbData={BreadCrumbsData} />

        <SpacerPrimary />
        <LoginPage />

        <SpacerPrimary />
    </>
  )
}
