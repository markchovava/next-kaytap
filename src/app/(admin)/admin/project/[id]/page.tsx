import ProjectListPage from "../_components/ProjectListPage";
import BreadCrumbs from '@/_components/BreadCrumbs'
import { Metadata } from "next";
import AppInfoData from "../../../../../_data/sample/AppInfoData.json"
import { SinglePageInterface } from "@/_data/interface/SingleViewInterface";
import SpacerPrimary from "@/_components/spacers/SpacerPrimary";
import ProjectViewPage from "./_components/ProjectViewPage";
import { _checkAuthAction } from "@/_api/actions/AuthActions";
import { _projectViewAction } from "@/_api/actions/ProjectActions";
import { _projectCategoryAllAction } from "@/_api/actions/ProjectCategoryActions";
import ProjectEditModal from "./_components/ProjectEditModal";


export const metadata: Metadata = {
  title: `${AppInfoData.name} - View Project`,
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
    const [ projectData, projectCategoryData ] = await Promise.all([  
                        _projectViewAction(id), 
                        _projectCategoryAllAction()  
                    ]);
    
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
    
    <ProjectViewPage id={id} dbData={projectData} />
    <SpacerPrimary />

    <ProjectEditModal id={id} projectCategoryData={projectCategoryData} />
    </>
  )
}
