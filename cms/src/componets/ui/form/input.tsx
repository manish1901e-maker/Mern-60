import React from "react";
import { useController, type Control, type FieldValues, type Path } from "react-hook-form";


interface ITextInputProps<T extends FieldValues>{
    className?: string
    name: Path<T>
    type?: React.HTMLInputAutoCompleteAttribute
    control: Control<T>
    errMsg?: string
}
export const TextInput=<T extends FieldValues>({className='', name, type='text', control, errMsg=''}: Readonly<ITextInputProps<T>>)=> {
    const {field}= useController({
        name:name,
        control: control
    })
    return(
        <>
        <input 
        className={`w-full p-2 border border-gray-200 shadow-md rounded-md bg-gray-50 ${className}` }
        type={type}
        {... field}
        placeholder={`Enter your ${name}`} />
        <span className="text-red-700 text-sm font-light italic">{errMsg}</span>

</>
    )

}

interface ISelectOption {
    label: string
    value: string
}

interface ISelectInputProps<T extends FieldValues> {
    className?: string
    name: Path<T>
    control: Control<T>
    options: ISelectOption[]
    placeholder?: string
    errMsg?: string
}

export const SelectInput = <T extends FieldValues>({
    className = '',
    name,
    control,
    options,
    placeholder = 'Select an option',
    errMsg = '',
}: Readonly<ISelectInputProps<T>>) => {
    const { field } = useController({
        name,
        control,
    })

    return (
        <>
            <select
                className={`w-full p-2 border border-gray-200 shadow-md rounded-md bg-gray-50 ${className}`}
                {...field}
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            <span className="text-red-700 text-sm font-light italic">{errMsg}</span>
        </>
    )
}
