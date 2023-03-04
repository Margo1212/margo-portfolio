import { Text } from "@components/Text"
import OfferImage from "@svg/image-offer.svg"
import { Card } from "@components/Card"

export const OfferSection = () => {
	return (
		<section className="container w-full h-screen px-32">
			<div className="w-full flex justify-center">
				<Text weigth="semibold" color="primary" size="text-3xl">
					What can I do for you
				</Text>
			</div>
			<div className="grid grid-cols-3 grid-rows-2 items-center [&>*]:justify-self-center gap-10 mt-20">
				<Card size="sm">blaaa</Card>
				<div className="">
					<OfferImage />
				</div>

				<Card size="sm">blaaa</Card>
				<Card size="sm">blaaa</Card>
				<Card size="sm">blaaa</Card>
				<Card size="sm">blaaa</Card>
			</div>
		</section>
	)
}
