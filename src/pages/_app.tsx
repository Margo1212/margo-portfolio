import "../styles/globals.css";

import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

type PageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};


function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page)
  
  return getLayout(<Component {...pageProps} />);
}

export default App;
