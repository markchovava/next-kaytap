import Heading2 from '@/_components/headings/Heading2'
import React from 'react'
import AppInfoData from "../../../_data/sample/AppInfoData.json"
import SpacerPrimary from '@/_components/spacers/SpacerPrimary';
import ItemPrimary from '@/_components/lists/ItemPrimary';
import TitlePrimary from '@/_components/titles/TitlePrimary';
import SpacerTertiary from '@/_components/spacers/SpacerTertiary';
import SpacerQuaternary from '@/_components/spacers/SpacerQuaternary';
import TextInput from '@/_components/forms/TextInput';
import ContactForm from './ContactForm';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
    <section>
        <SpacerPrimary />
        <div className="mx-auto w-[92%] grid md:grid-cols-2 grid-cols-1">
            <div className='p-4'>
                <TitlePrimary title='Our Contact Details' />
                <SpacerTertiary />
                <ul className='flex flex-col justify-center items-start gap-2'>
                   <ItemPrimary 
                        details={AppInfoData.phone.details} 
                        iconType={AppInfoData.phone.iconType} />
                    <ItemPrimary 
                        details={AppInfoData.email.details} 
                        iconType={AppInfoData.email.iconType} />
                    <ItemPrimary 
                        details={AppInfoData.address.details} 
                        iconType={AppInfoData.address.iconType} />
                </ul>
                <div>
                    <Link href="#">
                        <span></span>
                    </Link>
                </div>
            </div>
            <div>
               
               <ContactForm />

            </div>
        </div>
        <SpacerPrimary />
    </section>
    </>
  )
}