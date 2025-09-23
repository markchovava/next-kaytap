import ProjectListPage from "./_components/ProjectListPage";
import BreadCrumbs from '@/_components/BreadCrumbs'
import { Metadata } from "next";
import AppInfoData from "../../../../_data/sample/AppInfoData.json"
import SpacerPrimary from "@/_components/spacers/SpacerPrimary";


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Project List`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 2, name: "Projects List", href:"/admin/project"},
];


export default function page() {
  return (
    <>
      <BreadCrumbs dbData={BreadCrumbsData} />
      <SpacerPrimary />

      <ProjectListPage />
      <SpacerPrimary />
    </>
  )
}
