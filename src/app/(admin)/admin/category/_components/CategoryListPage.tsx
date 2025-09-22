"use client"
import ButtonPaginate from "@/_components/buttons/ButtonPaginate";
import ButtonQuaternary from "@/_components/buttons/ButtonQuaternary"
import SpacerTertiary from "@/_components/spacers/SpacerTertiary"
import { useState } from "react"
import { IoSearch } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import Link from "next/link";
import CategoryAddModal from "./CategoryAddModal";
import { CategoryData } from "@/_data/sample/CategoryData";





export default function CategoryListPage() {
  const [isModal, setIsModal] = useState<boolean>(false);


  return (
    <>
      <div>
        <SpacerTertiary />
        <section className="w-[92%] mx-auto bg-white drop-shadow px-6 py-6 rounded-xl">
          <section className="flex lg:flex-row flex-col items-center justify-between gap-4 mb-4">
            <form className="lg:w-[60%] w-full flex items-center justify-start rounded-full border border-gray-300">
              <input 
                type="text" 
                placeholder="Enter Name" 
                className="flex-1 py-3 px-4 outline-none rounded-l-full" 
              />
              <button type="button" className="group px-4 border-l border-gray-300 rounded-r-full">
                <IoSearch className="cursor-pointer text-xl text-gray-500 transition-all ease-initial duration-200 group-hover:text-gray-900 group-hover:scale-110" />
              </button>
            </form>
            <ButtonQuaternary 
              onClick={() => setIsModal(!isModal)}
              title='Add Category' 
              css="px-8 py-3 text-white" 
            />
          </section>

          <section className="w-full lg:overflow-hidden overflow-scroll">
            <div className='lg:w-[100%] w-[70rem]'>
              {/* Header */}
              <section className="w-full bg-gray-300 font-bold text-lg border border-gray-400 flex items-center justify-start">
                <div className="flex-5 border-r border-gray-400 px-2 py-1">NAME</div>
                <div className="flex-4 border-r border-gray-400 px-2 py-1">AUTHOR</div>
                <div className="flex-2 px-2 border-gray-400 py-1 text-end">ACTION</div>
              </section>

              {/* Data rows */}
              {CategoryData.map((i, key) => (
                <section key={key} className="w-full border-l border-r border-b border-gray-400 flex items-center justify-start">
                  <div className="flex-5 border-r border-gray-400 px-2 py-3">{i.name}</div>
                  <div className="flex-4 border-r border-gray-400 px-2 py-3"> Author Name</div>
                  <div className="flex-2 px-2 py-3 relative z-50 flex items-center justify-end gap-2 text-gray-800">
                  
                    <button className="cursor-pointer group">
                        <Link href={`/admin/category/${i.id}`}>
                          <FaEye className={`hover:scale-110 ease-initial transition-all duration-200 
                            text-lg group-hover:text-green-600`} />
                        </Link>
                    </button>

                    <button className="cursor-pointer group">
                      <FaDeleteLeft className={`hover:scale-110 ease-initial transition-all duration-200 
                        text-lg group-hover:text-red-600`} />
                    </button>
                  </div>
                </section>
              ))}
            </div>
          </section>

          <SpacerTertiary />
          <section className="flex items-center justify-end gap-3">
            <ButtonPaginate 
              title="Previous" 
              direction="left" 
              onClick={() => {}} 
              css="pr-8 pl-5 py-2" 
            />
            <ButtonPaginate 
              title="Next" 
              direction="right" 
              onClick={() => {}} 
              css="pr-5 pl-8 py-2" 
            />
          </section>
        </section>
        <CategoryAddModal isModal={isModal} setIsModal={setIsModal} />
      </div>
    </>
  )
}
