import { HomeSection } from "@sections/HomeSection"
import { AboutSection } from "@sections/AboutSection"
import { OfferSection } from "@sections/OfferSection"
import { SkillsSection } from "@sections/SkillsSection"

export const MainView = () => {
	return (
		<>
			<HomeSection />
			<AboutSection />
			<OfferSection />
			<SkillsSection />
		</>
	)
}
