import BreadCrumbs from "@/_components/BreadCrumbs";
import SpacerPrimary from "@/_components/spacers/SpacerPrimary";
import { SinglePageInterface } from "@/_data/interface/SingleViewInterface";
import OrderViewPage from "./_components/OrderViewPage";
import { Metadata } from "next";
import AppInfoData from "../../../../../_data/sample/AppInfoData.json"

export const metadata: Metadata = {
  title: `${AppInfoData.name} - View Order`,
  description: AppInfoData.description,
};



export default function page({params: {id}}: SinglePageInterface) {
    const BreadCrumbsData = [
        {id: 1, name: "Home", href:"/"},
        {id: 2, name: "Dashboard", href:"/admin"},
        {id: 2, name: "Orders List", href:"/admin/order"},
        {id: 2, name: "View Order", href: `/admin/order/${id}`},
    ]

    return (
        <>
            <BreadCrumbs dbData={BreadCrumbsData} />
            <SpacerPrimary />
                <OrderViewPage />
            <SpacerPrimary />
        </>
    )
}
