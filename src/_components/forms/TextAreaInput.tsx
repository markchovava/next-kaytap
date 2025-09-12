"use client"

interface TextAreaInterface {
    label?: string
    name: string,
    value: string,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function TextAreaInput(
    {
        label, 
        name, 
        value, 
        placeholder, 
        onChange
    }: TextAreaInterface
) {

  return (
    <div className='w-full'>
        <p className='mb-1 font-light'>{label}:</p>
        <textarea
            value={value} 
            name={name}
            onChange={onChange}
            placeholder={placeholder} 
            className='w-full h-[10rem] px-3 py-2 rounded-lg outline-none border border-gray-300 focus:border-gray-500 ease-initial duration-200 transition-all' 
        ></textarea>
    </div>
  )

}