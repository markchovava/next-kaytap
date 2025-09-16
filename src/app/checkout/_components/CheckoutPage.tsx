"use client"

import ButtonQuaternary from "@/_components/buttons/ButtonQuaternary"
import TextAreaInput from "@/_components/forms/TextAreaInput"
import TextInput from "@/_components/forms/TextInput"
import Heading2 from "@/_components/headings/Heading2"
import Heading3 from "@/_components/headings/Heading3"
import Heading4 from "@/_components/headings/Heading4"
import SpacerQuaternary from "@/_components/spacers/SpacerQuaternary"
import { useState } from "react"
import CheckoutForm from "./CheckoutForm"
import SpacerSecondary from "@/_components/spacers/SpacerSecondary"
import Heading5 from "@/_components/headings/Heading5"
import { ButtonPrimary } from "@/_components/buttons/ButtonPrimary"





export default function CheckoutPage() {
  


  return (
    <>
    <section>
      <div className="w-[92%] mx-auto bg-gray-100 p-4 flex items-center justify-end drop-shadow mb-3">
          <ButtonQuaternary title="Back to Shopping Cart" css="py-3 pl-6 pr-7 text-white" />
      </div>
    </section>


    <SpacerSecondary />
    <section>
      <div className="w-[92%] mx-auto grid lg:grid-cols-7 gap-8">
        <div className="lg:col-span-5 p-4 bg-white drop-shadow">
          <CheckoutForm />
        </div>
        <div className="lg:col-span-2 bg-gray-100 py-4 px-3">
          {/*  */}
          <section className="w-full grid grid-cols-7 text-sm font-bold bg-gray-300 border border-gray-400">
            <div className="col-span-3 p-1 border-r border-gray-400">DETAILS</div>
            <div className="col-span-2  p-1 border-r border-gray-400">QUANTITY</div>
            <div className="col-span-2 p-1">TOTAL</div>
          </section>
          {[...Array(4)].map((i, key) => (
           <section key={key} className="w-full grid grid-cols-7 text-sm border border-gray-300">
              <div className="col-span-3 p-1 border-r border-gray-300">
                Product Name <br /> 
                <span className="text-xs italic">Price: $2.00</span>
              </div>
              <div className="col-span-2 text-end p-1 border-r border-gray-300">
                20
              </div>
              <div className="col-span-2 p-1 text-end">
                $20.00
              </div>
          </section>
          ))}
          {/*  */}
          <section className="w-full grid grid-cols-7 text-sm">
            <div className="col-span-3">
            </div>
            <div className="col-span-4 grid grid-cols-2 p-1 border border-gray-300 font-bold">
                <div className="text-end p-1 border-r border-gray-300">TAX</div>
                <div className="p-1 text-end">15%</div>
            </div>
          </section>
          {/*  */}
          <section className="w-full grid grid-cols-7 text-sm">
            <div className="col-span-3">
            </div>
            <div className="col-span-4 grid grid-cols-2 p-1 bg-blue-900 text-white border border-gray-300 font-bold">
                <div className="text-end p-1 border-r border-gray-300">TOTAL</div>
                <div className="p-1 text-end">$20.00</div>
            </div>
          </section>

          <SpacerQuaternary />
          <section>
            <Heading5 title="Terms & Conditions" css="mb-1" />
            <ul className="list-disc text-sm pl-6">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aspernatur!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aspernatur!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aspernatur!</li>
            </ul>
          </section>


          <SpacerQuaternary />
          <Heading5 title="Payment Method" css="mb-1" />
          <ul>
            <li className="text-sm">
              <label>
              <input type="radio" name="payment_method" value="Payment on Delivery" 
              className="mr-2" />
              Payment on Delivery
              </label>
            </li>
          </ul>

          <SpacerQuaternary />
          <section>
            <ButtonPrimary title="Proceed" css="w-full text-white py-3 " />
          </section>
        </div>
      </div>
    </section>
    </>
  )
}

