
import BreadCrumbs from "@/_components/BreadCrumbs";
import { Metadata } from "next";
import AppInfoData from "../../../../../_data/sample/AppInfoData.json"
import SpacerPrimary from "@/_components/spacers/SpacerPrimary";
import ProductViewPage from "./_components/ProductViewPage";
import { _checkAuthAction } from "@/_api/actions/AuthActions";
import { _productViewAction } from "@/_api/actions/ProductActions";
import ProductEditModal from "./_components/ProductEditModal";



export const metadata: Metadata = {
  title: `${AppInfoData.name} - View Product`,
  description: AppInfoData.description,
};


interface PropsInterface {
    params: Promise<{ 
      id: string
    }>
}
 
export default async function page({ params }: PropsInterface) {
  const { id } = await params;
  await _checkAuthAction()
  const [ productData ] = await Promise.all([  _productViewAction(id) ])

  const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 3, name: "Products", href:"/admin/product"},
    {id: 4, name: "View Product", href: `/admin/product/${id}`},
  ]


  return (
    <>
      <BreadCrumbs dbData={BreadCrumbsData} />
      <SpacerPrimary />
      <ProductViewPage id={id} dbData={productData} />
      <SpacerPrimary />

      <ProductEditModal id={id} />
    </>
  )
}
