"use client"
import { useNavStore } from '@/_store/useNavStore'
import HeaderPrimary from './header/HeaderPrimary'
import Logo from './Logo'
import { FaRegUser } from "react-icons/fa";
import { NavItem } from './navs/NavItem'
import { GoDotFill } from 'react-icons/go';
import { IoSearch } from 'react-icons/io5';
import IconDefault from './icons/IconDefault';
import { BsCart } from 'react-icons/bs';
import { FaAngleDown } from 'react-icons/fa6';
import { ButtonPrimary } from './buttons/ButtonPrimary';
import Link from 'next/link';
import { OtherNavData } from '@/_data/sample/NavLinksData';


export default function Header() {
  const { dataList, toggleNav, setToggleNav, setOpenById } = useNavStore()

  return (
    <>
    {/* DESKTOP */}
    <header className='bg-white drop-shadow relative z-50 hidden lg:block'>
        <section className='mx-auto w-[92%] flex items-center justify-between py-2 gap-6'>
          <div className='flex items-center justify-start gap-5'>
            {/* LOGO */}
            <div className='w-[140px]'>
              <Logo />
            </div>
            {/* NAVIGATION */}
            <ul className='font-semibold flex items-center justify-start gap-3'>
                {dataList.map((i, key) => (
                  <NavItem 
                    key={key} 
                    preData={i} />
                )) }
            </ul>
          </div>
          <div className='flex items-center justify-end gap-8'>
            <MySearch />
            <MyAccount />
            <MyCart title={`My Cart`} />
          </div>
        </section>
    </header>

    {/* MOBILE */}
    <header className='relative z-50 block lg:hidden'>
      <section className='mx-auto bg-white px-[4%] drop-shadow-sm border border-gray-300'>
        <div className='w-full flex items-center justify-between py-2 gap-6'>
          <div className='w-[140px]'>
            <Logo />
          </div>
          <div onClick={() => setToggleNav(!toggleNav)} className='cursor-pointer'>
            <div className={`transition-all duration-300 ease-in-out ${
              toggleNav ? 'rotate-90 scale-100' : 'rotate-0 scale-100'
            }`}>
              {toggleNav ? (
                <IconDefault 
                  iconType='close' 
                  css='text-3xl' 
                />
              ) : (
                <IconDefault 
                  iconType='menu'
                  css='text-xl' 
                />
              )}
            </div>
          </div>   
        </div>
      </section>

      {/* Mobile Navigation Menu */}
      <nav className={`w-full bg-white overflow-hidden transition-all duration-300 ease-in-out
        ${toggleNav 
          ? 'max-h-screen opacity-100 border-t border-gray-100' 
          : 'max-h-0 opacity-0'
        }`}>
        <ul className='w-full'>
          {dataList.map((i, key) => (
            <Link key={key} href={i.href}>
              <li className='w-full hover:underline ease-in-out transition-all duration-300 bg-white hover:bg-gray-50 cursor-pointer text-center py-3 border-b border-gray-100 font-semibold'>
                {i.title}
              </li>
            </Link>
          ))} 
          <Link href={OtherNavData.search.href}>
            <li className='w-full hover:underline ease-in-out transition-all duration-300 bg-white hover:bg-gray-50 cursor-pointer text-center py-3 border-b border-gray-100 font-semibold'>
              {OtherNavData.search.title}
            </li>
          </Link>
          <Link href={OtherNavData.cart.href}>
            <li className='w-full hover:underline ease-in-out transition-all duration-300 bg-white hover:bg-gray-50 cursor-pointer text-center py-3 border-b border-gray-100 font-semibold'>
              {OtherNavData.cart.title}
            </li>
          </Link>
          <Link href={OtherNavData.auth.href}>
            <li className='w-full hover:underline ease-in-out transition-all duration-300 bg-white hover:bg-gray-50 cursor-pointer text-center py-3 border-b border-gray-100 font-semibold'>
              {OtherNavData.auth.title}
            </li>
          </Link>
        </ul>
      </nav>
    </header>
    </>
  )
}



