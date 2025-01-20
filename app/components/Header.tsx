import { getAllProducts } from "@/supabase"
import { translations } from "../translations"
import Link from "next/link"

export default async function Header() {
  console.log(await getAllProducts())

  return (
    <nav>
      <Link href="/">{translations.nav.account}</Link>
      <Link href="/">{translations.nav.addProduct}</Link>
      <Link href="/">{translations.nav.messages}</Link>
      <Link href="/">{translations.nav.favorites}</Link>
    </nav>
  )
}
