import { Language } from "@components/Language/Language"
import { NavigationMenu } from "@components/NavigationMenu/NavigationMenu"
import { SocialMedia } from "@components/SocialMedia/SocialMedia"
import Logo from "@svg/logo.svg"
import { useRef, useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { IoClose } from "react-icons/io5"

export const Navigation = () => {
	const dropdownRef = useRef(null)
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const openMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<nav
				className={`relative h-12 px-7 lg:w-screen lg:h-20 lg:px-32 flex justify-between items-center border-[0.1px] border-text-light`}
			>
				<div className="h-10 w-10 flex items-center">
					<Logo />
				</div>
				<div
					ref={dropdownRef}
					className={` lg:flex lg:w-2/3 lg:justify-between lg:items-center   ${
						isOpen
							? "visible absolute z-10 top-0 right-0 bg-[#fff] w-34 h-44 p-8 border-[0.1px] border-text-light rounded-lg"
							: "hidden"
					}`}
				>
					<div className="absolute top-0 right-0 w-8 h-8 lg:hidden">
						<button className="w-[100%] h-[100%]" onClick={openMenu}>
							<IoClose style={{ color: "purple", width: "100%", height: "100%" }} />
						</button>
					</div>
					<NavigationMenu color="purple" />
					<div className="hidden md:flex">
						<SocialMedia fill="purple" />
						<Language />
					</div>
				</div>
				<div className="w-8 h-8 lg:hidden">
					<button className="w-[100%] h-[100%]" onClick={openMenu}>
						<AiOutlineMenu style={{ color: "purple", width: "100%", height: "100%" }} />
					</button>
				</div>
			</nav>
		</>
	)
}