function MyCart({title, }: { title: string}) {
    const { isCartOpen, setIsCartOpen } = useNavStore()
    // console.log('isCartOpen:: ', isCartOpen)

  return(
    <section
      onClick={() => setIsCartOpen(!isCartOpen)}
      className='flex relative items-center justify-center gap-2 duration-200 transition-colors ease-in-out'>
        <button className='flex group items-center gap-2 cursor-pointer'>
          <div className='flex items-start justify-center relative'>
            <BsCart 
              className={` ${ isCartOpen ? 'text-blue-800' : ''} text-3xl group-hover:text-blue-800 `} />
            <span className='-ml-[10px] -mt-[5px] text-white bg-red-600 flex items-center justify-center px-1 pt-0.5 pb-1 text-xs w-[12px] h-[12px] rounded-full z-20'>
                0
            </span>
          </div>
          <div className='flex items-center justify-center gap-1'>
            <p className={`${isCartOpen ? 'text-blue-800' : ''} font-semibold group-hover:text-blue-800`}>{title}</p>
            <FaAngleDown className={` ${isCartOpen ? 'text-blue-800' : ''} group-hover:text-blue-800`} />
          </div>
        </button>
        <ul className={`absolute top-[118%] right-0 z-[50] w-[15rem] bg-white  rounded-b-lg transition-all duration-300 ease-in-out transform
              ${ isCartOpen 
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto border-t drop-shadow-lg bg-white border-gray-100' 
              : 'opacity-0 -translate-y-2 scale-95 pointer-events-none' }
          `}>
            {[...Array(7)].map((i, key) => (
              <li key={key} className='w-full cursor-pointer border-b border-gray-100 flex items-center justify-between gap-2 px-2 py-1'>
                  <div className='text-xs'>
                    <p className='text-wrap'>Lorem ipsum dolor sit amet.</p>
                    <p className=''>Quantity: <span className='font-bold'>12</span></p>
                  </div>
                  <div className='text-sm'>$12.00</div>
              </li>
            ))}
            <Link href={OtherNavData.cart.href}>
              <li className='px-2 pt-1 pb-3 flex items-center justify-center'>
                <ButtonPrimary 
                    title={OtherNavData.cart.title} 
                    css='w-[90%] py-2 text-white' 
                />
              </li>
            </Link>
        </ul>
    </section>
  )
}


function MySearch() {
    const {
      search, 
      isSearchOpen, 
      isSearching, 
      setSearch, 
      setIsSearchOpen, 
      setIsSearching
    } = useNavStore()

    const handleToggleSearch = () => {
      setIsSearchOpen(!isSearchOpen)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('SEARCH: ', search)
      setIsSearching(true)
    }

    return (
      <section className='relative flex items-center justify-end group'>
        <button 
          onClick={handleToggleSearch} 
          className='cursor-pointer'>
          <IconDefault css='text-2xl group-hover:text-blue-800' iconType='search' />
        </button>
        <form 
          onSubmit={handleSubmit} 
          className={`absolute  w-[20rem] top-[115%] right-0 p-2 rounded-lg transition-all duration-300 ease-in-out transform
              ${ isSearchOpen 
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto border-t bg-white border-gray-100 drop-shadow-lg' 
              : 'opacity-0 -translate-y-2 scale-95 pointer-events-none' }
          `}>
          <div className='border border-gray-300 flex items-center justify-start rounded-lg'>
            <input 
              type="text" 
              value={search}
              onChange={setSearch}
              placeholder='Search...' 
              className='outline-none w-full px-3 py-2 ' />
            <button className='pr-3 pl-4 border-l border-gray-300'>
              {isSearching ? 
                <GoDotFill className="cursor-pointer text-xl sm:text-2xl animate-pulse text-gray-900" />
              : 
                <IoSearch className="cursor-pointer text-lg sm:text-xl text-gray-500 transition-all ease-initial duration-200 group-hover:text-gray-900 group-hover:scale-110" />
              }
            </button>
          </div>
        </form>
      </section>
    )
}


function MyAccount(){
  return (
    <Link href={OtherNavData.auth.href}>
      <section className='flex items-center justify-center gap-2 hover:text-blue-800 duration-200 transition-colors ease-in-out'>
        <button className='flex items-center gap-2 cursor-pointer'>
          <div className=''>
            <FaRegUser className='text-xl' />
          </div>
          <p className='font-semibold'>{OtherNavData.auth.title}</p>
        </button>
      </section>
    </Link>
  )
}




