
import BreadCrumbs from "@/_components/BreadCrumbs";
import { Metadata } from "next";
import AppInfoData from "../../../../../_data/sample/AppInfoData.json"
import SpacerPrimary from "@/_components/spacers/SpacerPrimary";
import ServiceViewPage from "./_components/ServiceViewPage";
import { _checkAuthAction } from "@/_api/actions/AuthActions";
import { _serviceViewAction } from "@/_api/actions/ServiceActions";
import ServiceEditModal from "./_components/ServiceEditModal";


export const metadata: Metadata = {
  title: `${AppInfoData.name} - View Service`,
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
  const [ serviceData ] = await Promise.all([  _serviceViewAction(id) ])
  const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 3, name: "Services List", href:"/admin/service"},
    {id: 4, name: "View Service", href:`/admin/Service/${id}`},
  ]


  return (
    <>
      <BreadCrumbs dbData={BreadCrumbsData} />
      <SpacerPrimary />
      <ServiceViewPage dbData={serviceData} id={id} />
      <SpacerPrimary />
      <ServiceEditModal id={id} />
    </>
  )
}
