import React from 'react'
import CategoryPage from './_components/CategoryPage'
import BannerPrimary from '@/_components/banners/BannerPrimary'

export default function page() {
  return (
    <>
    <BannerPrimary 
        title='Shop Categories' 
        subtitle='Our Shop' 
    />

    <CategoryPage />
    
    </>
  )
}
