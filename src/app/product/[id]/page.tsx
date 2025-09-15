import ProductPage from './_components/ProductPage'
import SpacerSecondary from '@/_components/spacers/SpacerSecondary'
import BreadCrumbs from '@/_components/BreadCrumbs'
import AppInfoData from "../../../_data/sample/AppInfoData.json";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Product`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Our Shop", href:"/shop"},
    {id: 3, name: "Product", href:"/product/1"},
]

interface PagePropsInterface{
    params: {id: any}
}


export default function page({ params: {id} }: PagePropsInterface) {
  
    return (
    <>
    <BreadCrumbs dbData={BreadCrumbsData} />

    <SpacerSecondary />
    <ProductPage id={id} />
    </>
  )
}
