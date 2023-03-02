import LinkedIn from "@svg/linkedin.svg"
import GitHub from "@svg/github.svg"
import Behance from "@svg/behance.svg"
import Instagram from "@svg/instagram.svg"
import Facebook from "@svg/facebook.svg"
import Link from "next/link"

type SocialMediaProps = {
	fill: "green" | "purple"
}

export const SocialMedia = ({ fill }: SocialMediaProps) => {
	const fillOfIcons =
		fill === "purple"
			? "fill-primary-300 hover:fill-primary-100 active:fill-primary-500"
			: "fill-secondary-300 hover:fill-secondary-500 active:fill-secondary-300"

	return (
		<ul className="flex drop-shadow-lg ">
			<li className="mx-2 ">
				<Link href="https://www.linkedin.com/in/marharyta-lesniak/" target="_blank">
					<LinkedIn className={fillOfIcons} />
				</Link>
			</li>
			<li className="mx-2">
				<Behance className={fillOfIcons} />
			</li>
			<li className="mx-2">
				<Instagram className={fillOfIcons} />
			</li>
			<li className="mx-2">
				<Facebook className={fillOfIcons} />
			</li>
			<li className="mx-2">
				<Link href="https://github.com/Margo1212" target="_blank">
					<GitHub className={fillOfIcons} />
				</Link>
			</li>
		</ul>
	)
}
