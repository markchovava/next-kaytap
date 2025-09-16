import Link from 'next/link'
import AppInfoData from '../_data/sample/AppInfoData.json'
import Image from 'next/image'


export default function Logo() {
  return (
    
    <div className="relative w-[100%] h-auto">
      <Link href="/">
        <Image 
            src={AppInfoData.logo} 
            alt={AppInfoData.name} 
            width={150} 
            height={150} 
            className='w-[100%] h-[100%] object-contain'/>
        </Link>
    </div>
    
    
  )
}
