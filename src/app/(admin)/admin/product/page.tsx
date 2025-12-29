import BreadCrumbs from '@/_components/BreadCrumbs'
import SpacerPrimary from '@/_components/spacers/SpacerPrimary';
import ProductListPage from './_components/ProductListPage';

import { Metadata } from "next";
import AppInfoData from "../../../../_data/sample/AppInfoData.json"
import { _productListAction } from '@/_api/actions/ProductActions';
import ProductAddModal from './_components/ProductAddModal';

export const metadata: Metadata = {
  title: `${AppInfoData.name} - Product List`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 2, name: "Products List", href:"/admin/product"},
]

export default async function page() {
  const [ productData ] = await Promise.all([ _productListAction() ]);

  return (
    <>
    <BreadCrumbs dbData={BreadCrumbsData} />
    
    <SpacerPrimary />
        <ProductListPage dbData={productData} />
    <SpacerPrimary />

    <ProductAddModal />
    </>
  )
}
