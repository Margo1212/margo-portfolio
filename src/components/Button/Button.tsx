import { ButtonHTMLAttributes, ReactNode } from "react"

export type ButtonProps = {
	children?: ReactNode
	variant?: string
	width?: "sm" | "lg"
} & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonVariants = "filled" | "outline"

const variantClasses: Record<ButtonVariants, string> = {
	filled:
		"rounded-full p-2 mr-2 drop-shadow-lg bg-primary-300 text-[#fff] hover:bg-primary-100 active:bg-primary-500",
	outline:
		"rounded-full p-2 mr-2 drop-shadow-lg border-2 bg-[#fff] border-primary-300 text-primary-300  hover:border-primary-100 hover:text-primary-100 active:border-primary-500 active:text-primary-500",
}

export const Button = ({ children, variant, width, ...props }: ButtonProps) => {
	const btnWidth = width === "sm" ? "w-36" : "w-1/2"
	return (
		<button
			className={`${variantClasses[variant as keyof Record<ButtonVariants, string>]} ${btnWidth}`}
			{...props}
		>
			{children}
		</button>
	)
}
