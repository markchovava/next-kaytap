import ProjectListPage from "../_components/ProjectListPage";
import BreadCrumbs from '@/_components/BreadCrumbs'
import { Metadata } from "next";
import AppInfoData from "../../../../../_data/sample/AppInfoData.json"
import { SinglePageInterface } from "@/_data/interface/SingleViewInterface";
import SpacerPrimary from "@/_components/spacers/SpacerPrimary";
import ProjectViewPage from "./_components/ProjectViewPage";


export const metadata: Metadata = {
  title: `${AppInfoData.name} - View Project`,
  description: AppInfoData.description,
};



export default function page(
    {
        params: {id}
    }: SinglePageInterface
) {
    const BreadCrumbsData = [
        {id: 1, name: "Home", href:"/"},
        {id: 2, name: "Dashboard", href:"/admin"},
        {id: 3, name: "Project List", href:"/admin/project"},
        {id: 4, name: "View Project", href: `/admin/project/${id}`},
    ]

  return (
    <>
    <BreadCrumbs dbData={BreadCrumbsData} />
    <SpacerPrimary />
    
    <ProjectViewPage id={id} />
    <SpacerPrimary />
    </>
  )
}
