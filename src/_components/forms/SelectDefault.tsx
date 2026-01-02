"use client"

interface PropsInterface{
    name: string,
    label?: string,
    data: any[],
    value?: string | number,
    error?: string,
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}


export default function SelectDefault({
    name,
    label, 
    data,
    value, 
    error,
    onChange,
}: PropsInterface) {
  
    return (
        <div className='flex flex-col gap-1 items-start justify-start'>
            {label && <p className="font-light">{label}:</p> }
            <select
                name={name}
                onChange={onChange} 
                value={value}
                className='w-full px-2 py-1.5 outline-none border border-gray-300'>
                <option value="">Default</option>
                {data.map((i, key) => (
                    <option 
                        key={key} 
                        value={i.id}>
                        {i.name}
                    </option>
                ))}
            </select>
            {error &&
                <p className="text-sm text-red-500">{error}</p>}
        </div>
  )
}
