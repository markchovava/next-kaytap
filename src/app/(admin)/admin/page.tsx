import { Metadata } from "next";
import AppInfoData from "../../../_data/sample/AppInfoData.json";
import BreadCrumbs from '@/_components/BreadCrumbs';
import SpacerPrimary from '@/_components/spacers/SpacerPrimary';
import AdminPage from './_components/AdminPage';
import { _checkAuthAction } from '@/_api/actions/AuthActions';


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Dashboard`,
  description: AppInfoData.description,
};

const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
]


export default async function page() {
  await _checkAuthAction();

  return (
    <>
    <BreadCrumbs dbData={BreadCrumbsData} />

    <SpacerPrimary />
    <AdminPage />

    <SpacerPrimary />
    </>
  )
}
