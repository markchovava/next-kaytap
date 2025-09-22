import AppInfoData from "../../../../_data/sample/AppInfoData.json"
import SpacerPrimary from '@/_components/spacers/SpacerPrimary';
import CategoryListPage from './_components/CategoryListPage';
import BreadCrumbs from '@/_components/BreadCrumbs'
import { Metadata } from "next";


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Categories List`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 2, name: "Categories List", href:"/admin/category"},
]


export default function page() {
  return (
    <>
    <BreadCrumbs dbData={BreadCrumbsData} />
    <SpacerPrimary />
      <CategoryListPage />
    <SpacerPrimary />
    </>
  )
}
