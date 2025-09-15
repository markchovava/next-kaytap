import ShopPage from './_components/ShopPage'
import AppInfoData from "../../_data/sample/AppInfoData.json";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: `${AppInfoData.name} - Our Shop`,
  description: AppInfoData.description,
};

export default function page() {
  return (
    <>
      <ShopPage />
    </>
  )
}
