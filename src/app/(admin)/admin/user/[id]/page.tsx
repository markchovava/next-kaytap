
import SpacerPrimary from "@/_components/spacers/SpacerPrimary";
import BreadCrumbs from "@/_components/BreadCrumbs";
import { Metadata } from "next";
import AppInfoData from "../../../../../_data/sample/AppInfoData.json"
import UserViewPage from "./_components/UserViewPage";


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Profile`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 2, name: "Users", href:"/admin/user"},
    {id: 2, name: "View User", href:"/admin/user/1"},
]



export default function page() {
  return (
    <>
    <BreadCrumbs dbData={ BreadCrumbsData} />
    <SpacerPrimary />
        <UserViewPage />
    <SpacerPrimary />
    </>
  )
}
