"use client"

import CardPrimary from "@/_components/cards/CardPrimary"
import SpacerPrimary from "@/_components/spacers/SpacerPrimary"
import SpacerQuaternary from "@/_components/spacers/SpacerQuaternary"
import TitlePrimary from "@/_components/titles/TitlePrimary"
import { CategoryData } from "@/_data/sample/CategoryData"


export default function CategoryPage() {
  return (
    <>
    <section className="">
        <SpacerPrimary />
        <div className="mx-auto w-[92%] ">
            <TitlePrimary title="Our Shop Categories" />
            <SpacerQuaternary />
            <section className="grid grid-cols-6 gap-10">
                {CategoryData.map((i, key) => (
                    <CardPrimary key={key} dbData={i} />
                ))}
            </section>
        </div>
        <SpacerPrimary />
    </section>
    </>
  )
}
