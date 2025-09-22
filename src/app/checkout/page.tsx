import BreadCrumbs from "@/_components/BreadCrumbs";
import CheckoutPage from "./_components/CheckoutPage";
import SpacerSecondary from "@/_components/spacers/SpacerSecondary";
import { Metadata } from "next";
import AppInfoData from "../../_data/sample/AppInfoData.json"

export const metadata: Metadata = {
  title: `${AppInfoData.name} - Checkout`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Our Shop", href:"/shop"},
    {id: 3, name: "Checkout", href:"/checkout"},
]


export default function page() {
  return (
    <>
    <BreadCrumbs dbData={BreadCrumbsData} />

    <SpacerSecondary />

    <CheckoutPage />

    <SpacerSecondary />
    </>
  )
}
