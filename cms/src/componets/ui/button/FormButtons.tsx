import type { MouseEventHandler, ReactNode } from "react"

interface IButtonProps {
    className?: string
    children: ReactNode
    disabled?: boolean
    type: "submit" | "reset" | "button"
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export const FormActionButton = ({
    className = "",
    children,
    disabled = false,
    type = "submit",
    onClick,
}: Readonly<IButtonProps>) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
    className={`rounded-sm cursor-pointer disabled:cursor-not-allowed transtion hover:underline w-full p-2 items-center justify-center text-white  ${
        type==='reset'
        ? 'hover:bg-red-950 bg-red-800 disabled:hover:bg-red-950/50' 
        : type==="submit"
        ? "hover:bg-green-950 bg-green-800 disabled:hover:bg-green-950/40 disabled:bg-green-800/60"
        :"border border-gray-400 hover:bg-gray-300 text-gray-950"

    } ${className}`}
        >
            {children}
        </button>
    )
}

