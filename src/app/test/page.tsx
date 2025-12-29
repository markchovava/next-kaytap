"use client"
import ImageInputPrimary from "@/_components/forms/ImageInputPrimary";
import { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";


const db = {
    img: "",
    imgFile: null
}

export default function page() {
    const [data, setData] = useState(db)

    const handleChange = (file: File | null) => {
        console.log(file);
    }
   
   
  return (
    <>
   
    <section className="w-[100vw] min-h-screen flex items-center justify-center">
        <div className="w-[20rem]">
            <ImageInputPrimary
                label="Image"
                onChange={handleChange} 
                src=""
            />
        </div>
    </section>
        {/* <div>
            <input
                hidden 
                ref={inputRef} 
                type="file" 
                onChange={handleChange}
                value={inputRef.current ? inputRef.current.value : ""}
                placeholder="Type something..." 
            />
            <button onClick={handleFocus}>Click</button>
        </div> */}
    </>
  )
}
