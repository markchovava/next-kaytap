
import SpacerPrimary from "@/_components/spacers/SpacerPrimary";
import BreadCrumbs from "@/_components/BreadCrumbs";
import { Metadata } from "next";
import AppInfoData from "../../../../../_data/sample/AppInfoData.json"
import UserViewPage from "./_components/UserViewPage";
import { _checkAuthAction } from "@/_api/actions/AuthActions";
import { _userViewAction } from "@/_api/actions/UserActions";
import UserEditModal from "./_components/UserEditModal";


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Profile`,
  description: AppInfoData.description,
};

interface PropsInterface {
    params: Promise<{ 
      id: string
    }>
}

export default async function page({ params }: PropsInterface) {
    const { id } = await params
    await _checkAuthAction()
    const [ userData ] = await Promise.all([ _userViewAction(id) ]);

    const BreadCrumbsData = [
        {id: 1, name: "Home", href:"/"},
        {id: 2, name: "Dashboard", href:"/admin"},
        {id: 3, name: "Users", href:"/admin/user"},
        {id: 4, name: "View User", href:`/admin/user/${id}`},
    ]

  return (
    <>
    <BreadCrumbs dbData={ BreadCrumbsData} />
    <SpacerPrimary />
        <UserViewPage dbData={userData} />
    <SpacerPrimary />
    <UserEditModal id={id} />
    </>
  )
}
