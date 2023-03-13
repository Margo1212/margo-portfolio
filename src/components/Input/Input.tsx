import { ChangeEventHandler, InputHTMLAttributes, ReactNode, useState } from "react"

type InputProps = {
	icon?: ReactNode
	type?: "text" | "number" | "email" | "textfield"
	onChange?: (value: string) => void | undefined
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">

export const Input = ({ type, icon, onChange, ...props }: InputProps) => {
	const [value, setValue] = useState("")

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value)
		if (onChange) onChange(e.target.value)
	}
	return (
		<>
			<label>
				<span>{icon}</span>
				<input
					className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="password"
					type={type}
					value={value}
					onChange={handleChange}
					{...props}
				/>
			</label>
		</>
	)
}
