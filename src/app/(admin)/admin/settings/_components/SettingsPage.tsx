"use client"

import CardAdmin from "@/_components/cards/CardAdmin"
import SpacerQuaternary from "@/_components/spacers/SpacerQuaternary"
import TitlePrimary from "@/_components/titles/TitlePrimary"
import { SettingsData } from "@/_data/sample/SettingsData"


export default function SettingsPage() {
  return (
    <section>
        <div className="mx-auto w-[92%]">
            <TitlePrimary title="Settings" />
        </div>
        <SpacerQuaternary />
        <div className='mx-auto w-[92%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
            {SettingsData.map((i, key) => (
                <CardAdmin key={key} dbData={i} />
            ))}
        </div>
    </section>
  )
}
