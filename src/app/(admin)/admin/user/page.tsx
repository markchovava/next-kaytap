import SpacerPrimary from '@/_components/spacers/SpacerPrimary';
import UserListPage from './_components/UserListPage';
import BreadCrumbs from '@/_components/BreadCrumbs'
import { Metadata } from "next";
import AppInfoData from "../../../../_data/sample/AppInfoData.json"
import { _userListAction } from '@/_api/actions/UserActions';
import UserAddModal from './_components/UserAddModal';


export const metadata: Metadata = {
  title: `${AppInfoData.name} - User List`,
  description: AppInfoData.description,
};


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Dashboard", href:"/admin"},
    {id: 2, name: "User List", href:"/admin/user"},
]



export default async function page() {
  const [ userData ] = await Promise.all([ _userListAction() ]);

  return (
    <>
    <BreadCrumbs dbData={BreadCrumbsData} />

    <SpacerPrimary />
    <UserListPage dbData={userData} />
    
    <SpacerPrimary />
    <UserAddModal />
    </>
  )
}
