"use client"

import CardAdmin from "@/_components/cards/CardAdmin";
import SpacerQuaternary from "@/_components/spacers/SpacerQuaternary";
import TitlePrimary from "@/_components/titles/TitlePrimary";
import { AdminData } from "@/_data/sample/AdminData";



export default function AdminPage() {
  return (
    <>
    <section>
        <div className="mx-auto w-[92%]">
            <TitlePrimary title="Dashboard" />
        </div>
        <SpacerQuaternary />
        <div className='mx-auto w-[92%] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>
            {AdminData.map((i, key) => (
                <CardAdmin key={key} dbData={i} />
            ))}
        </div>
    </section>
    </>
  )
}
