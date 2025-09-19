import SpacerPrimary from '@/_components/spacers/SpacerPrimary'
import AppInfoPage from './_components/AppInfoPage'
import BreadCrumbs from '@/_components/BreadCrumbs'
import { Metadata } from "next";
import AppInfoData from "../../../../_data/sample/AppInfoData.json"


export const metadata: Metadata = {
  title: `${AppInfoData.name} - App Information`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 2, name: "Settings", href:"/admin/settings"},
    {id: 2, name: "App Information", href:"/admin/app-info"},
]



export default function page() {
  return (
    <>
    <BreadCrumbs dbData={ BreadCrumbsData} />
        <SpacerPrimary />
            <AppInfoPage />
        <SpacerPrimary />
    </>
  )
}
