import BannerPrimary from '@/_components/banners/BannerPrimary'
import React from 'react'
import ContactPage from './_components/ContactPage'

export default function page() {
  return (
    <>
    <BannerPrimary title='Talk to us?' subtitle='Contact Us' />

    <ContactPage />
    </>
  )
}
