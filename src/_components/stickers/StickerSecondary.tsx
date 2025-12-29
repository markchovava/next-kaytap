import { ProductStockData } from "@/_data/sample/ProductStockData";


export default function StickerSecondary({status}: {status: string}) {
    switch(status) {
        case ProductStockData[0].name:
            return(
                <span className='px-4 py-1 text-md drop-shadow rounded-2xl bg-blue-700 text-white'>
                    {status}
                </span>
            );
        case ProductStockData[1].name:
            return(
                <span className='px-4 py-1 text-md drop-shadow rounded-2xl bg-red-700 text-white'>
                    {status}
                </span>
            );
        default:
            return(
                <span className='px-4 py-1 text-md drop-shadow rounded-2xl bg-gray-700 text-white'>
                    {status}
                </span>
            )
    }
 
}
