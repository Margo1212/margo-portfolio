import { Language } from "@components/Language/Language"
import { NavigationMenu } from "@components/NavigationMenu/NavigationMenu"
import { SocialMedia } from "@components/SocialMedia/SocialMedia"
import Logo from "@svg/logo.svg"
import { useEffect, useRef, useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"

export const Navigation = () => {
	const dropdownRef = useRef(null)
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const openMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<nav
				className={`relative h-12 px-7 sm:w-screen sm:h-20 sm:px-32 flex justify-between items-center border-[0.1px] border-text-light`}
			>
				<div className="h-10 w-10 flex items-center">
					<Logo />
				</div>
				<div
					ref={dropdownRef}
					className={`sm:flex sm:items-center   ${
						isOpen
							? "visible absolute z-10 top-[3rem] right-[7px] bg-[#fff] w-34 h-44 p-8 border-[0.1px] border-text-light rounded-lg"
							: "hidden"
					}`}
				>
					<NavigationMenu color="purple" />
					<div className="hidden sm:flex">
						<SocialMedia fill="purple" />
						<Language />
					</div>
				</div>
				<div className="w-8 h-8 sm:hidden">
					<button className="w-[100%] h-[100%]" onClick={openMenu}>
						<AiOutlineMenu style={{ color: "purple", width: "100%", height: "100%" }} />
					</button>
				</div>
			</nav>

			{/* <nav
					className={` relative `}
				>
					
						<Logo />
					</div>
						
					<div>
							
					</div>
					{/* <NavigationMenu color="purple" />
					<div className="flex">
						<SocialMedia fill="purple" />
						<Language />
					</div> */}
			{/* 
				</nav>
			)} */}
		</>
	)
}
