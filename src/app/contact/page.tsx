import BannerPrimary from '@/_components/banners/BannerPrimary'
import React from 'react'
import ContactPage from './_components/ContactPage'
import BreadCrumbs from '@/_components/BreadCrumbs'


const BreadCrumbsData = [
    {id: 1, name: "Home", href:"/"},
    {id: 2, name: "Contact Us", href:"/contact"},
]


export default function page() {
  return (
    <>
    <BannerPrimary 
      title='Talk to us?' 
      subtitle='Contact Us' 
      img="/assets/img/banner/04.jpg"
    />
    
    <BreadCrumbs dbData={BreadCrumbsData} />

    <ContactPage />
    </>
  )
}
