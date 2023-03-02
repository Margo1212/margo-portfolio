type InputProps = {
	size?: "text-6xl" | "text-2xl" | "text-xl" | "text-base" | "text-lg" | "text-3xl"
	weigth: "normal" | "medium" | "bold" | "semibold"
	color?: "primary" | "primary-300" | "text-dark" | "#fff"
	children: string
}

export const Text = ({ size = "text-base", color = "#fff", weigth, children }: InputProps) => {
	return <p className={`${size} py-1 text-${color} font-${weigth} drop-shadow-lg`}>{children}</p>
}
