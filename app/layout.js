
import { Inter, Open_Sans } from 'next/font/google'
import React from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


import 'simplebar-react/dist/simplebar.min.css';
import "@/styles/globals.css";


import {StoreProvider, useStore, useScopedStore} from "@/utils/store"
const ConditionalLayout = React.lazy(()=>import( "@/components/generalComponents/dynamicLayouts/ConditionalLayout"))


const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})


export const metadata = {
  title: "digital dj tips lab",
  description: "",
};


export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className={`${openSans.variable} font-sans`}>
      <body suppressHydrationWarning={true}>
        <StoreProvider>
          <ConditionalLayout> 
            {children}
          </ConditionalLayout>
        </StoreProvider>
      </body>
    </html>
  );
}
