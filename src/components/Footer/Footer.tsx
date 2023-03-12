import Logo from "@svg/logo.svg"
import { NavigationMenu } from "@components/NavigationMenu/NavigationMenu"
import { SocialMedia } from "@components/SocialMedia/SocialMedia"

export const Footer = () => {
	return (
		<div className="lg:h-72 bg-[#000] lg:px-32 flex justify-center items-center">
			<div className="flex-col w-full">
				<div className="flex justify-center p-4">
					<div className="h-10 w-10 flex items-center">
						<Logo />
					</div>
				</div>
				<div className="border border-y-primary-100 flex justify-center p-4">
					<NavigationMenu color="green" />
				</div>
				<div className="flex justify-center  p-4">
					<SocialMedia fill="green" />
				</div>
				<div className="flex justify-center  p-4">
					<p className="text-secondary-300">Copyright © 2023 Marharyta Lesniak</p>
				</div>
			</div>
		</div>
	)
}
