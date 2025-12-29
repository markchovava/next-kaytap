"use client"

import { baseURL } from "@/_api/baseURL";
import ImageInput from "@/_components/forms/ImageInput";
import { useProductImageStore } from "@/_store/useProductImageStore";


export function ProductImageEdit() {
    const {  
        imagesList,
        setImage,
        removeImage,
        deletedImagesList,
        setDeletedImage,
    } = useProductImageStore()

    const handleImageChange = (file: File | null, priority: number): void => {
        setImage(priority, file);
        handleImageRemove(priority)
    };

    const handleImageRemove = (priority: number) => {
        const image = imagesList.find(img => img.priority === priority);
        
        // If the image has a database ID (from productImages), track it for deletion
        if (image && image.id) {
            setDeletedImage(image.id);
        }
        
        // Remove from UI
        removeImage(priority);
    };

    // Get image preview URL for each slot
    const getImagePreview = (priority: number): string | null => {
        const image = imagesList.find(img => img.priority === priority);
        if (image?.imgFile) {
            return URL.createObjectURL(image.imgFile);
        }
        return baseURL + image?.img || null;
    };

    // Check if image exists
    const hasImage = (priority: number): boolean => {
        const preview = getImagePreview(priority);
        return preview !== null;
    };

    console.log('imagesList ', imagesList)
    console.log('deletedImagesList  ', deletedImagesList)

    return (
        <section className='grid grid-cols-2 gap-4'>
            {[1, 2, 3, 4].map((priority) => {
                const imageExists = hasImage(priority);
                return (
                    <div key={priority} className='bg-white drop-shadow-md relative'>
                        <ImageInput
                            label={`Image ${priority}${priority === 1 ? ' (Primary)' : ''}`}
                            src={getImagePreview(priority)}
                            onImageChange={(file) => handleImageChange(file, priority)}
                            maxSize={5 * 1024 * 1024}
                            acceptedFormats={['image/jpeg', 'image/jpg', 'image/png', 'image/gif']}
                        />
                        {/* {imageExists && (
                            <button
                                type="button"
                                onClick={() => handleImageRemove(priority)}
                                className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-all"
                                title="Remove image"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )} */}
                    </div>
                );
            })}
        </section>
    )  
}