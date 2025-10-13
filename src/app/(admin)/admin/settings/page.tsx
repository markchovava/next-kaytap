import SpacerPrimary from "@/_components/spacers/SpacerPrimary";
import SettingsPage from "./_components/SettingsPage";
import BreadCrumbs from "@/_components/BreadCrumbs";
import { Metadata } from "next";
import AppInfoData from "../../../../_data/sample/AppInfoData.json"


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Settings`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 3, name: "Settings", href:"/admin/settings"},
]


export default function page() {
  return (
    <>
    <BreadCrumbs dbData={BreadCrumbsData} />
    <SpacerPrimary />

    <SettingsPage />

    <SpacerPrimary />
    </>
  )
}
