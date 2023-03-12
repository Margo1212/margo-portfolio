import { Text } from "@components/Text"
import OfferImage from "@svg/image-offer.svg"
import { Card } from "@components/Card"

export const OfferSection = () => {
	return (
		<section className="w-screen lg:h-screen py-7 px-7 lg:px-32">
			<div className="text-center">
				<Text weigth="semibold" color="primary" size="text-3xl">
					What can I do for you
				</Text>
			</div>
			<div className="w-full grid grid-col-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:items-center lg:[&>*]:justify-self-center gap-10 mt-10">
				<Card border="border" size="sm">
					blaaa
				</Card>
				<div className="hidden lg:block">
					<OfferImage />
				</div>

				<Card border="border" size="sm">
					blaaa
				</Card>
				<Card border="border" size="sm">
					blaaa
				</Card>
				<Card border="border" size="sm">
					blaaa
				</Card>
				<Card border="border" size="sm">
					blaaa
				</Card>
			</div>
		</section>
	)
}
