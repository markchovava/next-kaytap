import SpacerPrimary from '@/_components/spacers/SpacerPrimary'
import AppInfoPage from './_components/AppInfoPage'
import BreadCrumbs from '@/_components/BreadCrumbs'
import { Metadata } from "next";
import AppInfoData from "../../../../_data/sample/AppInfoData.json"
import { _checkAuthAction } from '@/_api/actions/AuthActions';
import { _appInfoViewAction } from '@/_api/actions/AppInfoActions';
import AppInfoEditModal from './_components/AppInfoEditModal';


export const metadata: Metadata = {
    title: `${AppInfoData.name} - App Information`,
    description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 2, name: "Settings", href:"/admin/settings"},
    {id: 2, name: "App Information", href:"/admin/app-info"},
]



export default async function page() {
    await _checkAuthAction()
    const [ appInfoData ] = await Promise.all([ _appInfoViewAction() ])
    
    return (
      <>
      <BreadCrumbs dbData={BreadCrumbsData} />
          <SpacerPrimary />
              <AppInfoPage dbData={appInfoData} />
          <SpacerPrimary />

          <AppInfoEditModal />
      </>
    )

}
