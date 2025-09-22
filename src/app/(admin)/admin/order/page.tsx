import SpacerPrimary from "@/_components/spacers/SpacerPrimary";
import AppInfoData from "../../../../_data/sample/AppInfoData.json"
import OrderListPage from "./_components/OrderListPage";
import BreadCrumbs from '@/_components/BreadCrumbs'
import { Metadata } from "next";


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Orders List`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 2, name: "Orders List", href:"/admin/order"},
]


export default function page() {
  return (
    <>
      <BreadCrumbs dbData={BreadCrumbsData} />
      <SpacerPrimary />
      <OrderListPage />
      <SpacerPrimary />
    </>
  )
}
