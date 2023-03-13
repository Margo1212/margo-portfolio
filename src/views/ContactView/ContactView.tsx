import { IoMail, IoCall } from "react-icons/io5"
import { Text } from "@components/Text"
import { Button } from "@components/Button"

export const ContactView = () => {
	return (
		<section className="w-screen px-7 py-7 grid grid-cols-1">
			<div>
				<IoMail />
				<IoCall />
			</div>
			<Text weigth="normal">Do you have any questions?</Text>
			<Text weigth="normal">Contact me</Text>
			<form>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
						Name
					</label>
					<input
						className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="text"
						placeholder="Enter your name"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
						Phone
					</label>
					<input
						className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="email"
						placeholder="Enter your email"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
						Email
					</label>
					<input
						className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						placeholder="******************"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
						Message
					</label>
					<input
						className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="textfield"
						placeholder="..."
					/>
				</div>
				<Button variant="filled">Send me a message</Button>
			</form>
		</section>
	)
}
