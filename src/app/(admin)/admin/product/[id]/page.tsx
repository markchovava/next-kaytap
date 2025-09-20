
import BreadCrumbs from "@/_components/BreadCrumbs";
import { Metadata } from "next";
import AppInfoData from "../../../../../_data/sample/AppInfoData.json"
import SpacerPrimary from "@/_components/spacers/SpacerPrimary";
import ProductViewPage from "./_components/ProductViewPage";



export const metadata: Metadata = {
  title: `${AppInfoData.name} - View Product`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 2, name: "Products", href:"/admin/user"},
    {id: 2, name: "View Product", href:"/admin/product/1"},
]


export default function page({params: {id}}: {params: {id: number | string}}) {


  return (
    <>
      <BreadCrumbs dbData={BreadCrumbsData} />
      <SpacerPrimary />
      <ProductViewPage id={id} />
      <SpacerPrimary />
    </>
  )
}
