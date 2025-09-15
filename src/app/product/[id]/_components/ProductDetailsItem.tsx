"use client"
import React from 'react'


export default function ProductDetailsItem() {
  return (
    <div
        className="w-full border-t border-gray-300 grid grid-cols-3">
        <div className="col-span-1 border-r border-gray-300 px-2 py-1">
        Property
        </div>
        <div className="col-span-2 px-2 py-1">Sample description for property </div>
    </div>
  )
}
