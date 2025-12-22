"use client"
import ButtonPaginate from "@/_components/buttons/ButtonPaginate";
import ButtonQuaternary from "@/_components/buttons/ButtonQuaternary"
import SpacerTertiary from "@/_components/spacers/SpacerTertiary"
import { useEffect, useState } from "react"
import { IoSearch } from "react-icons/io5";
import UserAddModal from "./UserAddModal";
import { FaEye } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import Link from "next/link";
import { useUserStore } from "@/_store/useUserStore";
import LoaderPrimary from "@/_components/loaders/LoaderPrimary";
import { _userDeleteAction } from "@/_api/actions/UserActions";
import PaginationPrimary from "@/_components/paginations/PaginationPrimary";
import { toast } from "react-toastify";
import { ItemResponsive } from "@/_components/items/ItemResponsive";
import NoDataPrimary from "@/_components/no-datas/NoDataPrimary";
import { GoDotFill } from "react-icons/go";
import { RoleData } from "@/_data/sample/RoleData";
import { displayRoleName } from "@/_utils/formatRole";


const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Editor" },
  ];

interface PropsInterface{
  dbData: any
}

export default function UserListPage({dbData}: PropsInterface) {
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
  } = useUserStore()

    useEffect(() => {
      setDataList(dbData)
    }, [])

    const handleToggleModal = () => {
        setToggleModal(true)
    }

    async function handleDelete(id: string | number){
      setIsLoading(true)
      try{
          const res = await _userDeleteAction(id) 
          const {data, status, message} = res
          if(status === 1) {
            toast.warn(message)
            await getDataList()
          }
      }catch(error){
        console.error('Delete error: ', error);
      } finally{
        setIsLoading(false)
      }

    }

    async function handlePaginate(url: string) {
        await getPaginatedDatalist(url)
    }

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
            <button type="button" className="group px-4 border-l border-gray-300 rounded-r-full">
              { isSearching ? 
                <GoDotFill className="cursor-pointer text-xl sm:text-2xl animate-pulse text-gray-900" />
              :
                <IoSearch className="cursor-pointer text-lg sm:text-xl text-gray-500 transition-all ease-initial duration-200 group-hover:text-gray-900 group-hover:scale-110" />
              }
            </button>
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
                    <div className="flex-5 border-r border-gray-400 px-2 py-1">NAME</div>
                    <div className="flex-4 border-r border-gray-400 px-2 py-1">EMAIL</div>
                    <div className="flex-2 border-r border-gray-400 px-2 py-1">ROLE</div>
                    <div className="flex-2 px-2 border-gray-400 py-1 text-end">ACTION</div>
                  </section>
                  {/* Data rows */}
                  {dataList.map((i, key) => (
                    <section key={key} className="w-full border-l border-r border-b border-gray-400 flex items-center justify-start">
                      <div className="flex-5 border-r border-gray-400 px-2 py-3">{i.name}</div>
                      <div className="flex-4 border-r border-gray-400 px-2 py-3">{i.email}</div>
                      <div className="flex-2 border-r border-gray-400 px-2 py-3">
                        {i.roleLevel ? displayRoleName(i.roleLevel) : 'Not Added Yet'}
                      </div>
                      <div className="flex-2 px-2 py-3 relative z-50 flex items-center justify-end gap-2 text-gray-800">
                      
                        <button className="cursor-pointer group">
                            <Link href={`/admin/user/${i.id}`}>
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
              <button type="button" className="group px-4 border-l border-gray-300 rounded-r-full">
                { isSearching ? 
                <GoDotFill className="cursor-pointer text-xl sm:text-2xl animate-pulse text-gray-900" />
                :
                  <IoSearch className="cursor-pointer text-lg sm:text-xl text-gray-500 transition-all ease-initial duration-200 group-hover:text-gray-900 group-hover:scale-110" />
                }
            </button>
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
          {dataList.map((i, key) => (
              <section key={key} className=" bg-white drop-shadow-md rounded-lg px-4 pt-6">
                <div className="w-full flex items-start justify-between gap-4 border-b border-gray-300 py-3">
                  <ItemResponsive 
                    label="Name" 
                    name={i.name} />
                  <div className=" flex items-center justify-end gap-3">
                    <button className="cursor-pointer group">
                      <Link href={`/admin/user/${i.id}`}>
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
                <div className="border-b border-gray-300 py-3">
                  <ItemResponsive 
                      label="Email" 
                      name={i.email} 
                  />
                </div>
                <div className=" py-3">
                  <ItemResponsive 
                      label="Role" 
                      name={i.roleLevel ? displayRoleName(i.roleLevel) : 'Not Added Yet'} 
                  />
                </div>
              </section>

          ))}

            <SpacerTertiary />
            <PaginationPrimary
                meta={meta} 
                links={links} 
                handlePaginate={handlePaginate} />
          </>
          : <NoDataPrimary />
        }

      </section>
    </>
  )
}


