import { ReactNode } from "react"

type CardProps = {
	children: ReactNode
	size: "sm" | "md"
}

export const Card = ({ children, size }: CardProps) => {
	const sizeOfCard = size === "sm" ? "w-52 h-56" : "w-[25rem] h-[32rem]"
	return (
		<div className={`${sizeOfCard} bg-[#fff] drop-shadow-lg border-b-8 rounded-lg border-primary-300`}>
			{children}
		</div>
	)
}
