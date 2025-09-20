import SpacerPrimary from '@/_components/spacers/SpacerPrimary';
import UserListPage from './_components/UserListPage';
import BreadCrumbs from '@/_components/BreadCrumbs'
import { Metadata } from "next";
import AppInfoData from "../../../../_data/sample/AppInfoData.json"


export const metadata: Metadata = {
  title: `${AppInfoData.name} - User List`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 2, name: "User List", href:"/admin/user"},
]

export default function page() {
  return (
    <>
    <BreadCrumbs dbData={BreadCrumbsData} />

    <SpacerPrimary />
    <UserListPage />
    
    <SpacerPrimary />
    </>
  )
}
