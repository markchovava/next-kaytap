import BreadCrumbs from "@/_components/BreadCrumbs"
import SpacerSecondary from "@/_components/spacers/SpacerSecondary"
import CartPage from "./_components/CartPage";
import AppInfoData from "../../_data/sample/AppInfoData.json";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Shopping Cart`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Our Shop", href:"/shop"},
    {id: 3, name: "Cart", href:"/cart"},
]


export default function page() {
  return (
    <>
    <BreadCrumbs dbData={BreadCrumbsData} />

    <SpacerSecondary />
    <CartPage />

    <SpacerSecondary />
    </>
  )
}
