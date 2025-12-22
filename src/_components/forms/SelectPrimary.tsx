"use client"

interface PropsInterface{
    name?: string,
    label: string,
    dbData: any[],
    value?: string,
    error?: string,
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}

export default function SelectPrimary({
  label, 
  name, 
  value, 
  dbData, 
  error,
  onChange
}: PropsInterface
) {
  return (
    <div className='flex flex-col gap-1 items-start justify-start'>
        <p className="font-light">{label}</p>
        <select
            name={name}
            onChange={onChange}
            value={value}
            className='w-full px-2 py-1.5 outline-none border border-gray-300'>
            <option value="">Default</option>
            {dbData.map((i, key) => (
                <option key={key} value={i.value}>{i.name}</option>
            ))}
        </select>
        { error &&
          <p className="text-sm text-red-600 font-light">
            {error}
          </p> 
        }
    </div>
  )
}