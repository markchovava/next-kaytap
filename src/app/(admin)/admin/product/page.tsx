import BreadCrumbs from '@/_components/BreadCrumbs'
import SpacerPrimary from '@/_components/spacers/SpacerPrimary';
import ProductListPage from './_components/ProductListPage';

import { Metadata } from "next";
import AppInfoData from "../../../../_data/sample/AppInfoData.json"

export const metadata: Metadata = {
  title: `${AppInfoData.name} - Product List`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 2, name: "Products List", href:"/admin/product"},
]

export default function page() {
  return (
    <>
    <BreadCrumbs dbData={BreadCrumbsData} />
    <SpacerPrimary />
      <ProductListPage />
    <SpacerPrimary />
    </>
  )
}
