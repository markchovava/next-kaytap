
import BreadCrumbs from "@/_components/BreadCrumbs";
import { Metadata } from "next";
import AppInfoData from "../../../../../_data/sample/AppInfoData.json"
import SpacerPrimary from "@/_components/spacers/SpacerPrimary";
import ProductViewPage from "./_components/ProductViewPage";
import { SinglePageInterface } from "@/_data/interface/SingleViewInterface";



export const metadata: Metadata = {
  title: `${AppInfoData.name} - View Product`,
  description: AppInfoData.description,
};



export default function page(
  {
    params: {id}
  }: SinglePageInterface
) {

  const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 3, name: "Products", href:"/admin/user"},
    {id: 4, name: "View Product", href: `/admin/product/${id}`},
  ]


  return (
    <>
      <BreadCrumbs dbData={BreadCrumbsData} />
      <SpacerPrimary />
      <ProductViewPage id={id} />
      <SpacerPrimary />
    </>
  )
}
