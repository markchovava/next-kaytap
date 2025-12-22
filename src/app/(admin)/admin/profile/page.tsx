import ProfilePage from "./_components/ProfilePage";
import SpacerPrimary from "@/_components/spacers/SpacerPrimary";
import BreadCrumbs from "@/_components/BreadCrumbs";
import { Metadata } from "next";
import AppInfoData from "../../../../_data/sample/AppInfoData.json"
import { _checkAuthAction, _profileViewAction } from "@/_api/actions/AuthActions";
import ProfileEditModal from "./_components/ProfileEditModal";


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Profile`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 3, name: "Settings", href:"/admin/settings"},
    {id: 4, name: "User Profile", href:"/admin/profile"},
]



export default async function page() {
  await _checkAuthAction();
  const [ authData ] = await Promise.all([ _profileViewAction() ]);

  return (
    <>
    <BreadCrumbs dbData={BreadCrumbsData} />
    <SpacerPrimary />
        <ProfilePage dbData={authData} />
    <SpacerPrimary />

    <ProfileEditModal/>
    <SpacerPrimary />
    </>
  )
}
