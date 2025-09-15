"use client"

import ButtonQuaternary from "@/_components/buttons/ButtonQuaternary"
import SpacerSecondary from "@/_components/spacers/SpacerSecondary"



export default function CartPage() {
  return (
    <>
    <section>
        <div className="w-[92%] mx-auto bg-blue-50 p-4 flex items-center justify-end drop-shadow mb-3">
            <ButtonQuaternary title="Shopping Cart" css="py-3 pl-6 pr-7 text-white" />
        </div>

        <SpacerSecondary />
        
        <div className="w-[92%] mx-auto grid grid-cols-7 font-bold bg-gray-300 py-1">
            <div className="col-span-3 border-r border-white px-3 py-1">DETAILS</div>
            <div className="col-span-2 border-r border-white px-3 py-1 text-end">QUANTITY</div>
            <div className="col-span-2 px-3 py-1 text-end">TOTAL</div>
        </div>


        {[...Array(5)].map((i, key) => (
            <div key={key} className="w-[92%] mx-auto grid grid-cols-7 py-1 border-x border-b border-gray-300">
                <div className="col-span-3 border-r border-gray-300 px-3 py-1">Test</div>
                <div className="col-span-2 border-r border-gray-300 px-3 py-1">
                <input 
                        type="number" 
                        name="quantity" 
                        value={1}
                        min={1} 
                        placeholder="1"
                        className="w-[100%] outline-none border border-gray-300 py-1 px-2" /> 
                </div>
                <div className="col-span-2 px-3 py-1 text-end">$12.00</div>
            </div>
        ))}

        <div className="w-[92%] mx-auto grid grid-cols-7 py-1 ">
            <div className="col-span-3 border-gray-300 px-3 py-1"></div>
            <div className="col-span-4 grid grid-cols-2 border border-gray-300">
                <div className="font-bold border-x border-b border-gray-300 px-3 py-1 text-end">
                    TAX
                </div>
                <div className="font-bold px-3 py-1 text-end border-x border-b border-gray-300">
                    15%
                </div>

                <div className="font-bold border-r border-b border-gray-300 px-3 py-1 text-end">
                    TOTAL
                </div>
                <div className="text-blue-800 text-lg font-bold px-3 py-1 text-end bg-blue-100 border-x border-b border-gray-300">
                    $12.45
                </div>
            </div>
        </div>

    


    </section>
    </>
  )
}
