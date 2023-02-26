// import Footer from './footer'

import { Navigation } from "@components/Navigation";
import { ReactElement } from "react";

type LayoutProps = {
  children?: ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}
