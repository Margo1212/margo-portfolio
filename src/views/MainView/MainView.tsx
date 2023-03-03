import { Text } from "@components/Text"
import OfferImage from "@svg/image-offer.svg"
import { Card } from "@components/Card"
import { HomeSection } from "@sections/HomeSection"
import { AboutSection } from "@sections/AboutSection"

export const MainView = () => {
	return (
		<>
			<HomeSection />
			<AboutSection />
			<section className="container w-full h-screen px-32">
				<div className="w-full flex justify-center">
					<Text weigth="semibold" color="primary" size="text-3xl">
						What can I do for you
					</Text>
				</div>
				<div className="flex flex-wrap justify-around">
					<Card size="sm">blaaa</Card>
					<div className="flex grow">
						<OfferImage />
					</div>

					<Card size="sm">blaaa</Card>
					<Card size="sm">blaaa</Card>
					<Card size="sm">blaaa</Card>
					<Card size="sm">blaaa</Card>
				</div>
			</section>
		</>
	)
}
