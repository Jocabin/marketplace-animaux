import type { Metadata } from "next"
import "../style/globals.css"
import Script from "next/script"
import CategoriesList from "../components/CategoriesList"
import Footer from "../components/Footer"
import { PrimeReactProvider } from "primereact/api"
import "primereact/resources/themes/saga-orange/theme.css"
import "primeicons/primeicons.css"
import { Urbanist, Quicksand } from "next/font/google"
import { Suspense } from "react"
import { translations } from "@/lib/translations"
import HeaderResponsive from "@/components/HeaderResponsive"

const urbanist = Urbanist({ weight: "600", subsets: ["latin"] })
const quicksand = Quicksand({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: translations.site.title,
  description: translations.site.description,
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <Script
        src="https://kit.fontawesome.com/123bd410f9.js"
        crossOrigin="anonymous"
      />
      <head>
      <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
      <link rel="manifest" href="/favicons/manifest.json"/>
      </head>
      <body
          className={`${quicksand.className} ${urbanist.className}`}
          style={
              {
                  "--font-quicksand": quicksand.style.fontFamily,
                  "--font-urbanist": urbanist.style.fontFamily,
              } as React.CSSProperties
          }
      >
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png"/>
      <meta name="theme-color" content="#ffffff"/>
      <PrimeReactProvider>
          <div className="main--container">
            <Suspense>
              <HeaderResponsive />
            </Suspense>
            <CategoriesList />
            <div className="main--content">{children}</div>
            <Footer />
          </div>
      </PrimeReactProvider>
      </body>
    </html>
  )
}
