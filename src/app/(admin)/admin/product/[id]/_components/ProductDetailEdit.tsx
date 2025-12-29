"use client"
import TextInput from "@/_components/forms/TextInput";
import { useProductDetailStore } from "@/_store/useProductDetailStore";
import generateUniqueId from "@/_utils/generateUniqueId";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";



export function ProductDetailEdit() {
    const { 
        data, 
        detailList,
        setInputValue, 
        editInputValue, 
        errors, 
        addDetailList,
        validateForm,
        removeData,
        setDeletedDetail, 
    } = useProductDetailStore();

    const handleAddData = () => {
        const validation = validateForm();
        if (!validation.isValid) {
            const firstError = validation.errors.name || validation.errors.value;
            toast.warn(firstError);
            return;
        }
        const uniqueId = generateUniqueId();
        addDetailList({ ...data, id: uniqueId });
    }

    const handleRemoveData = (id: string | number) => {
        removeData(id);
    }

    return (
        <>
            <section className='grid grid-cols-9 gap-3'>
                <div className='col-span-4'>
                    <TextInput
                        label='Name' 
                        name='name' 
                        type="text"
                        value={data.name} 
                        placeholder='Enter Name here...'
                        onChange={setInputValue} 
                        error={errors.name}
                    />
                </div>
                <div className='col-span-4'>
                    <TextInput
                        label='Value' 
                        name='value' 
                        type="text"
                        value={data.value} 
                        placeholder='Enter Value here...'
                        onChange={setInputValue} 
                        error={errors.value}
                    />
                </div>
                <div className='col-span-1 pt-6'>
                    <button 
                        type='button' 
                        onClick={handleAddData} 
                        className='group cursor-pointer flex items-center justify-center w-full h-[100%] py-3'>
                        <IoIosAddCircleOutline className='text-blue-700 text-[1.8rem] group-hover:scale-110 transition-all ease-in-out' />
                    </button>
                </div>
            </section>

            <div className='border-b mt-2 mb-3 border-gray-300' />

            { detailList.map((i, key) => (
                <section key={key} className='grid grid-cols-9 gap-3 mb-2'>
                    <div className='col-span-4'>
                        <TextInput
                            name='name' 
                            type="text"
                            value={i.name} 
                            placeholder='Enter Name here...'
                            onChange={(e) => editInputValue(i.id, e)} 
                        />
                    </div>
                    <div className='col-span-4'>
                        <TextInput
                            name='value' 
                            type="text"
                            value={i.value} 
                            placeholder='Enter Value here...'
                            onChange={(e) => editInputValue(i.id, e)} 
                        />
                    </div>
                    <div className='col-span-1'>
                        <button 
                            type='button' 
                            onClick={() => handleRemoveData(i.id)} 
                            className='group cursor-pointer flex items-center justify-center w-full h-[100%] py-3'
                        >
                            <FaDeleteLeft className='text-[1.5rem] text-red-600 group-hover:scale-110 transition-all ease-in-out' />
                        </button>
                    </div>
                </section>
            )) }
        </>
    )
}