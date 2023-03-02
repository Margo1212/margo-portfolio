import { Button } from "@components/Button"
import { Scroller } from "@components/Scroller"
import { Text } from "@components/Text"
import MainImage from "@svg/mainimg.svg"
import AboutImage from "@svg/image-comp.svg"
import Link from "next/link"

export const MainView = () => {
	return (
		<>
			<section id="main" className="container h-[calc(100vh-80px)] px-32 flex">
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
			<section id="about" className="container h-[40rem] px-32 flex">
				<div>
					<AboutImage />
				</div>
				<div className="px-20 py-10">
					<Text weigth="semibold" color="primary" size="text-3xl">
						About me
					</Text>
					<Text weigth="normal" color="primary" size="text-base">
						My adventure with programming and web design began in 2020. After watching the first web
						development course on YouTube, I understood that I wanted to go further in this direction. I
						am a passionate, hardworking, and detail-oriented person. I like to work individually, but I
						also feel great working in a team. I convinced myself of it during a web programming course,
						where we worked on web applications as a team for half a year. I am looking for new
						fascinating projects where I can learn new things that will help me develop my soft and
						technical skills and allow me to continue doing what I love so much.
					</Text>
					<Button width="sm" background="filled">
						<Link href="/projects">
							<Text weigth="semibold" color="#fff" size="text-base">
								My projects
							</Text>
						</Link>
					</Button>
				</div>
			</section>
		</>
	)
}
