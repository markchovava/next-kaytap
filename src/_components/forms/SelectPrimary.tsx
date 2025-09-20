"use client"

interface SelectPrimaryInterface{
    name?: string,
    label: string,
    dbData: any[],
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}

export default function SelectPrimary({
  label, 
  name, 
  value, 
  dbData, 
  onChange= () => {}
}: SelectPrimaryInterface
) {
  return (
    <div className='flex gap-1 items-center justify-start'>
        <p>{label}</p>
        <select
            name={name}
            onChange={onChange}
            value={value}
            className='px-2 py-1.5 outline-none border border-gray-300'>
            <option value="">Default</option>
            {dbData.map((i, key) => (
                <option key={key} value={i.value}>{i.name}</option>
            ))}
        </select>
    </div>
  )
}