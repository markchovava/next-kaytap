import AppInfoData from "../../../../_data/sample/AppInfoData.json"
import SpacerPrimary from '@/_components/spacers/SpacerPrimary';
import ServiceListPage from './_components/ServiceListPage';
import BreadCrumbs from '@/_components/BreadCrumbs'
import { Metadata } from "next";
import { _serviceListAction } from "@/_api/actions/ServiceActions";
import ServiceAddModal from "./_components/ServiceAddModal";


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Service List`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 2, name: "Services List", href:"/admin/service"},
]


export default async function page() {
  const [ serviceData ] = await Promise.all([ _serviceListAction() ])

  return (
    <>
    <BreadCrumbs dbData={BreadCrumbsData} />
    <SpacerPrimary />
      <ServiceListPage dbData={serviceData} />
    <SpacerPrimary />
    <ServiceAddModal />
    </>
  )
}
