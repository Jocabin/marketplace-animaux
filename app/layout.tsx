import type { Metadata } from "next"
import "../style/globals.css"
import Script from "next/script"
import Header from "../components/Header"
import HeaderMenu from "../components/CategoriesList"
import Footer from "../components/Footer"
import { PrimeReactProvider } from "primereact/api"
import "primereact/resources/themes/saga-orange/theme.css"
import "primeicons/primeicons.css"
import { Urbanist, Quicksand } from "next/font/google"
import { Suspense } from "react"
import { translations } from "@/lib/translations"

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
      <body
        className={`${quicksand.className} ${urbanist.className}`}
        style={
          {
            "--font-quicksand": quicksand.style.fontFamily,
            "--font-urbanist": urbanist.style.fontFamily,
          } as React.CSSProperties
        }
      >
        <PrimeReactProvider>
          <div className="main--container">
            <Suspense>
              <Header />
            </Suspense>
            <HeaderMenu />
            <div className="main--content">{children}</div>
            <Footer />
          </div>
        </PrimeReactProvider>
      </body>
    </html>
  )
}
