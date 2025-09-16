import ShopPage from './_components/ShopPage'
import AppInfoData from "../../_data/sample/AppInfoData.json";
import { Metadata } from 'next';
import BreadCrumbs from '@/_components/BreadCrumbs';


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Our Shop`,
  description: AppInfoData.description,
};

const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Our Shop", href:"/shop"},
]

export default function page() {
  return (
    <>
    <BreadCrumbs dbData={BreadCrumbsData} />
      
    <ShopPage />
    </>
  )
}
