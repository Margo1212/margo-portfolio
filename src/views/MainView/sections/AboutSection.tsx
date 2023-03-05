import { Button } from "@components/Button"
import { Text } from "@components/Text"
import AboutImage from "@svg/image-comp.svg"
import Link from "next/link"

export const AboutSection = () => {
	return (
		<section id="about" className="container w-full h-[32rem] px-32 flex items-center">
			<div className="w-1/2 flex justify-center">
				<AboutImage />
			</div>
			<div className="w-1/2 flex-col items-center px-10">
				<Text weigth="semibold" color="primary" size="text-3xl">
					About me
				</Text>
				<div className="mt-5 mb-10 pr-10">
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
				<Button width="sm" variant="filled">
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
