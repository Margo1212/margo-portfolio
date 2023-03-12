import { Button } from "@components/Button"
import { Text } from "@components/Text"
import AboutImage from "@svg/image-comp.svg"
import Link from "next/link"

export const AboutSection = () => {
	return (
		<section
			id="about"
			className="w-screen py-6 px-7 h-[50vh] lg:w-screen grid lg:grid-cols-2 lg:h-[32rem] lg:px-32 space-y-2"
		>
			<div className="hidden lg:flex lg:justify-center">
				<AboutImage />
			</div>
			<div className="w-full lg:flex  lg:flex-col items-center space-y-6 text-center lg:pl-5">
				<Text weigth="semibold" color="primary" size="text-3xl">
					About me
				</Text>
				<div className="lg:mt-5 lg:mb-10 text-justify indent-4 space-y-2">
					<Text weigth="normal" color="text-dark" size="text-base">
						My adventure with creating applications and websites began in 2020. Since then, I have been
						expanding my knowledge of programming and web design day by day.
					</Text>
					<Text weigth="normal" color="text-dark" size="text-base">
						I am an ambitious, hardworking, and detail-oriented person. I like working independently,
						but also feel great working in a team. I am looking for new, fascinating projects where I
						can learn new things that will help me develop my soft and technical skills and allow me to
						continue doing what I love so much.
					</Text>
				</div>
				<Button variant="filled">
					<Link href="/projects">
						<Text weigth="semibold" color="#fff" size="text-base">
							My projects
						</Text>
					</Link>
				</Button>
			</div>
		</section>
	)
}
