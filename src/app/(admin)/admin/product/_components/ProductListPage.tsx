"use client"
import ButtonQuaternary from "@/_components/buttons/ButtonQuaternary"
import SpacerTertiary from "@/_components/spacers/SpacerTertiary"
import { IoSearch } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import Link from "next/link";
import { useProductStore } from "@/_store/useProductStore";
import { useEffect } from "react";
import { _productDeleteAction } from "@/_api/actions/ProductActions";
import { toast } from "react-toastify";
import LoaderPrimary from "@/_components/loaders/LoaderPrimary";
import { GoDotFill } from "react-icons/go";
import PaginationPrimary from "@/_components/paginations/PaginationPrimary";
import NoDataPrimary from "@/_components/no-datas/NoDataPrimary";
import { ItemResponsive } from "@/_components/items/ItemResponsive";
import ButtonSearch from "@/_components/buttons/ButtonSearch";





export default function ProductListPage({ dbData }: {dbData: any}) {
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
    } = useProductStore()
  
    useEffect(() => {
        setDataList(dbData)
    }, [])
  
    const handleToggleModal = () => {
        setToggleModal(!toggleModal)
    }
    
    async function handleDelete(id: string | number){
      setIsLoading(true)
      try{
          const res = await _productDeleteAction(id) 
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
                    <div className="flex-3 border-r border-gray-400 px-2 py-1">PRICE & QUANTITY</div>
                    <div className="flex-4 border-r border-gray-400 px-2 py-1">USER</div>
                    <div className="flex-2 px-2 border-gray-400 py-1 text-end">ACTION</div>
                  </section>
                  {/* Data rows */}
                  {dataList.map((i, key) => (
                    <section key={key} className="w-full border-l border-r border-b border-gray-400 flex items-center justify-start">
                      <div className="flex-4 border-r border-gray-400 px-2 py-3">{i.name}</div>
                      <div className="flex-3 border-r border-gray-400 px-2 py-3">
                          <p className="text-sm">
                            Quantity: <span className="">{i.quantity ?? 'Not Added.'}</span>
                          </p>
                          <p className="text-sm">
                            Price: <span className="">{i.price ? ('$'+ i.price) : 'Not Added.'}</span>
                          </p>
                      </div>
                      <div className="flex-4 border-r border-gray-400 px-2 py-3">
                          { i?.user?.name ? i?.user?.name : i?.user?.email }
                      </div>
                    
                      <div className="flex-2 px-2 py-3 relative z-50 flex items-center justify-end gap-2 text-gray-800">
                        <button className="cursor-pointer group">
                            <Link href={`/admin/product/${i.id}`}>
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
                      <Link href={`/admin/product/${i.id}`}>
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
                        label="Price" 
                        name={i.price ? ('$' + i.price) : "Not Added."}
                  />
                </div>
                {/*  */}
                <div className="pt-3 pb-6 border-b border-gray-300">
                    <ItemResponsive 
                        label="Quantity" 
                        name={i.quantity ? i.quantity.toString() : "Not Added."}
                  />
                </div>
                {/*  */}
                <div className="pt-3 pb-6">
                    <ItemResponsive 
                        label="Email" 
                        name={ i?.user?.name ? i?.user?.name : i?.user?.email }
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
