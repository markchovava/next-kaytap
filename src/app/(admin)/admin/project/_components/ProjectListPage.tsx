"use client"
import ButtonPaginate from "@/_components/buttons/ButtonPaginate";
import ButtonQuaternary from "@/_components/buttons/ButtonQuaternary"
import SpacerTertiary from "@/_components/spacers/SpacerTertiary"
import { useEffect, useState } from "react"
import { IoSearch } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import Link from "next/link";
import ProjectAddModal from "./ProjectAddModal";
import LoaderPrimary from "@/_components/loaders/LoaderPrimary";
import { _projectDeleteAction } from "@/_api/actions/ProjectActions";
import { useProjectStore } from "@/_store/useProjectStore";
import { toast } from "react-toastify";
import ButtonSearch from "@/_components/buttons/ButtonSearch";
import PaginationPrimary from "@/_components/paginations/PaginationPrimary";
import NoDataPrimary from "@/_components/no-datas/NoDataPrimary";
import { ItemResponsive } from "@/_components/items/ItemResponsive";
import { useProjectCategoryStore } from "@/_store/useProjectCategoryStore";
import StickerPrimary from "@/_components/stickers/StickerPrimary";


const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Editor" },
  ];

interface PropsInterface{
  projectCategoryData: any
  dbData: any
}


