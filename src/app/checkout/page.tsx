import BreadCrumbs from "@/_components/BreadCrumbs";
import CheckoutPage from "./_components/CheckoutPage";
import SpacerSecondary from "@/_components/spacers/SpacerSecondary";


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Our Shop", href:"/shop"},
    {id: 3, name: "Checkout", href:"/checkout"},
]


export default function page() {
  return (
    <>
    <BreadCrumbs dbData={BreadCrumbsData} />

    <SpacerSecondary />

    <CheckoutPage />

    <SpacerSecondary />
    </>
  )
}
