import Link from "next/link"

type NavigationProps = {
	color: "purple" | "green"
}

export const NavigationMenu = ({ color }: NavigationProps) => {
	const navlinks =
		color === "purple"
			? "text-primary-300 hover:text-primary-100 hover:underline decoration-2  active:text-primary-500 active:underline hover:decoration-secondary-300 active:decoration-secondary-500 decoration-wavy"
			: "text-secondary-300 hover:text-secondary-500  active:text-secondary-500"
	return (
		<ul className="flex w-1/3 justify-between font-semibold text-base">
			<li className={navlinks}>
				<Link href="/">about</Link>
			</li>
			<li className={navlinks}>
				<Link href="/projects">portfolio</Link>
			</li>
			<li className={navlinks}>
				<Link href="/contact">contact</Link>
			</li>
		</ul>
	)
}
