
import BreadCrumbs from "@/_components/BreadCrumbs";
import { Metadata } from "next";
import AppInfoData from "../../../../../_data/sample/AppInfoData.json"
import SpacerPrimary from "@/_components/spacers/SpacerPrimary";
import CategoryViewPage from "./_components/CategoryViewPage";




export const metadata: Metadata = {
  title: `${AppInfoData.name} - View Category`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 2, name: "Categories", href:"/admin/category"},
    {id: 2, name: "View Category", href:"/admin/Category/1"},
]


export default function page({params: {id}}: {params: {id: number | string}}) {


  return (
    <>
      <BreadCrumbs dbData={BreadCrumbsData} />
      <SpacerPrimary />
      <CategoryViewPage id={id} />
      <SpacerPrimary />
    </>
  )
}
