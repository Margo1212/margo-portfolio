import { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode;
    background: "filled" | "outline";
    width: "sm" | 'lg';
}

export const Button = ({children, background, width} : ButtonProps) => {
    const backgroundColor = background === 'filled' ? 'bg-primary-300 text-[#fff] hover:bg-primary-100 active:bg-primary-500': 'border-2 bg-[#fff] border-primary-300 text-primary-300  hover:border-primary-100 hover:text-primary-100 active:border-primary-500 active:text-primary-500'
    const btnWidth = width  === 'sm' ? 'w-40': 'w-1/2'
    return (
        <button className={`rounded-full ${backgroundColor} ${btnWidth} p-2 mr-2 drop-shadow-lg`}>
            {children}
        </button>
    )
}