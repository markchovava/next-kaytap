
import BreadCrumbs from "@/_components/BreadCrumbs";
import { Metadata } from "next";
import AppInfoData from "../../../../../_data/sample/AppInfoData.json"
import SpacerPrimary from "@/_components/spacers/SpacerPrimary";
import CategoryViewPage from "./_components/CategoryViewPage";
import { _checkAuthAction } from "@/_api/actions/AuthActions";
import { _categoryViewAction } from "@/_api/actions/CategoryActions";
import CategoryEditModal from "./_components/CategoryEditModal";


export const metadata: Metadata = {
  title: `${AppInfoData.name} - View Category`,
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
  const [ categoryData ] = await Promise.all([  _categoryViewAction(id) ])
  const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 3, name: "Categories", href:"/admin/category"},
    {id: 4, name: "View Category", href:`/admin/Category/${id}`},
  ]


  return (
    <>
      <BreadCrumbs dbData={BreadCrumbsData} />
      <SpacerPrimary />
      <CategoryViewPage dbData={categoryData} id={id} />
      <SpacerPrimary />
      <CategoryEditModal id={id} />
    </>
  )
}
