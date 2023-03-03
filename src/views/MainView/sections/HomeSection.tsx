import { Button } from "@components/Button"
import { Text } from "@components/Text"
import MainImage from "@svg/mainimg.svg"
import { Scroller } from "@components/Scroller"
import Link from "next/link"

export const HomeSection = () => {
	return (
		<section id="home" className="container h-[calc(100vh-80px)] w-full px-32 flex">
			<div className="w-1/2 pt-20">
				<div>
					<Text weigth="semibold" color="primary-300" size="text-2xl">
						Hi there!
					</Text>
					<Text weigth="bold" color="primary" size="text-6xl">
						I'm Margo
					</Text>
					<Text weigth="semibold" color="primary-300" size="text-2xl">
						junior front-end developer
					</Text>
				</div>
				<div className="w-96 my-10">
					<Text weigth="normal" color="text-dark" size="text-lg">
						I love creating beautiful, responsive, user-friendly websites and web applications using
						modern front-end technologies.
					</Text>
				</div>
				<div className="w-full flex flex-row">
					<Button width="sm" background="filled">
						<Link href="/contact">
							<Text weigth="semibold" color="#fff" size="text-base">
								Contact me
							</Text>
						</Link>
					</Button>
					<Button width="sm" background="outline">
						<Text weigth="semibold" size="text-base">
							Download CV
						</Text>
					</Button>
				</div>
			</div>
			<div className="w-2/4 flex pt-10 pl-5">
				<MainImage />
			</div>
			<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<Scroller />
			</div>
		</section>
	)
}
