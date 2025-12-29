"use client"

import { useEffect, useRef, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";


interface PropsInterface {
  onChange: (file: File | null) => void;
  maxSize?: number; // in bytes
  acceptedFormats?: string[];
  label?: string,
  src?: string | null,
}

export default function ImageInputPrimary({
    label="Image",
    onChange, 
    src=null,
    maxSize = 10 * 1024 * 1024, // 5MB default
    acceptedFormats = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
}: PropsInterface
) {
    const imageRef = useRef<HTMLInputElement | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(src);
    const [fileName, setFileName] = useState<string>('');

    // Update imagePreview when src prop changes
    useEffect(() => {
        setImagePreview(src);
        // If src is provided, extract filename from path
        if (src) {
          const pathParts = src.split('/');
          setFileName(pathParts[pathParts.length - 1]);
        } else {
          setFileName('');
        }
    }, [src]);

    const handleFile = (file: File): void => {
        // Validate file type
        if (!acceptedFormats.includes(file.type)) {
        alert(`Please select a valid image file (${acceptedFormats.join(', ')})`);
        return;
        }

        // Validate file size
        if (file.size > maxSize) {
        alert(`File size must be less than ${(maxSize / (1024 * 1024)).toFixed(1)}MB`);
        return;
        }

        setFileName(file.name);
        
        // Create preview
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
            setImagePreview(e.target.result as string);
        }
        };
        reader.readAsDataURL(file);

        // Call parent component's handler
        onChange(file);
    };

    const handleAddImage = (): void => {
        imageRef.current?.click();
    };

    const handleRemoveImage = (): void => {
        setImagePreview(null);
        setFileName('');
        if (imageRef.current) {
            imageRef.current.value = '';
        }
        onChange(null);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    }

  return (
    <>
    <div className="bg-white drop-shadow-xl rounded-xl overflow-hidden w-full">
        <input 
            ref={imageRef}
            type="file" 
            hidden
            onChange={handleChange}
        />
        <p className="pt-2 px-2 pb-1 font-light">{label}</p>
        <div
            className={`relative cursor-pointer aspect-[5/4] overflow-hidden
            border-3 border-dashed border-gray-300
            `}>
            <div className="w-full h-full absolute z-5 flex flex-col items-center justify-center gap-2">
                <MdOutlineFileUpload className="text-5xl text-gray-500" />
                <p className="font-light text-gray-500"> Click to upload image.</p>
            </div>
            <div className="w-full h-full absolute z-10 overflow-hidden">
                {imagePreview ?
                <img src={imagePreview} className="w-full h-full object-cover" />
                : "" }
            </div>
            <div className={`w-full h-full absolute z-20 group 
                    hover:bg-black/20 bg-transparent ease-in-out transition-all duration-200
                flex items-center justify-center gap-2
            `}>
                <button 
                    type="button"
                    onClick={handleAddImage} 
                    className={`hidden group-hover:block cursor-pointer px-4 py-1 rounded-xl  
                        drop-shadow-lg bg-linear-to-br from-blue-500 to-blue-800 text-white
                        hover:bg-linear-to-br hover:from-blue-600 hover:to-blue-900
                        ease-in-out transition-all duration-200 text-sm `}>
                    Add
                </button>
                <button 
                    type="button"
                    onClick={handleRemoveImage} 
                    className={`hidden group-hover:block cursor-pointer px-4 py-1 rounded-xl  
                        drop-shadow-lg bg-linear-to-br from-red-500 to-red-800 text-white
                        hover:bg-linear-to-br hover:from-red-600 hover:to-red-900
                        ease-in-out transition-all duration-200 text-sm `}> 
                    Remove
                </button>
            </div>
        </div>
        <p className="pt-2 px-2 pb-3 font-medium text-sm text-gray-500">
            {fileName}
        </p>
    </div>
    </>
  )
}
