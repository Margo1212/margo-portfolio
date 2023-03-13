import SkillsImage from "@svg/image-skills.svg"
import { Text } from "@components/Text"

export const SkillsSection = () => {
	return (
		<section className="w-full px-7 pb-7 lg:h-screen lg:px-32">
			<div className="w-full flex justify-center">
				<Text size="text-3xl" color="primary" weigth="semibold">
					Stack of technologies
				</Text>
			</div>
			<div className="flex w-full justify-center">
				<div className="w-[100vw] md:w-[37vw]">
					<SkillsImage />
				</div>
			</div>
		</section>
	)
}
