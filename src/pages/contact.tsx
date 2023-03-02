import { NextPage } from "next"
import { ContactView } from "@views/ContactView/ContactView"
import Head from "next/head"
import { ReactElement } from "react"
import Layout from "@components/Layout/Layout"

export default function ContactPage() {
	return (
		<>
			<Head>
				<title>Margo Lesniak | Kontakt</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ContactView />
		</>
	)
}

ContactPage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}
