import SkillsImage from "@svg/image-skills.svg"
import { Text } from "@components/Text"

export const SkillsSection = () => {
	return (
		<section className="container w-full h-screen px-32">
			<div className="w-full flex justify-center">
				<Text size="text-3xl" color="primary" weigth="semibold">
					Stack of technologies
				</Text>
			</div>
			<div className="w-full flex justify-center">
				<SkillsImage />
			</div>
		</section>
	)
}
