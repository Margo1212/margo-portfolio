import { Button } from "@components/Button"
import { Text } from "@components/Text"
import MainImage from "@svg/mainimg.svg"
import { Scroller } from "@components/Scroller"
import Link from "next/link"

export const HomeSection = () => {
	return (
		<section
			id="home"
			className=" w-screen m-0 px-7 pt-7 space-y-2 grid grid-cols-1 lg:w-screen lg:justify-items-stretch lg:px-32 lg:place-items-center lg:grid-cols-2 lg:grid-rows-5 lg:h-[calc(min(100vh-80px))] "
		>
			<div className="text-center md:text-start lg:space-y-3 lg:pr-44 lg:place-items-center lg:row-start-1 lg:col-start-1 lg:row-end-4 lg:col-end-2">
				<Text weigth="semibold" color="primary-300" size="text-2xl">
					Hi there!
				</Text>
				<Text weigth="bold" color="primary" size="text-6xl">
					I`m Margo
				</Text>
				<Text weigth="semibold" color="primary-300" size="text-2xl">
					junior front-end developer
				</Text>
				<Text weigth="normal" color="text-dark" size="text-lg">
					I love creating beautiful, responsive, user-friendly websites and web applications using modern
					front-end technologies.
				</Text>
			</div>

			<div className="w-full lg:row-start-1 lg:col-start-2 lg:row-end-5 lg:col-end-3">
				<MainImage />
			</div>
			<div className="grid grid-cols-1 space-y-4 lg:space-y-0 lg:grid lg:grid-cols-4 lg:row-start-4 lg:col-start-1 lg:row-end-5 lg:col-end-2">
				<Button variant="filled">
					<Link href="/contact">
						<Text weigth="semibold" color="#fff" size="text-base">
							Contact me
						</Text>
					</Link>
				</Button>
				<Button variant="outline">
					<Text weigth="semibold" size="text-base">
						Download CV
					</Text>
				</Button>
			</div>

			<div className="hidden lg:block lg:absolute lg:bottom-2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
				<Scroller />
			</div>
		</section>
	)
}