export default function ProjectListPage({ 
    dbData, 
    projectCategoryData 
}: PropsInterface
) {
    const { 
        isLoading, 
        search, 
        isSearching, 
        setSearch, 
        setToggleModal,
        toggleModal,
        setDataList,
        meta,
        links,
        dataList,
        getDataList,
        getSearchDatalist,
        getPaginatedDatalist,
        setIsLoading,
    } = useProjectStore()

    const { setProjectCategoryList } = useProjectCategoryStore()

    useEffect(() => {
        setProjectCategoryList(projectCategoryData.data)
        setDataList(dbData)
    }, [])

    const handleToggleModal = () => {
        setToggleModal(!toggleModal)
    }
      
    async function handleDelete(id: string | number){
      setIsLoading(true)
      try{
          const res = await _projectDeleteAction(id) 
          const {data, status, message} = res
          if(status === 1) {
            toast.success(message)
            await getDataList()
            setIsLoading(false)
            return
          }
          toast.warn('Something went wrong, please try again.')
          setIsLoading(false)
          return
      }catch(error){
        console.error('Delete error: ', error);
      } 

    }
  
    async function handlePaginate(url: string) {
        await getPaginatedDatalist(url)
    }
  
    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!search){
          toast.warn('Search input is required.')
          return
        }
        try {
          await getSearchDatalist(search)
        } catch (error) {
            console.error('Form submission error:', error);
        }
    }

    if(isLoading){
        return (
          <LoaderPrimary />
        )
    }


    /* console.log('dataList: ', dataList) */


  return (
    <>
          {/* DESKTOP */}
          <section className="hidden md:block w-[92%] mx-auto bg-white drop-shadow px-4 py-3 rounded-xl">
            <section className="flex md:flex-row flex-col items-center justify-between gap-4 mb-4">
              <form onSubmit={handleSearch} className="lg:w-[60%] w-full flex items-center justify-start rounded-full border border-gray-300">
                <input 
                  type="text" 
                  value={search}
                  onChange={setSearch}
                  placeholder="Enter Name" 
                  className="flex-1 py-3 px-4 outline-none rounded-l-full" 
                />
                <ButtonSearch status={isSearching} />
              </form>
              <ButtonQuaternary 
                onClick={handleToggleModal}
                title='Add' 
                css="px-8 py-3 text-white" 
              />
            </section>
    
            { dataList && dataList.length > 0 ?
              <>
                  <section className="w-full lg:overflow-hidden overflow-scroll">
                    <div className='lg:w-[100%] w-[70rem]'>
                      {/* Header */}
                      <section className="w-full bg-gray-300 font-bold text-lg border border-gray-400 flex items-center justify-start">
                        <div className="flex-4 border-r border-gray-400 px-2 py-1">NAME</div>
                        <div className="flex-3 border-r border-gray-400 px-2 py-1">STATUS</div>
                        <div className="flex-4 border-r border-gray-400 px-2 py-1">PROJECT CATEGORY</div>
                        <div className="flex-2 px-2 border-gray-400 py-1 text-end">ACTION</div>
                      </section>
                      {/* Data rows */}
                      {dataList.map((i, key) => (
                        <section key={key} className="w-full border-l border-r border-b border-gray-400 flex items-center justify-start">
                          <div className="flex-4 border-r border-gray-400 px-2 py-3">
                            {i.name}
                            <p className="text-sm font-medium text-gray-600">Priority: {i.priority}</p>
                          </div>
                          <div className="flex-3 border-r border-gray-400 px-2 py-3">
                              {i.status ? <StickerPrimary title={i.status} /> : "Not Added Yet." }
                          </div>
                          <div className="flex-4 border-r border-gray-400 px-2 py-3">
                              {i?.projectCategory?.name ? i?.projectCategory?.name : "Not Added Yet."}
                          </div>
                        
                          <div className="flex-2 px-2 py-3 relative z-50 flex items-center justify-end gap-2 text-gray-800">
                            <button className="cursor-pointer group">
                                <Link href={`/admin/project/${i.id}`}>
                                  <FaEye className={`hover:scale-110 ease-initial transition-all duration-200 
                                    text-lg group-hover:text-green-600`} />
                                </Link>
                            </button>
    
                            <button onClick={() => handleDelete(i.id)} className="cursor-pointer group">
                              <FaDeleteLeft className={`hover:scale-110 ease-initial transition-all duration-200 
                                text-lg group-hover:text-red-600`} />
                            </button>
    
                          </div>
                        </section>
                      ))}
                    </div>
                  </section>
                  <SpacerTertiary />
                  <PaginationPrimary
                    meta={meta} 
                    links={links} 
                    handlePaginate={handlePaginate} />
              </>   
            :
              <NoDataPrimary />
            }
    
    
          </section>
    
          {/* MOBILE */}
          <section className="md:hidden block w-[92%] mx-auto ">
            {/* SEARCH */}
            <form className="bg-white drop-shadow-md rounded-full mb-4 p-3">
              <div className="rounded-full border border-gray-300 p-2 flex items-center justify-start">
                <input 
                  type="text" 
                  value={search}
                  onChange={setSearch}
                  placeholder="Enter Name here..."
                  className="outline-none flex-2 pr-2" />
                  <ButtonSearch status={isSearching} />
              </div>
            </form>
            {/* ADD */}
            <section className="w-[92%] mx-auto flex items-center justify-center mb-4">
              <ButtonQuaternary 
                onClick={handleToggleModal}
                title='Add' 
                css="px-8 py-3 text-white" 
              />
            </section>
    
            { dataList && dataList.length > 0 ?
              <>
                { dataList.map((i, key) => (
                  <section key={key} className=" bg-white drop-shadow-md rounded-lg px-4 pt-6">
                    <div className="w-full flex items-start justify-between gap-4 border-b border-gray-300 py-3">
                      <ItemResponsive
                        label="Name" 
                        name={i.name} />
                      <div className=" flex items-center justify-end gap-3">
                        <button className="cursor-pointer group">
                          <Link href={`/admin/project/${i.id}`}>
                            <FaEye className={`hover:scale-110 ease-initial transition-all duration-200 
                              text-lg group-hover:text-green-600`} />
                          </Link>
                        </button>
                        <button onClick={() => handleDelete(i.id)} className="cursor-pointer group">
                          <FaDeleteLeft className={`hover:scale-110 ease-initial transition-all duration-200 
                            text-lg group-hover:text-red-600`} />
                        </button>
                      </div>
                    </div>
                    {/*  */}
                    <div className="pt-3 pb-6 border-b border-gray-300">
                        <ItemResponsive 
                            label="Status" 
                            name={i.status ? <StickerPrimary title={i.status} /> : "Not Added."}
                      />
                    </div>
                    {/*  */}
                    <div className="pt-3 pb-6 border-b border-gray-300">
                        <ItemResponsive 
                            label="Project Category" 
                            name={ i?.projectCategory?.name ? i?.projectCategory?.name : "Not Added."}
                      />
                    </div>
                    {/*  */}
                    <div className="pt-3 pb-6">
                        <ItemResponsive 
                            label="Priority" 
                            name={ i?.priority ? i?.priority.toString() : "Not Added Yet." }
                      />
                    </div>
                  </section>
                ))}
    
                <SpacerTertiary />
                <PaginationPrimary
                    meta={meta} 
                    links={links} 
                    handlePaginate={handlePaginate} 
                />
              </>
              : <NoDataPrimary />
            }
    
          </section>
        </>
  )
}