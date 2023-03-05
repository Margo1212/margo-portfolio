import { ReactNode } from "react"

type CardProps = {
	children: ReactNode
	size: "sm" | "md"
	border: "border" | "none"
}

export const Card = ({ children, size, border }: CardProps) => {
	const sizeOfCard = size === "sm" ? "w-52 h-56" : "w-[25rem] h-[32rem]"
	const isCardWithBorder = border === "border" ? "border-b-8 border-primary-300" : null
	return (
		<div className={`${sizeOfCard} bg-[#fff] drop-shadow-lg ${isCardWithBorder}  rounded-lg `}>
			{children}
		</div>
	)
}
