import AppInfoData from "../../../../_data/sample/AppInfoData.json"
import SpacerPrimary from '@/_components/spacers/SpacerPrimary';
import CategoryListPage from './_components/ProjectCategoryListPage';
import BreadCrumbs from '@/_components/BreadCrumbs'
import { Metadata } from "next";
import { _categoryListAction } from "@/_api/actions/CategoryActions";
import CategoryAddModal from "./_components/ProjectCategoryAddModal";
import { _projectCategoryListAction } from "@/_api/actions/ProjectCategoryActions";


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Categories List`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 3, name: "Project Category List", href:"/admin/category"},
]


export default async function page() {
  const [ categoryData ] = await Promise.all([ _projectCategoryListAction() ])
 
  return (
    <>
    <BreadCrumbs dbData={BreadCrumbsData} />
    <SpacerPrimary />
      <CategoryListPage dbData={categoryData} />
    <SpacerPrimary />
    <CategoryAddModal />
    </>
  )
}
