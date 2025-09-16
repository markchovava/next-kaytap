import React from 'react'
import CategoryPage from './_components/CategoryPage'
import BannerPrimary from '@/_components/banners/BannerPrimary'
import BreadCrumbs from '@/_components/BreadCrumbs'


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Our Shop", href:"/shop"},
    {id: 2, name: "Our Categories", href:"/shop/category"},
]

export default function page() {
  return (
    <>
    <BannerPrimary 
        title='Shop Categories' 
        subtitle='Our Shop' 
    />

    <BreadCrumbs dbData={BreadCrumbsData} />



    <CategoryPage />
    
    </>
  )
}
