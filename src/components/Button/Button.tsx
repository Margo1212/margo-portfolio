import { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode;
    background: "filled" | "outline";
}

export const Button = ({children, background} : ButtonProps) => {
    const backgroundColor = background === 'filled' ? 'bg-primary-500 text-[#fff]': 'bg-[#fff] border-primary-500 text-primary-500'
    return (
        <button className={`border ${backgroundColor} p-4 mr-2`}>
            {children}
        </button>
    )
}